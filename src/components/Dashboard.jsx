import React, { useState, useEffect } from "react";
import UKLogo from "../media/HomeScreens/Dashboard/UKLogo.png";
import UAELogo from "../media/HomeScreens/Dashboard/UAELogo.png";
import Arrow from "../media/HomeScreens/Dashboard/Arrow.png";
import Pagination from "./Pagination";
import Chart from "./Charts";
import MUIModal from "./MUIModal";
import { auth, db } from "../Auth/config";
import { getDocs, collection, query, where } from "firebase/firestore";

function Dashboard() {
  const [data, setData] = useState([]);

  const [alertList, setAlertList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const alertsPerPage = 5;

  const alertsCollectionRef = collection(db, "alerts");

  const chartData = {
    labels: data.map((item) => item.resDate),
    datasets: [
      {
        label: "Exchange Rate",
        data: data.map((item) => parseFloat(item.close)),
        borderColor: "rgba(0, 255, 0, 0.7)",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        fill: true,
      },
    ],
  };

  async function getData(code = "GBPINR%3DX") {
    try {
      const response = await fetch(
        `https://vance-task-proxy-server.vercel.app/api/forex?code=${encodeURIComponent(
          code
        )}`
      );
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log("Error fetching data:", err.message);
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getAlerts();
  };

  const [selected, setSelected] = useState("UK");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    { label: "UK", symbol: "£(GBP)", currency: "GBP", logo: UKLogo },
    { label: "UAE", symbol: "AED", currency: "AED", logo: UAELogo },
  ];

  const handleSelect = (option) => {
    setSelected(option.label);
    setDropdownOpen(false);
  };

  const getAlerts = async () => {
    try {
      const userEmail = localStorage.getItem("email");
      if (!userEmail) {
        console.log("No user email found");
        return;
      }

      const q = query(
        collection(db, "alerts"),
        where("email", "==", userEmail)
      );

      const querySnapshot = await getDocs(q);
      const alerts = querySnapshot.docs.map((doc) => doc.data());

      alerts.sort((a, b) => {
        if (b.timestamp.seconds === a.timestamp.seconds) {
          return b.timestamp.nanoseconds - a?.timestamp?.nanoseconds;
        }
        return b.timestamp.seconds - a?.timestamp?.seconds;
      });

      setAlertList(alerts);
    } catch (err) {
      console.log(err);
    }
  };

  const indexOfLastAlert = currentPage * alertsPerPage;
  const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;
  const currentAlerts = alertList.slice(indexOfFirstAlert, indexOfLastAlert);

  const totalPages = Math.ceil(alertList.length / alertsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getAlerts();
  }, []);

  useEffect(() => {
    getData();
  }, [localStorage.getItem("email")]);

  return (
    <>
      <div className="flex flex-col  h-auto items-center p-[48px_400px] gap-[96px] flex-1 self-stretch bg-[#111]">
        <div className="flex flex-col items-center gap-12 self-stretch">
          <p className="text-white text-center font-bold text-[36px] leading-[120%]">
            Rate alert dashboard
          </p>
          <div className="flex flex-col items-center gap-6 w-[544px] p-6 rounded-[24px] bg-[#222]">
            <div className="relative w-full">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between  h-[40px] px-2 gap-2 rounded-[8px] bg-[#393939]"
              >
                <div className="flex w-[106px] justify-center items-center gap-2">
                  <img
                    src={selected === "UK" ? UKLogo : UAELogo}
                    className="w-[24px] h-[24px]"
                    alt=""
                  />
                  <div className="flex items-center gap-1">
                    <p className="text-white font-stabil-grotesk text-[16px] font-semibold leading-[150%]">
                      {selected}
                    </p>
                    <p className="text-white font-stabil-grotesk text-[14px] font-semibold leading-[150%] opacity-50">
                      {selected === "UK" ? "£(GBP)" : "AED"}
                    </p>
                  </div>
                </div>
                <img src={Arrow} alt="" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-[100%] left-0 mt-2 bg-[#393939] rounded-[8px] shadow-md">
                  {options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => {
                        handleSelect(option);
                        getData(`${option.currency}INR%3DX`);
                      }}
                      className="flex items-center w-full px-4 py-2 text-white hover:bg-[#555]"
                    >
                      <img
                        src={option.logo}
                        alt=""
                        className="mr-2 w-[24px] h-[24px]"
                      />
                      <span className="font-stabil-grotesk text-[16px] font-semibold">
                        {option.label}
                      </span>
                      <span className="ml-auto text-[14px] opacity-50">
                        {option.symbol}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className=""></div>

            <div className="chart-container w-full">
              <Chart apiData={data} />
            </div>

            <div className="flex px-4 justify-between items-end self-stretch">
              <div className="flex flex-col items-start gap-2">
                <p className="text-[#F9F9F9] font-stabil-grotesk text-[32px] font-bold leading-none tracking-[-0.32px]">
                  ₹ {parseFloat(data[0]?.close)?.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="flex h-[40px] px-[16px] justify-center items-center gap-[8px] rounded-full bg-[#81EBAB] transition-all duration-300 transform hover:bg-[#62e496] hover:scale-110"
              >
                <p className="text-[#0B0B0B] font-semibold text-[14px] leading-[21px]">
                  Set alert
                </p>
                <p>+</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[530px] items-start gap-6">
            <div className="flex justify-between items-center self-stretch">
              <p className="text-white text-center font-bold text-[18px] leading-[21.6px] opacity-75">
                Previous alerts
              </p>
              <div className="flex items-start gap-[5px]">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
            {alertList.length === 0 ? (
              <div className="flex justify-center items-center text-center">
                <p className="text-white flex justify-center items-center">
                  No alerts found, Set alerts to appear here!
                </p>
              </div>
            ) : (
              alertList.map((d, i) => {
                const date = new Date(
                  d.timestamp.seconds * 1000 + d.timestamp.nanoseconds / 1000000
                );
                const day = date.getDate().toString().padStart(2, "0");
                const month = (date.getMonth() + 1).toString().padStart(2, "0");
                const year = date.getFullYear().toString().slice(2);

                return (
                  <div
                    key={i}
                    className="flex h-[154px] p-6 justify-between items-start self-stretch rounded-[24px] bg-[#222] backdrop-blur-[54px]"
                  >
                    <div className="flex flex-col justify-between items-start self-stretch">
                      <div className="flex flex-col items-start gap-4 self-stretch">
                        <div className="flex flex-col items-start gap-2">
                          <p className="text-white text-center text-[16px] font-semibold leading-[120%] opacity-75">
                            {d.title}
                          </p>
                          <p className="text-[#F9F9F9] font-['Stabil Grotesk'] text-[32px] font-bold leading-[100%] tracking-[-0.32px]">
                            ₹{d.value}
                          </p>
                        </div>
                      </div>
                      <div className="flex w-[106px] justify-center items-center gap-2 self-stretch">
                        <img
                          src={d.country == "UK" ? UKLogo : UAELogo}
                          className="w-[24px] h-[24px]"
                          alt=""
                        />
                        <div className="flex items-center gap-1">
                          <p className="text-white font-stabil-grotesk text-[16px] font-semibold leading-[150%]">
                            {d.country == "UK" ? "UK" : "UAE"}
                          </p>
                          <p className="text-white font-stabil-grotesk text-[14px] font-semibold leading-[150%] opacity-50">
                            {d.country == "UK" ? "£(GBP)" : "(AED)"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 self-stretch">
                      <div className="flex justify-end items-start gap-4 self-stretch">
                        <div className="flex items-center gap-2">
                          <div className="flex h-[32px] px-[6px] justify-center items-center gap-[16px] rounded-[6px] bg-[#333]">
                            <button className="text-white">{day}</button>
                          </div>
                          <p className="text-[#757575]">/</p>
                          <div className="flex h-[32px] px-[6px] justify-center items-center gap-[16px] rounded-[6px] bg-[#333]">
                            <button className="text-white">{month}</button>
                          </div>
                          <p className="text-[#757575]">/</p>
                          <div className="flex h-[32px] px-[6px] justify-center items-center gap-[16px] rounded-[6px] bg-[#333]">
                            <button className="text-white">{year}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            {}
          </div>
        </div>
      </div>

      <MUIModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        selected={selected}
      />
    </>
  );
}

export default Dashboard;
