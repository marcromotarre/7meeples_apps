/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useSelector, useDispatch } from 'react-redux';
import goPrevious from '../../assets/svg/welcometo/go-previous.svg';
import goNext from '../../assets/svg/welcometo/go-next.svg';
import { useEffect } from 'react';
import {
  goPrevious as goPreviousAction,
  nextTurn as goNextAction,
} from '../../actions';
const Actions = () => {
  const deck = useSelector((state) => state.deck);
  const discardDeck = useSelector((state) => state.discardDeck);
  const dispatch = useDispatch();
  const canGoPrevious = discardDeck[0].length > 0;
  const canGoNext = useSelector(
    (state) => state.previousMovementsDone,
  );
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
        width: '100%',
        height: '40px',
        gridArea: 'actions',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        onClick={handleGoPrevious}
        sx={{
          height: '40px',
          opacity: canGoPrevious ? '1' : '0.3',
        }}
        src={goPrevious}
      />
      <img
        onClick={handleGoNext}
        sx={{
          height: '40px',
          opacity: canGoNext ? '1' : '0.3',
        }}
        src={goNext}
      />
    </div>
  );
};

export default Actions;
