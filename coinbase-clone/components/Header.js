import React from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import Modal from "react-modal";
import { useRouter } from "next/router";
import TransferModal from "./modal/TransferModal";
import Link from "next/link";

Modal.setAppElement("#__next");

// Mastering Prop Drilling btw, redux is for beginners
const Header = ({
  walletAddress,
  sanityTokens,
  thirdWebTokens,
  connectWallet,
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        <WalletLink>
          <WalletLinkTitle>
            <FaWallet />
          </WalletLinkTitle>
          <WalletAddress>
            {walletAddress.slice(0, 6)}...
            {walletAddress.slice(walletAddress.length - 4)}
          </WalletAddress>
        </WalletLink>
        <Button style={{ backgroundColor: "#3773f5", color: "#000" }}>
          Buy / Sell
        </Button>
        <Link href={"/?transfer=1"} passHref>
          <Button>Send / Receive</Button>
        </Link>
      </ButtonsContainer>
      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={modalStyles}
      >
        <TransferModal
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}
        />
      </Modal>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.005);
  }
`;

const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0rem 0.5rem;
    border: none;
  }
`;

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  color: #27ad75;
`;

const WalletAddress = styled.div`
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#0a0b0d",
    padding: "0",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};
