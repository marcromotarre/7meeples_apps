import React from "react";
import styled from "styled-components";
import SVGIcon from "./SVGIcon";
import { effectColors } from "../../data/colors";

export const EffectContainer = styled.div`
  border: 1px solid ${(props) => props.color};
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export default function Effect({ className, effect }) {
  const color = effectColors[effect];
  return (
    <EffectContainer color={color}>
      {effect && (
        <SVGIcon className={className} name={effect} height={120} width={120} />
      )}
    </EffectContainer>
  );
}
