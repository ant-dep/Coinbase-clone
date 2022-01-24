import btcLogo from "../assets/btc.png";
import maticLogo from "../assets/matic.png";
import crvLogo from "../assets/crv.png";
import ethLogo from "../assets/eth.png";
import lunaLogo from "../assets/luna.png";
import solLogo from "../assets/sol.png";

export const coins = [
  {
    name: "Bitcoin",
    sign: "BTC",
    logo: btcLogo,
    balanceUsd: 288644.58,
    balanceCoin: 7,
    priceUsd: 41234.94,
    change: -4.74,
    allocation: 41.89,
  },
  {
    name: "Ethereum",
    sign: "ETH",
    logo: ethLogo,
    balanceUsd: 29407.8,
    balanceCoin: 10,
    priceUsd: 2940.78,
    change: 6.24,
    allocation: 17.89,
  },
  {
    name: "Terra",
    sign: "LUNA",
    logo: lunaLogo,
    balanceUsd: 18080.0,
    balanceCoin: 250,
    priceUsd: 72.32,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: "Solana",
    sign: "SOL",
    logo: solLogo,
    balanceUsd: 6027.0,
    balanceCoin: 50,
    priceUsd: 120.54,
    change: 4.74,
    allocation: 41.89,
  },
  {
    name: "Polygon",
    sign: "MATIC",
    logo: maticLogo,
    balanceUsd: 44.5,
    balanceCoin: 25,
    priceUsd: 1.78,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: "Curve",
    sign: "CRV",
    logo: crvLogo,
    balanceUsd: 186.9,
    balanceCoin: 70,
    priceUsd: 2.67,
    change: 3.24,
    allocation: 17.89,
  },
];
