import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Logo = () => {
  return (
    <Link to="#">
      <StaticImage
        className="logo"
        src="../images/f97-logo-red.png"
        alt="forever97 red logo"
      />
    </Link>
  );
};

export default Logo;
