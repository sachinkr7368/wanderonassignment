import React from 'react'
import styled from 'styled-components'
import background from './image.jpg';

export default function Main() {
  return (
    <Container>
      <div>
        <p>Blogs</p>
      </div>
    </Container>
  )
}
const Container = styled.div `
    background-color: lightblue;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-style: oblique;
    color: white;
    
`;
