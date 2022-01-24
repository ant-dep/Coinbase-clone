import React from "react";
import styled from "styled-components";

const Promos = () => {
  return (
    <Wrapper>
      <OfferCard>
        <Title>Yield earned</Title>
        <Description>Earn up to 9.9% APY on your crypto holdings</Description>
        <Placeholder />
        <Additionnal style={{ fontSize: "1.5rem" }}>
          $3.58 <span>9.9% APY</span>
        </Additionnal>
      </OfferCard>
      <OfferCard>
        <Title>Learn and Earn</Title>
        <Description>
          Learn about new protocols and try to earn some tokens
        </Description>
        <Placeholder />
        <Additionnal style={{ color: "#3773f5" }}>Verify Identity</Additionnal>
      </OfferCard>
    </Wrapper>
  );
};

export default Promos;

const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
`;

const OfferCard = styled.div`
  width: 21rem;
  height: 11rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
`;

const Description = styled.div`
  font-size: 1.1rem;
`;

const Placeholder = styled.div`
  flex: 1;
`;

const Additionnal = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`;
