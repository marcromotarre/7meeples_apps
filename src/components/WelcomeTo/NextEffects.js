import React from 'react';
import styled from 'styled-components'
import SVGIcon from './SVGIcon'
import { useSelector } from 'react-redux';

export const Container = styled.div`
    grid-area: m-next-effects;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: auto;
    justify-self: center;
    align-self: center;
`;

export const NextEffectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 250px;
    border: 1px solid #707070;
    border-radius: 17px;
`;

export default function NextEffects({className}) {
    const deck = useSelector(state => state.deck);
    const nextEffects = deck.map(deckPile => deckPile[0] ? deckPile[0].effect : undefined)
    return (
        <Container className={className}> 
        <NextEffectsContainer>{

            nextEffects.map((nextEffect, index) => (
                nextEffect && <SVGIcon name={nextEffect} key={index} height={36} />
            ))
        }
        </NextEffectsContainer> 
        
        </Container>);
  }
