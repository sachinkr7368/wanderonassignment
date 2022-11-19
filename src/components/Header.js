import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <Container>
      <nav>
      <p className="number">+91-9856854578</p>
        <div>
            
            <p>Diwali Sale</p>
            <p>International Trips</p>
            <p>Blogs</p>
            <p>About Us</p>
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div`
    color: white;
    font-size: 20px;
    width: 100%;
    background-color: darkcyan;
    display: flex;
    nav{
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: center;
        div{
            display: flex;
            justify-content:space-;
            p{
                margin: 0 10px;
            }
        }
    }
`;
