import React from "react";
import styled from "styled-components";

const StyledCartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  text-shadow: 2px 2px black;
`;

const StyledCard = styled.div`
  padding: 20px;
  font-size: 1.4rem;
`;

const Customer = styled.span`
  font-style: italic;
  color: white;
  text-shadow: 2px 2px black;
`;
const Finish = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Cart({ order }) {
  console.log("Cart -> order", order);
  return (
    <StyledCartContainer>
      {order.length !== 0 ? (
        <>
          <h2>Congratulations! Your order is on the way!</h2>
          {order.map((o) => {
            return (
              <StyledCard>
                Hello <Customer>{o.customer}</Customer>! Your{" "}
                <Customer>{o.size}</Customer> Pizza with{" "}
                <Customer>
                  {o.toppingsChecked.map((topping) => `${topping.name}, `)}
                </Customer>{" "}
                is on its way!
                <br />
                <br />
                {o.instructions
                  ? `Special Instruction:${o.instructions} has also been noted`
                  : ""}
                <br />
                <Finish>
                  Enjoy your pizza
                  <img
                    src="https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif"
                    alt="img"
                    style={{ border: "4px solid white", borderRadius: "15px" }}
                  />
                </Finish>
              </StyledCard>
            );
          })}
        </>
      ) : (
        <h2>Your Cart is empty!</h2>
      )}
    </StyledCartContainer>
  );
}
