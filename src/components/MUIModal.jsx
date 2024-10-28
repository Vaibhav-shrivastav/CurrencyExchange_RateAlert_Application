import * as React from "react";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import UKLogo from "../media/HomeScreens/Dashboard/UKLogo.png";
import UAELogo from "../media/HomeScreens/Dashboard/UAELogo.png";
import { db } from "../Auth/config";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../Auth/config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#333333",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export default function MUIModal({ open, handleClose, selected }) {
  const [title, setTitle] = useState("");
  const [rateValue, setRateValue] = useState("");

  const [formAlert, setFormAlert] = useState("");

  const handleSetAlert = async () => {
    try {
      const userEmail = auth.currentUser?.email;
      if (!userEmail) throw new Error("User is not signed in.");

      if (title === "" || rateValue === "") {
        setFormAlert("Please complete all fields to continue");
        setTimeout(() => {
          setFormAlert("");
        }, 2000);
        return;
      }

      await addDoc(collection(db, "alerts"), {
        email: userEmail,
        title: title,
        value: rateValue,
        country: selected,
        timestamp: new Date(),
      });

      setTitle("");
      setRateValue("");
      handleClose();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex flex-col gap-2 justify-center">
              <p className="text-white font-semibold text-center text-lg">
                Set Rate alert!
              </p>
              <div className="flex flex-col justify-center items-center gap-3 p-[24px]">
                <img
                  src={selected == "UK" ? UKLogo : UAELogo}
                  className="w-[64px] h-[64px]"
                  alt=""
                />
                <p className="text-white text-[16px] ">
                  {selected == "UK" ? "UK £(GBP)" : "UAE (AED)"}
                </p>
              </div>
              <div className=" flex flex-col gap-3 p-6">
                <p className="text-[14px] text-[#D5D6DE] font-semibold">
                  Title
                </p>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-[#4F4F4F] text-white w-full rounded-[12px] py-3 px-4"
                />
                <p className="text-[14px] text-[#D5D6DE] font-semibold">
                  Rate alert Value
                </p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
                    ₹
                  </span>
                  <input
                    type="text"
                    onChange={(e) => setRateValue(e.target.value)}
                    className="bg-[#4F4F4F] text-white w-full rounded-[12px] py-3 px-10"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                {formAlert != "" ? (
                  <p className="text-red-500">{formAlert}</p>
                ) : (
                  <></>
                )}
              </div>

              <button
                onClick={() => handleSetAlert()}
                className="flex h-[40px] px-[16px] justify-center items-center gap-[8px] rounded-full bg-[#81EBAB] transition-all duration-300 transform hover:bg-[#62e496] hover:scale-105"
              >
                <p className="text-[#0B0B0B] font-semibold text-[14px] leading-[21px]">
                  Set alert
                </p>
                <p>+</p>
              </button>
              <button
                onClick={() => handleClose()}
                className="flex justify-center items-center text-[#FFFFFF] text-[12px] transition-all duration-300 transform hover:scale-110"
              >
                Cancel
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
