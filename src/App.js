import React, { useEffect } from 'react';
import './App.css';
const {ethers, Contract} = require("ethers");

function App() {
  const walletAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";


  useEffect(() => {
    const walletAbi = [
      {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": false,
                  "internalType": "address",
                  "name": "manager",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "address[]",
                  "name": "players",
                  "type": "address[]"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
              },
              {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
              }
          ],
          "name": "lattery",
          "type": "event"
      },
  ];
  
    const writecontract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts" , []);
  
      const signer = provider.getSigner();

      const walletcontract = new ethers.Contract(walletAddress , walletAbi , signer);
      await walletcontract.pickWinner("");
    }

    writecontract();
  }, []);

  return (
    <div className="App">
     <h2>elhambahman</h2>
    </div>
  );
}

export default App;