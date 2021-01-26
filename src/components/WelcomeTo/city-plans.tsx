/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useSelector, useDispatch } from 'react-redux';
import { cityPlans as cityPlanCards } from '../../data/city-plans';

import {
  setCityPlans as setCityPlansAction,
  changeCityPlanState as changeCityPlanStateAction,
} from '../../actions';
import { useEffect } from 'react';

const CityPlans = () => {
  const cityPlansCss = {
    width: '80%',
    height: '90%',
    justifySelf: 'center',
    alignSelf: 'center',
  };

  useEffect(() => {
    const cityPlans = [
      cityPlanCards
        .filter((cityPlan) => cityPlan.level === 1)
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])[0],
      cityPlanCards
        .filter((cityPlan) => cityPlan.level === 2)
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])[0],
      cityPlanCards
        .filter((cityPlan) => cityPlan.level === 3)
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])[0],
    ];
    dispatch(setCityPlansAction({ cityPlans }));
  }, []);

  const cityPlans = useSelector((state) => state.cityPlans);
  const dispatch = useDispatch();
  const changeCityPlanState = (level) => {
    dispatch(changeCityPlanStateAction({ level }));
  };

  const cityPlanLevel1 = cityPlans.find(
    (cityPlan) => cityPlan.level === 1,
  );
  const cityPlanLevel2 = cityPlans.find(
    (cityPlan) => cityPlan.level === 2,
  );
  const cityPlanLevel3 = cityPlans.find(
    (cityPlan) => cityPlan.level === 3,
  );

  return (
    <div
      className="city-plans"
      sx={{
        gridArea: 'city-plans',
        display: 'grid',
        gridTemplateColumns: '33% 33% 33%',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {cityPlanLevel1 && (
        <img
          onClick={() => changeCityPlanState(1)}
          sx={cityPlansCss}
          src={
            cityPlanLevel1.active
              ? cityPlanLevel1.image
              : cityPlanLevel1.image_completed
          }
          alt="mission Level 1"
        />
      )}
      {cityPlanLevel2 && (
        <img
          onClick={() => changeCityPlanState(2)}
          sx={cityPlansCss}
          src={
            cityPlanLevel2.active
              ? cityPlanLevel2.image
              : cityPlanLevel2.image_completed
          }
          alt="mission Level 2"
        />
      )}
      {cityPlanLevel3 && (
        <img
          onClick={() => changeCityPlanState(3)}
          sx={cityPlansCss}
          src={
            cityPlanLevel3.active
              ? cityPlanLevel3.image
              : cityPlanLevel3.image_completed
          }
          alt="mission Level 3"
        />
      )}
    </div>
  );
};

export default CityPlans;
