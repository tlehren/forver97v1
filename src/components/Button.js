import React from "react";
import { Link } from "gatsby";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";

const Button = ({ to, text }) => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Link className="btn" to={to}>
        {text} <HiArrowNarrowRight />
      </Link>
    </IconContext.Provider>
  );
};

export default Button;
