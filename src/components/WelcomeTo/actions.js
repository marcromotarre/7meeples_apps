/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSelector, useDispatch } from "react-redux";
import goPrevious from "../../assets/svg/welcome-to/go-previous.svg";
import goNext from "../../assets/svg/welcome-to/go-next.svg";
import showCityPlansIcon from "../../assets/svg/welcome-to/show-city-plans.svg";
import showLeftCardsIcon from "../../assets/svg/welcome-to/show-left-cards.svg";
import {
  goPrevious as goPreviousAction,
  nextTurn as goNextAction,
  changeShowLeftCards as changeShowLeftCardsAction,
} from "../../actions";
const Actions = ({ hasLeftCardsData }) => {
  const discardDeck = useSelector((state) => state.discardDeck);
  const dispatch = useDispatch();

  const canGoPrevious = discardDeck[0] ? discardDeck[0].length > 0 : false;
  const canGoNext = useSelector((state) => state.previousMovementsDone);
  const showLeftCards = useSelector((state) => state.showLeftCards);
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

  const handleChangeTopView = () => {
    dispatch(changeShowLeftCardsAction());
  };

  return (
    <div
      sx={{
        display: "grid",
        gridArea: "actions",
        gridTemplateColumns: "5px 60px auto 60px 5px",
        gridTemplateRows: "100%",
        gridTemplateAreas: `
            '. information movements change-top-view .'
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
      ></div>
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
          gridArea: "change-top-view",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {hasLeftCardsData && (
          <img
            onClick={handleChangeTopView}
            sx={{
              maxHeight: "100%",
              maxWidth: "80%",
              opacity: ["1", "0"],
            }}
            src={showLeftCards ? showCityPlansIcon : showLeftCardsIcon}
          />
        )}
      </div>
    </div>
  );
};

export default Actions;
