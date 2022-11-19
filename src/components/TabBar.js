import React from 'react'
import styled from 'styled-components'
export default function TabBar() {
  return (
    <Container>
    <div>
      <p>Trips</p>
      <p>Food</p>
      <p>Hotel</p>
      <p>Places</p>
      <p>Adventure</p>
      <p>Workation</p>
      <button>More</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
    margin : 20px 0;
    width: 100%;
    background-color: lightgrey;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 60%;
        p{
            border: 1px solid darkcyan;
            padding: 8px 12px;
            background-color: white;
            color: darkcyan;
            border-radius: 10px;
            font-size: 20px;
        }
        button{
            border: none;
            background-color: darkcyan;
            color: white;
            padding: 8px 12px;
            height: 45px;
            border-radius: 10px;
            font-size: 20px;
        }

    }
`;