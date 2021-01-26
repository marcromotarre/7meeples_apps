import React from 'react';
import styled from 'styled-components'
import SVGIcon from './SVGIcon'

export const NumberContainer = styled.div`
    width: 152px;
    height: 152px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NumberLabel = styled.label`
    position: absolute;
    font-size: 55px;

`;

export default function Number({className, number}) {
  
    return (
        <NumberContainer className={className}>
            <SVGIcon name="door" width={117} />
            {number && <NumberLabel>{number}</NumberLabel>}
        </NumberContainer>
    )
  }