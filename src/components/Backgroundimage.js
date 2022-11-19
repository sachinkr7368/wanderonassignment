import React from "react";
import styled from "styled-components";
import background from "./image.jpg";
export default function Backgroundimage() {
  return (
    <Container>
      <center>
        <img src={background} alt="no image" />
        <div>
          <input placeholder="Search" />
          <button>Search</button>
        </div>
      </center>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  width: 100%;
  center {
    ${'' /* margin: auto; */}
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 70vw;
      height: 40vh;
    }
    div{
        margin-top: -15px;
        input{
            font-size: 30px;
            padding: 5px;
            border-right: none;
            border-radius: 5px;
            border: 2px solid darkcyan;
        }
        button{
            font-size: 30px;
            padding: 5px;
            border-left: none;
            border: 2px solid darkcyan;
            border-radius: 5px ;
            background-color: darkcyan;
            color: white;
        }
    }
  }
`;
