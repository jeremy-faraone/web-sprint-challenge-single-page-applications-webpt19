import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  //   text-shadow: 2px 2px black;
`;
const styledLink = {
  padding: "10px 30px",
  backgroundColor: "red",
  color: "white",
  textDecoration: "none",
  textShadow: "1px 1px black",
};

const styledLinkB = {
  padding: "10px 30px",
  backgroundColor: "white",
  color: "black",
  textDecoration: "none",
  textShadow: "1px 1px red",
};

const styledLinkC = {
  padding: "10px 30px",
  backgroundColor: "green",
  color: "black",
  textDecoration: "none",
  textShadow: "1px 1px red",
};

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">
        <h4 style={{ color: "red", textTransform: "uppercase" }}>
          Lambda Eats
        </h4>
      </Link>
      <div>
        <Link to="/" style={styledLink}>
          Home
        </Link>
        <Link to="/pizza" style={styledLinkB} data-cy="orderLink">
          Order
        </Link>
        <Link to="/cart" style={styledLinkC} data-cy="cartLink">
          Cart
        </Link>
      </div>
    </StyledNav>
  );
}
