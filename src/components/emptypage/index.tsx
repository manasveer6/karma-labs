// src/components/EmptyState.tsx

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #a0abbb;
  text-align: center;
  margin-top: 200px
`;

const EmptyMessage = styled.h3`
  font-size: 24px;
  color: #a0abbb;
  margin-top: 20px;
`;

const GoToLabsButton = styled.button`
  background-color: #f47921;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const EmptyState: React.FC<EmptyStateProps> = ({ message, onClick }) => {
  return (
    <EmptyContainer>
      <Image src="/empty-card.png" alt="Empty State" width={180} height={180} />
      <EmptyMessage>{message}</EmptyMessage>
      <GoToLabsButton onClick={onClick}>Go to Labs</GoToLabsButton>
    </EmptyContainer>
  );
};

export default EmptyState;
