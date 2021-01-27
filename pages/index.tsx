import React from "react";

/** @jsx jsx */
import { jsx } from "theme-ui";
import logoRed from "../src/assets/svg/logo-red.svg";
import siguenosEnInstagram from "../src/assets/svg/siguenos-en-instagram.svg";
import Link from "next/link";

interface Content {
  title: string;
}

export default () => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "50px auto",
      }}
    >
      <Link href="https://www.instagram.com/7meeples.es/">
        <img
          sx={{
            justifySelf: "end",
            alignSelf: "center",
            height: "80%",
            marginRight: "20px",
          }}
          src={siguenosEnInstagram}
          alt="siguenos en instagram"
        />
      </Link>
      <div
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          sx={{
            height: "100%",
            maxWidth: "70%",
          }}
          src={logoRed}
          alt="logo"
        />
      </div>
    </div>
  );
};
