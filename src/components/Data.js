import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
//https://api.npoint.io/f89acb9ee900ca95b8dc

const Data = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const url = "https://api.npoint.io/f89acb9ee900ca95b8dc";
    axios.get(url).then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <Container>
      <h1>Featured</h1>
      {data.map((item) => {
        return (
          <div className="image" key={item.id}>
            <img src={item.featuredImage.link}></img>
            <div>
              <h2>{item.meta.title}</h2>
              <p>{item.meta.description}</p>
              <span  className="caption">{item.featuredImage.caption.slice(0,20)}</span>
              <span style={{marginLeft: '15px'}} className="caption">{item.featuredImage.caption.slice(0,20)}</span>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  width: 72%;
  margin: 20px auto;
  h1{
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: darkcyan;
  }
  div {
    
    img {
      width: 100%;
      height: 60vh;
    }
    div{
        h2{
            font-weight: bold;
            font-size: 40px;
        }
        p{
            color: grey;
            font-size: 25px;
        }
        span{
            color: darkcyan;
            border: 3px solid darkcyan;
            border-radius: 15px;
            
            padding: 8px 12px;
        }
        margin-bottom: 40px;
    }
  }
`;

export default Data;
