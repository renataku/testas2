import React from "react";
import Top from "./Services/Top";
import Card from "./Services/Card";
import "./Services.css";
import { BiLayer, BiPalette, BiCommand, BiFingerprint } from "react-icons/bi";

const cards = [
  {
    icon: <BiLayer />,
    title: "Lorem ipsum",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, explicabo unde minima",
  },
  {
    icon: <BiPalette />,
    title: "Sed ut perspiciatis",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, explicabo unde minima",
  },
  {
    icon: <BiCommand />,
    title: "Magni dolores",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, explicabo unde minima",
  },
  {
    icon: <BiFingerprint />,
    title: "Nemo enim",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, explicabo unde minima",
  },
];

const Services = () => {
  return (
    <div className="services">
      <Top />
      <div className="services-cards">
        {cards.map((item) => (
          <Card icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Services;
