/** @jsx jsx */
import { jsx } from "theme-ui";

import yourPerfectHome from "../../src/assets/images/welcome-to/welcome-to-your-perfect-home.jpg";
import newLasVegas from "../../src/assets/images/welcome-to/welcome-to-new-las-vegas.jpg";
import Nav from "src/components/nav";
import Link from "next/link";

export default () => {
  const aaa = {
    borderRadius: "10px",
    width: "60%",
    height: "auto",
    objectFit: "contain",
    margin: "10px 0px",
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        position: "fixed",
        gridTemplateColumns: "100%",
        gridTemplateRows: "50px 100px auto",
        gridTemplateAreas: `
            'nav'
            'text'
            'games'
          `,
      }}
    >
      <Nav />
      <span
        sx={{
          alignSelf: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        Please select a game
      </span>

      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          gridArea: "games",
        }}
      >
        <Link href="./welcometoyourperfecthome">
          <img sx={aaa} src={yourPerfectHome}></img>
        </Link>
        <Link href="./welcometonewlasvegas">
          <img sx={aaa} src={newLasVegas}></img>
        </Link>
      </div>
    </div>
  );
};
