import React, { useEffect, useContext, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Tooltip, Input, Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center text-sm font-light text-white";

export const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    currentBalance,
    getBalance,
  } = useContext(TransactionContext);
  const [showTooltip, setShowtooltip] = useState(false);

  useEffect(() => {
    getBalance();
  }, []);

  const handleToggleTooltip = () => {
    setShowtooltip(!showTooltip);
  };

  const handleSubmit = (e) => {
    Object.values(formData).map((value) => {
      if (!value) {
        return;
      }
    });

    e.preventDefault();

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-pink-400 p-3 rounded-full cursor-pointer hover:shadow-lg transition ease-in-out delay-150"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          <div className="grid sm:grid-cols-3 blue-glassmorphism border-none shadow-2xl grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col flex-1 items-center justify-start mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl max-w-[384px] h-40 w-full my-5 shadow-2xl eth-card .white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <Tooltip
                  id="tooltip-info"
                  renderContent={<>Info tooltip</>}
                  visible={showTooltip}
                  onClose={handleToggleTooltip}
                  onOpen={handleToggleTooltip}
                >
                  <BsInfoCircle
                    fontSize={17}
                    color="#fff"
                    className="cursor-pointer"
                  />
                </Tooltip>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  Address: {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-light text-sm">
                  Balance: {currentBalance} ETH
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center rounded-xl bg-white border-none shadow-2xl">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 bg-black hover:font-semibold transition ease-in-out delay-150 rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
