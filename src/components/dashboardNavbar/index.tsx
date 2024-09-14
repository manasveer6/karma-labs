"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image"; // Assuming you'll be using Next.js's image optimization

// Styled Components
const NavbarContainer = styled.div`
  width: 100%;
  background-color: #1B232D; 
  padding: 1rem 2rem; 
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); 
`;

const Button = styled.button`
  background-color: #F47921;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e0651a;
  }
`;

const OutlineButton = styled.button`
  background: none;
  color: #f47921; // Orange border and text for "Top-up"
  border: 1px solid #f47921;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  margin-right: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(244, 121, 33, 0.1);
  }
`;


const DashboardNavbar = () => {
  return (
    <NavbarContainer>
      <Button>Explore Labs</Button>
      <OutlineButton>Top-up</OutlineButton>
    </NavbarContainer>
  );
};

export default DashboardNavbar;
