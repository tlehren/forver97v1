import React from "react";
import { Link } from "gatsby";
import { HiArrowNarrowDown } from "react-icons/hi";
import { IconContext } from "react-icons";

const Button = ({ to, text }) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: "1.5rem" },
      }}
    >
      <Link className="btn flex" to={to}>
        {text} <HiArrowNarrowDown />
      </Link>
    </IconContext.Provider>
  );
};

export default Button;
