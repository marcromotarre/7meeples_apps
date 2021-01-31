/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NextEffects = ({ effects }) => {
  const deck = useSelector((state) => state.deck);
  const [nextEffects, setNextEffects] = useState([]);
  const previousMovementsDone = useSelector(
    (state) => state.previousMovementsDone
  );
  useEffect(() => {
    const nextEffects = deck.map((deckPile) =>
      deckPile[0] ? deckPile[0].effect : undefined
    );
    setNextEffects(nextEffects);
  }, [deck]);

  const nextEffect0 = effects.find((symbol) => symbol.name === nextEffects[0]);

  const nextEffect1 = effects.find((symbol) => symbol.name === nextEffects[1]);

  const nextEffect2 = effects.find((symbol) => symbol.name === nextEffects[2]);

  const effectDiv = {
    width: "100%",
    height: "100%",
    maxWidth: "80%",
    maxHeight: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const effectImage = {
    height: "65%",
    justifySelf: "center",
    alignSelf: "center",
    maxWidth: "100%",
    maxHeight: "100%",
  };
  return (
    <div
      className="next-effects"
      sx={{
        opacity: previousMovementsDone ? "0.3" : "1",
        gridArea: "next-effects",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "33% 33% 33%",
          gridTemplateRows: "100%",
          gridTemplateAreas: `'next-effect-1 next-effect-2 next-effect-3'`,
          alignItems: "center",
          justifyContent: "space-around",
          width: "90%",
          height: "80%",
          border: "1px solid #707070",
          borderRadius: "10px",
        }}
      >
        {nextEffect0 && (
          <div sx={{ ...effectDiv, gridArea: "next-effect-1" }}>
            <img
              sx={effectImage}
              src={nextEffect0.image}
              alt={nextEffect0.name}
            />
          </div>
        )}
        {nextEffect1 && (
          <div sx={{ ...effectDiv, gridArea: "next-effect-2" }}>
            <img
              sx={effectImage}
              src={nextEffect1.image}
              alt={nextEffect1.name}
            />
          </div>
        )}
        {nextEffect2 && (
          <div sx={{ ...effectDiv, gridArea: "next-effect-3" }}>
            <img
              sx={effectImage}
              src={nextEffect2.image}
              alt={nextEffect2.name}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NextEffects;
