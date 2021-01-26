import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    background-color: red;
    color: blue;
`

export default function Effects({ className }) {
    return (
        <Container className={className}>
            <h1>Effects</h1>
        </Container>
    )
}
