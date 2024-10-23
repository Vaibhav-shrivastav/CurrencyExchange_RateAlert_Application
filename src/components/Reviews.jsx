import React from "react";
import Person1 from "../media/HomeScreens/Reviews/Person1.png";
import Person2 from "../media/HomeScreens/Reviews/Person2.png";
import Person3 from "../media/HomeScreens/Reviews/Person3.png";
import Person4 from "../media/HomeScreens/Reviews/Person4.png";
import StarLogo from "../media/HomeScreens/Reviews/StarLogo.png";
import Testimonials from "../media/HomeScreens/Reviews/Testimonials.png"
import Testimonialss from "../media/HomeScreens/Reviews/Testimonials.jpg"

function Reviews() {
  const peopleLeft = [
    {
      name: "Joline",
      marginLeft: 83.8,
      opacity: 0.2,
      image: Person1
    },
    {
      name: "Joline",
      marginLeft: 48,
      image: Person1
    },
    {
      name: "Premjith Mp",
      marginLeft: 0,
      opacity: 0.5,
      image: Person2
    },
    {
      name: "Hardik Pandya",
      marginLeft: 48,
      image: Person3
    },
    {
      name: "Joline",
      marginLeft: 83.8,
      opacity: 0.2,
      image: Person1
    },
  ];
  const peopleRight = [
    {
      name: "Premjith Mp",
      marginRight: 83.8,
      opacity: 0.2,
      image: Person4
    },
    {
      name: "Premjith Mp",
      marginRight: 72,
      image: Person4
    },
    {
      name: "Premjith Mp",
      marginRight: 0,
      opacity: 0.5,
      image: Person4
    },
    {
      name: "Premjith Mp",
      marginRight: 48,
      image: Person4
    },
    {
      name: "Premjith Mp",
      marginRight: 83.8,
      opacity: 0.2,
      image: Person4
    },
  ];

  return (
    <div className="gap-56 w-[100%] flex flex-row justify-center">
      <img src={Testimonialss} alt="" />
    </div>
  );
}

export default Reviews;
