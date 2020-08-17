import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const StyledCont = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImgCont = styled.div`
  color: white;
  text-shadow: 4px 4px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vh;
  width: 100vw;
`;

const Pizza = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <StyledCont>
      <StyledImgCont>
        <h1>Your favorite food, delivered while coding</h1>
      </StyledImgCont>
      <Pizza>
        <img
          src="https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif"
          alt="pizza-img"
          style={{ border: "4px solid white", borderRadius: "15px" }}
        />
      </Pizza>
      <Link to="/pizza">
        <br />
        <Button
          color="success"
          style={{ padding: "5px 30px", borderRadius: "0" }}
        >
          Build your Pizza
        </Button>
      </Link>
    </StyledCont>
  );
}
