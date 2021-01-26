import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

import CityPlan from './CityPlan'

export const CityPlansContainer = styled.div`
    grid-area: m-city-plans;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export default function CityPlans({className}) {
    const cityPlans = useSelector(state => state.cityPlans);
    return (
        <CityPlansContainer>            
        {cityPlans.map( (cityPlan, index) => 
            <CityPlan 
                key={index} 
                level={cityPlan.level} 
                name={cityPlan.name} 
                advanced={cityPlan.advanced} 
                points={cityPlan.points}
            />
        )}
        </CityPlansContainer>
    )
}
