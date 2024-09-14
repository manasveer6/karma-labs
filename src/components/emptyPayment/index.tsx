"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #a0abbb;
  text-align: center;
  padding: 40px;
  height: 100%; /* Ensures it takes full height */
`;

const EmptyMessage = styled.h3`
  font-size: 24px;
  color: #a0abbb;
  margin-top: 20px;
`;

const EmptyIcon = styled.div`
  margin-bottom: 20px;
`;

const GoToTopUpButton = styled.button`
  background-color: #f47921;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #d3660f;
  }
`;

const EmptyPaymentState = ({ onTopUpClick }: { onTopUpClick: () => void }) => {
  return (
    <EmptyContainer>
      <EmptyIcon>
        <Image src="/empty-card.png" alt="Empty Payment Icon" width={150} height={150} />
      </EmptyIcon>
      <EmptyMessage>No Top-up history</EmptyMessage>
      <GoToTopUpButton onClick={onTopUpClick}>Top-up now</GoToTopUpButton>
    </EmptyContainer>
  );
};

export default EmptyPaymentState;
