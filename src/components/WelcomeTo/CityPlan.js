import React, { useState } from "react";
import styled from "styled-components";
import SVGIcon from "./SVGIcon";

import { executeCityPlanForFirstTime as executeCityPlanForFirstTimeAction } from "../../actions";

import { useSelector, useDispatch } from "react-redux";

export const CityPlanContainer = styled.div`
  display: grid;
  grid-template-columns: 74px 62px;
  grid-template-rows: 197px;
  column-gap: 10px;
  position: relative;
`;

export const Points = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px 0;

  .button-enabled {
    border: 1px solid black;
  }

  .button-disabled {
    opacity: 0.14;
  }
  .enabled {
    color: black;
  }

  .disabled {
  }

  button,
  button:active {
    background: none;
    outline: none;
  }
  button span {
    position: relative;
    display: flex;
    justify-self: center;
    align-self: center;
  }

  .c-secondary-mision {
    border: 1px solid black;
  }
`;

export const Point = styled.label`
  font-size: 44px;
`;

export const CityPlanRules = styled.div`
  position: absolute;
  width: 74px;
  height: 197px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CityPlanButton = styled.button`
  border: 1px solid black;
  border-radius: 40px;
  width: 62px;
  height: 62px;
  disabled: ${(props) => props.disabled};
`;

export default function CityPlan({ level, name, advanced, points }) {
  const dispatch = useDispatch();
  const [cityPlaneDone, setCityPlaneDone] = useState(false);
  const askReset = useSelector((state) => state.askReset);

  const doCityPlan = () => {
    if (!askReset) {
      dispatch(executeCityPlanForFirstTimeAction());
      setCityPlaneDone(true);
    }
  };

  return (
    <CityPlanContainer>
      <div>
        <SVGIcon name="city-plan-background" height={197} width={74} />
        <CityPlanRules>
          <SVGIcon name={name} height={180} width={53} />
        </CityPlanRules>
      </div>
      <Points>
        <CityPlanButton
          onClick={doCityPlan}
          className={cityPlaneDone ? "button-disabled" : "button-enabled"}
          disabled={cityPlaneDone}
        >
          <Point className={cityPlaneDone ? "disabled" : "enabled"}>
            {points[0]}
          </Point>
        </CityPlanButton>
        <CityPlanButton
          onClick={doCityPlan}
          className="c-secondary-mision"
          disabled={true}
        >
          <Point className="enabled">{points[1]}</Point>
        </CityPlanButton>
      </Points>
    </CityPlanContainer>
  );
}
