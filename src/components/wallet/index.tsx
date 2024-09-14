"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import WalletCard from "@/src/types/labs";
import { topUpWallet } from "@/src/hooks/walletServices";
import EmptyPaymentState from "../emptyPayment";
import { walletData } from "@/src/constants/wallet";

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: #11161c;
  color: #fff;
  height: 100vh;
`;

const SectionContainer = styled.div`
  flex: 2;
  padding: 20px;
  border-radius: 8px;
  align-items: center;
  text-align: center;
`;

const SectionContainer1 = styled.div`
  flex: 2;
  padding: 20px;
  border-radius: 8px;
`;

const WalletSection = styled.div`
  margin-top: 20px;
  background-color: #1b232d;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
`;

const TopUpHistorySection = styled.div`
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  color: #e5e1e1;
`;

const AVCContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CardAVC = styled.h1`
  font-size: 36px;
  margin: 0;
  color: #fff;
`;

const CardINR = styled.span`
  font-size: 14px;
  color: #a0abbb;
`;

const TopUpButton = styled.button`
  background-color: #f47921;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  margin-top: 20px;
`;

const TopUpItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #343434;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const TopUpIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
`;

const SectionTitle = styled.h3`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  color: #e5e1e1;
  margin-bottom: 10px;
`;

// Main Component
const WalletPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [topUpHistory, setTopUpHistory] = useState<any[]>([]);


  const handleTopUp = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = process.env.NEXT_PUBLIC_JWT_KEY as string;
      const redirectUrl = window.location.href; // Current page as the redirect URL

      // Get the oid from the top-up API
      const response = await topUpWallet(token, 100, redirectUrl);
      const oid = response.kpr.oid;

      // Redirect the user to the payment URL
      window.location.href = `https://payments.avidia.in/payments/${oid}`;
    } catch (error) {
      console.error("Top-up failed:", error);
      setError("Top-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTopUpClick = () => {
    handleTopUp();
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get("status");

    if (paymentStatus === "success") {
      setSuccess(true);
    } else if (paymentStatus === "failure") {
      setError("Payment failed. Please try again.");
    }

    // Placeholder for fetching top-up history
    const fetchTopUpHistory = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_JWT_KEY as string;
        // const history = []; // Replace this with actual API call
        // setTopUpHistory(history);
      } catch (error) {
        console.error("Error fetching top-up history:", error);
      }
    };
    fetchTopUpHistory();
  }, []);

  return (
    <DashboardContainer>
      <SectionContainer>
        <SectionTitle>My Wallet</SectionTitle>
        <WalletSection>
          {walletData.map((wallet, index) => (
            <WalletCard key={index} dark={wallet.dark}>
              <TitleContainer>
                <CardTitle>{wallet.title}</CardTitle>
                <Image src="/avc-icon.png" alt="AVC Icon" width={24} height={24} />
              </TitleContainer>
              <AVCContainer>
                <CardAVC>{wallet.avc} AVCs</CardAVC>
                <CardINR>{wallet.inr} INR</CardINR>
              </AVCContainer>
            </WalletCard>
          ))}
          <p style={{ textAlign: "center" }}>Top-up now for more experience</p>
          <TopUpButton onClick={handleTopUp} disabled={loading}>
            {loading ? "Processing..." : "TOP-UP NOW"}
          </TopUpButton>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {success && <div style={{ color: "green" }}>Top-up successful!</div>}
        </WalletSection>
      </SectionContainer>

      <SectionContainer1>
        <SectionTitle>Top-up history</SectionTitle>
        <TopUpHistorySection>
          {topUpHistory.length === 0 ? (
            <EmptyPaymentState onTopUpClick={handleTopUpClick} />
          ) : (
            topUpHistory.map((item, index) => (
              <TopUpItem key={index}>
                <TopUpIcon />
                <span>{item.description}</span>
                <span style={{ color: "#00FF00" }}>₹{item.amount}</span>
              </TopUpItem>
            ))
          )}
        </TopUpHistorySection>
      </SectionContainer1>
    </DashboardContainer>
  );
};

export default WalletPage;
