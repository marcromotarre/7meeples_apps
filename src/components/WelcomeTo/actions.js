/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSelector, useDispatch } from "react-redux";
import goPrevious from "../../assets/svg/welcome-to/go-previous.svg";
import goNext from "../../assets/svg/welcome-to/go-next.svg";
import {
  goPrevious as goPreviousAction,
  nextTurn as goNextAction,
} from "../../actions";
const Actions = () => {
  const discardDeck = useSelector((state) => state.discardDeck);
  const dispatch = useDispatch();
  const canGoPrevious = discardDeck[0].length > 0;
  const canGoNext = useSelector((state) => state.previousMovementsDone);
  const handleGoPrevious = () => {
    if (canGoPrevious) {
      dispatch(goPreviousAction());
    }
  };
  const handleGoNext = () => {
    if (canGoNext) {
      dispatch(goNextAction());
    }
  };
  return (
    <div
      sx={{
        display: "grid",
        gridArea: "actions",
        gridTemplateColumns: "5px 60px auto 60px 5px",
        gridTemplateRows: "100%",
        gridTemplateAreas: `
            '. information movements left .'
          `,
      }}
    >
      <div
        sx={{
          gridArea: "information",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          onClick={handleGoPrevious}
          sx={{
            maxHeight: "100%",
            maxWidth: "80%",
            opacity: canGoPrevious ? "1" : "0.3",
          }}
          src={goPrevious}
        />
      </div>
      <div
        sx={{
          gridArea: "movements",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          onClick={handleGoPrevious}
          sx={{
            maxHeight: "100%",
            maxWidth: "80%",
            opacity: canGoPrevious ? "1" : "0.3",
          }}
          src={goPrevious}
        />
        <img
          onClick={handleGoNext}
          sx={{
            maxHeight: "100%",
            opacity: canGoNext ? "1" : "0.3",
          }}
          src={goNext}
        />
      </div>
      <div
        sx={{
          gridArea: "left",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          onClick={handleGoPrevious}
          sx={{
            maxHeight: "100%",
            maxWidth: "80%",
            opacity: canGoPrevious ? "1" : "0.3",
          }}
          src={goPrevious}
        />
      </div>
    </div>
  );
};

export default Actions;
