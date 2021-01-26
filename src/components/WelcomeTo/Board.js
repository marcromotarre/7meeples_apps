import React from 'react';
import styled from 'styled-components'

import NextEffects from './NextEffects'
import ActualCards from './ActualCards'
import Actions from './Actions'

export const BoardContainer = styled.div`
    grid-area: m-board;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 4.5% 13.5% 63% 18%;
    grid-template-areas: 
        "."
        "m-next-effects"
        "m-actual-cards"
        "m-actions";
`;

export default function Board({className}) {
    return (
        <BoardContainer className={className}>
          <NextEffects />
          <ActualCards />
          <Actions />
        </BoardContainer>);
  }
