/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";

import door_left_1 from "../../assets/svg/welcome-to/your-perfect-home/left/door_1_left_2.svg";
import door_left_2 from "../../assets/svg/welcome-to/your-perfect-home/left/door_2_left_2.svg";
import door_left_3 from "../../assets/svg/welcome-to/your-perfect-home/left/door_3_left_2.svg";
import door_left_4 from "../../assets/svg/welcome-to/your-perfect-home/left/door_4_left_2.svg";
import door_left_5 from "../../assets/svg/welcome-to/your-perfect-home/left/door_5_left_2.svg";
import door_left_6 from "../../assets/svg/welcome-to/your-perfect-home/left/door_6_left_2.svg";
import door_left_7 from "../../assets/svg/welcome-to/your-perfect-home/left/door_7_left_2.svg";
import door_left_8 from "../../assets/svg/welcome-to/your-perfect-home/left/door_8_left_2.svg";
import door_left_9 from "../../assets/svg/welcome-to/your-perfect-home/left/door_9_left_2.svg";
import door_left_10 from "../../assets/svg/welcome-to/your-perfect-home/left/door_10_left_2.svg";
import door_left_11 from "../../assets/svg/welcome-to/your-perfect-home/left/door_11_left_2.svg";
import door_left_12 from "../../assets/svg/welcome-to/your-perfect-home/left/door_12_left_2.svg";
import door_left_13 from "../../assets/svg/welcome-to/your-perfect-home/left/door_13_left_2.svg";
import door_left_14 from "../../assets/svg/welcome-to/your-perfect-home/left/door_14_left_2.svg";
import door_left_15 from "../../assets/svg/welcome-to/your-perfect-home/left/door_15_left_2.svg";
import effect_left_2 from "../../assets/svg/welcome-to/your-perfect-home/left/bis_left_5.svg";
import effect_left_3 from "../../assets/svg/welcome-to/your-perfect-home/left/pool_left_4.svg";
import effect_left_4 from "../../assets/svg/welcome-to/your-perfect-home/left/temp_left_0.svg";
import effect_left_1 from "../../assets/svg/welcome-to/your-perfect-home/left/surveyor_2.svg";
import effect_left_5 from "../../assets/svg/welcome-to/your-perfect-home/left/real-state-agent_left_18.svg";
import effect_left_6 from "../../assets/svg/welcome-to/your-perfect-home/left/landscaper_left_15.svg";

const LeftCards = ({ cityPlanCards }) => {
  const leftStyles = {
    width: "90%",
    alignSelf: "center",
    justifySelf: "center",
    margin: "2px 0px",
  };

  return (
    <div
      className="city-plans"
      sx={{
        gridArea: "city-plans",
        display: "grid",
        gridTemplateColumns: "14.2% 14.2% 14.2% 14.2% 14.2% 14.2%",
        gridTemplateRows: "33% 33% 33%",
        gridTemplateAreas: `
            'door-1 door-4 door-7 door-10 door-13 effect-1 effect-4'
            'door-2 door-5 door-8 door-11 door-14 effect-2 effect-5'
            'door-3 door-6 door-9 door-12 door-15 effect-3 effect-6'
          `,
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      <img sx={{ ...leftStyles, gridArea: "door-1" }} src={door_left_1}></img>
      <img sx={{ ...leftStyles, gridArea: "door-2" }} src={door_left_2}></img>
      <img sx={{ ...leftStyles, gridArea: "door-3" }} src={door_left_3}></img>
      <img sx={{ ...leftStyles, gridArea: "door-4" }} src={door_left_4}></img>
      <img sx={{ ...leftStyles, gridArea: "door-5" }} src={door_left_5}></img>
      <img sx={{ ...leftStyles, gridArea: "door-6" }} src={door_left_6}></img>
      <img sx={{ ...leftStyles, gridArea: "door-7" }} src={door_left_7}></img>
      <img sx={{ ...leftStyles, gridArea: "door-8" }} src={door_left_8}></img>
      <img sx={{ ...leftStyles, gridArea: "door-9" }} src={door_left_9}></img>
      <img sx={{ ...leftStyles, gridArea: "door-10" }} src={door_left_10}></img>
      <img sx={{ ...leftStyles, gridArea: "door-11" }} src={door_left_11}></img>
      <img sx={{ ...leftStyles, gridArea: "door-12" }} src={door_left_12}></img>
      <img sx={{ ...leftStyles, gridArea: "door-13" }} src={door_left_13}></img>
      <img sx={{ ...leftStyles, gridArea: "door-14" }} src={door_left_14}></img>
      <img sx={{ ...leftStyles, gridArea: "door-15" }} src={door_left_15}></img>
      <img
        sx={{ ...leftStyles, gridArea: "effect-1" }}
        src={effect_left_1}
      ></img>
      <img
        sx={{ ...leftStyles, gridArea: "effect-2" }}
        src={effect_left_2}
      ></img>
      <img
        sx={{ ...leftStyles, gridArea: "effect-3" }}
        src={effect_left_3}
      ></img>
      <img
        sx={{ ...leftStyles, gridArea: "effect-4" }}
        src={effect_left_4}
      ></img>
      <img
        sx={{ ...leftStyles, gridArea: "effect-5" }}
        src={effect_left_5}
      ></img>
      <img
        sx={{ ...leftStyles, gridArea: "effect-6" }}
        src={effect_left_6}
      ></img>
    </div>
  );
};

export default LeftCards;
