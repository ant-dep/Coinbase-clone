import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";

export default function Home() {
  const { address, connectWallet, disconnectWallet } = useWeb3();
  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address} disconnectWallet={disconnectWallet} />
      ) : (
        <WalletConnect>
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
          <Details>Hi fellows</Details>
        </WalletConnect>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px #282b2f;
    transform: scale(1.01);
  }
`;

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`;
