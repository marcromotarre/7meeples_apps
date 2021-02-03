/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { getLeftIcons } from "../../data/welcome-to/your-perfect-home/left";
import ssss from "../../assets/svg/welcome-to/your-perfect-home/left/door_2_left_0.svg";

const getLeftCardNumber = (key, value) => {
  deck[0].concat(deck[1], deck[2]).filter((card) => card[key] === value).length;
};

const LeftCards = ({}) => {
  const leftSyles = {
    width: "90%",
    alignSelf: "center",
    justifySelf: "center",
    margin: "2px 0px",
  };
  const deck = useSelector((state) => state.deck);
  const discardDeck = useSelector((state) => state.discardDeck);
  return (
    <div
      className="city-plans"
      sx={{
        gridArea: "city-plans",
        display: "grid",
        gridTemplateColumns: [
          "14.2% 14.2% 14.2% 14.2% 14.2% 14.2%",
          "33% 33% 33%",
        ],
        gridTemplateRows: [
          "33% 33% 33%",
          "14.2% 14.2% 14.2% 14.2% 14.2% 14.2%",
        ],
        gridTemplateAreas: [
          `
            'left-0 left-3 left-6 left-9 left-12 left-15 left-18'
            'left-1 left-4 left-7 left-10 left-13 left-16 left-19'
            'left-2 left-5 left-8 left-11 left-14 left-17 left-20'
          `,
          `
            'left-0 left-1 left-2'
            'left-3 left-4 left-5'
            'left-6 left-7 left-8'
            'left-9 left-10 left-11'
            'left-12 left-13 left-14'
            'left-15 left-16 left-17'
            'left-18 left-19 left-20'
          `,
        ],
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {getLeftIcons({ deck, discardDeck }).map((image, index) => (
        <img
          key={`left-${index}`}
          sx={{ ...leftSyles, gridArea: `left-${index}` }}
          src={image}
        />
      ))}
    </div>
  );
};

export default LeftCards;
