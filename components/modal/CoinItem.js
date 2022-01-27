import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const CoinItem = ({
  token,
  sender,
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
}) => {
  const [balance, setBalance] = useState("Fetching...");
  const [imageUrl, setImageUrl] = useState(null);
  //
  // GET TOKEN INFO
  useEffect(() => {
    //
    // GET BALANCE OF THE TOKEN
    const getBalance = async () => {
      let activeThirdWebToken;
      thirdWebTokens.map((thirdWebToken) => {
        if (thirdWebToken.address === token.contractAddress) {
          activeThirdWebToken = thirdWebToken;
        }
      });

      const balance = await activeThirdWebToken.balanceOf(sender);

      return await setBalance(balance.displayValue.split(".")[0]);
    };
    //
    // GET ITS IMAGE
    const getImageUrl = async () => {
      const imgUrl = imageUrlBuilder(client).image(token.logo).url();
      setImageUrl(imgUrl);
    };
    getImageUrl();
    getBalance();
  }, []);

  return (
    <Wrapper
      style={{
        backgroundColor: selectedToken.name === token.name && "#141519",
      }}
      onClick={() => {
        setSelectedToken(token);
        setAction("send");
      }}
    >
      <Main>
        <Icon>
          <img src={imageUrl} alt={`${token.name} logo`} />
        </Icon>
        <NameDetails>
          <Name>{token.name}</Name>
          <Symbol>{token.symbol}</Symbol>
        </NameDetails>
      </Main>
      <Balance>
        {balance} {token.symbol}
      </Balance>
      <IsSelected>
        {Boolean(selectedToken.contractAddress === token.contractAddress) && (
          <FaCheck />
        )}
      </IsSelected>
    </Wrapper>
  );
};

export default CoinItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 00.5rem;
  border-radius: 0.5rem;
  margin-bottom: 00.3rem;

  &:hover {
    cursor: pointer;
    background-color: #0e0f14;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const NameDetails = styled.div`
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
`;

const Symbol = styled.div`
  font-size: 0.8rem;
  color: #888f9b;
  cursor: pointer;
`;

const Balance = styled.div`
  cursor: pointer;
`;

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`;
