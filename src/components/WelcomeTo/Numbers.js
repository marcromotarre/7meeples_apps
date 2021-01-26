import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
    background-color: red;
    color: blue;
`;

export default function Numbers({className}) {
    return (
        <Container className={className}>
            <h1>Numbers</h1>
        </Container>);
  }
