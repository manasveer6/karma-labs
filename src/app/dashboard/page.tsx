"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/src/components/sidebar";
import styled from "styled-components";
import ActiveLabs from "@/src/components/activelab";
import PreviousLab from "@/src/components/previouslab";

import DashboardNavbar from "@/src/components/dashboardNavbar";
import WalletPage from "@/src/components/wallet";

const PageContainer = styled.div`
  display: flex;
  height: 100vh; /* Ensures the height of the page fills the viewport */
  overflow: hidden; /* Prevent any scrolling or overflow causing white spaces */
`;

const DashboardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  flex-grow: 1; /* Ensure the content fills the remaining space */
  padding: 20px;
  background-color: #11161c;
  min-height: 0; /* Prevents stretching */
  overflow-y: auto; /* Allows scrolling within the content */
`;

const AvidiaDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("activeLabs"); // Default to ActiveLabs

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const menu = urlParams.get("menu");
    if (menu) {
      setActiveMenu(menu);
    }
  }, []);

  const renderContent = () => {
    console.log('Active menu:', activeMenu); // Check if it's switching to "wallet"
    switch (activeMenu) {
      case "wallet":
        return <WalletPage />;
      case "activeLabs":
        return <ActiveLabs />;
      case "previousLabs":
        return <PreviousLab />;
      default:
        return <ActiveLabs />;
    }
  };
  

  return (
    <PageContainer>
      <Sidebar setActiveMenu={setActiveMenu} />
      <DashboardContent>
        <DashboardNavbar /> 
        <ContentContainer>{renderContent()}</ContentContainer>
      </DashboardContent>
    </PageContainer>
  );
};

export default AvidiaDashboard;
