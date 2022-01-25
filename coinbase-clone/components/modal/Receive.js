import React, { useState, useEffect } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const Receive = ({ setAction, selectedToken, walletAddress }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);

  return (
    <Wrapper>
      <Content>
        <QRContainer>
          <img
            src={`https://proxy-cors-ap.herokuapp.com/https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`}
            alt=""
          />
        </QRContainer>
        <Divider />
        <Row>
          <CoinSelectList>
            <Icon>
              <img src={imageUrl} alt="" />
            </Icon>
            <CoinName>{selectedToken.name}</CoinName>
          </CoinSelectList>
        </Row>
        <Divider />
        <Row>
          <div>
            <Title>{selectedToken.symbol} Address</Title>
            <Address>{walletAddress}</Address>
          </div>
          {/* auto copy feature with dynamic icon confirmation */}
          <CopyButton
            onClick={() => {
              navigator.clipboard.writeText(walletAddress);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 3000);
            }}
          >
            {copied ? <FaCheck style={{ color: "#27ad75" }} /> : <BiCopy />}
          </CopyButton>
        </Row>
      </Content>
    </Wrapper>
  );
};

export default Receive;

const Wrapper = styled.div`
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  border: 1px solid #282b2f;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const QRContainer = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Row = styled.div`
  width: 100%;
  font-size: 1.2rem;
  color: #8a919e;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
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

const CoinSelectList = styled.div`
  height: 100%;
  display: flex;
  flex: 1.3;

  &:hover {
    cursor: pointer;
  }
`;

const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: #fff;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`;

const Title = styled.div`
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Address = styled.div`
  font-size: 0.8rem;
`;

const CopyButton = styled.div`
  cursor: pointer;
`;
