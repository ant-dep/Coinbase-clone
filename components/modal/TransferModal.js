import React, { useState } from "react";
import styled from "styled-components";
import Transfer from "./Transfer";
import CoinSelector from "./CoinSelector";
import { SpinnerCircularFixed } from "spinners-react";
import Receive from "./Receive";
import Link from "next/link";

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedModal = (option) => {
    //
    // DEPENDS OF ACTION STATE
    //
    switch (option) {
      //
      //
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );

      //
      //
      case "receive":
        return (
          <Receive
            setAction={setAction}
            selectedToken={selectedToken}
            walletAddress={walletAddress}
          />
        );
      //
      //
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      //
      //
      case "transferring":
        return (
          <SpinnerWrapper>
            <SpinnerCircularFixed
              size={150}
              thickness={120}
              speed={100}
              color="#3773f5"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
            Transfer in progress...
          </SpinnerWrapper>
        );
      //
      //
      case "transferred":
        return (
          <TransferedWrapper>
            <Transfered>Transfer complete</Transfered>
            <Link href={"/"} passHref>
              <OK>OK</OK>
            </Link>
          </TransferedWrapper>
        );
      default:
        return <h2>send</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>

        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  width: 27rem;
  color: #fff;
  border: 1px solid #282b2f;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const selectedStyle = {
  color: "#3773f5",
};

const unselectedStyle = {
  border: "1px solid #282b2f",
};

const Option = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;

const TransferedWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align - items: center;
`;

const Transfered = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: #27ad75;
`;

const OK = styled.button`
  color: #fff;
  width: 100%;
  background-color: #3773f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: #4a80f6;
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
