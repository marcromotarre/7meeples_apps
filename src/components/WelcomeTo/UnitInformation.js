import React from 'react';
import styled from 'styled-components'
import SVGIcon from './SVGIcon'


export const UnitInformationContainer = styled.div`
    width: 100px;
    height: 36px;
    border: 1px solid ${props => props.color};
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 15px;
`;


export const LeftCards = styled.label`
    font-size: 20px;
    color: ${props => props.color};
    float: right;
`;

export const ShowedCards = styled.label`
    font-size: 11px;
    position: absolute;
    left: 3px;
    top: 0;
    color: ${props => props.color};

`;


export const IconContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const TextInsideIcon = styled.label`
    font-size: 12px;
    position: absolute;
`;


export default function UnitInformation({className, value, icon, color, showedCards, leftCards}) {
    return (
        <UnitInformationContainer color={color}>
            <ShowedCards color={color}>{showedCards}</ShowedCards>
            <IconContainer>
                <SVGIcon className={className} name={icon} height={26} width={36} /> 
                {value && <TextInsideIcon>{value}</TextInsideIcon>} 
            </IconContainer>
            <LeftCards color={color}>x{leftCards}</LeftCards>
        </UnitInformationContainer>
    )
}
