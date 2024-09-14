"use client";
import { useState } from "react";
import styled from "styled-components";
import { FaBars, FaLongArrowAltLeft, FaLongArrowAltRight, FaTimes } from "react-icons/fa";
import { FiGrid, FiSettings, FiBell, FiLogOut } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { FiPieChart } from "react-icons/fi";

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "273px" : "80px")};
  background-color: #1B232D;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  transition: width 0.3s ease;
`;

const LogoSection = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? "left" : "center")};
  padding-bottom: 20px;
  gap: 10px;
`;

const LogoImage = styled.img<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "30px" : "40px")};
  height: auto;
  transition: width 0.3s ease;
`;

const LogoText = styled.span<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  overflow: hidden;
  color: var(
    --Avidia-design-project-key-colors-primary,
    var(--primary-base, #f47921)
  );
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const MenuLabel = styled.span<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const NumberBadge = styled.span<{ isOpen: boolean }>`
  background-color: #343434;
  color: #e5e1e1;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-left: auto; /* Pushes the badge to the right */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(/avatar.png);
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center; /* Centers the image */
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #d0d5dd;
`;

const ProfileInfo = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  overflow: hidden;
  color: var(--Neutral-400, #a0abbb);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ToggleButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  cursor: pointer;
`;
interface SidebarProps {
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <div>
        <LogoSection isOpen={isOpen}>
          <LogoImage
            src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Avidia.png"
            isOpen={isOpen}
            alt="Avidia Labs"
          />
          <LogoText isOpen={isOpen}> Avidia Labs</LogoText>
        </LogoSection>
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? <FaLongArrowAltLeft />: <FaLongArrowAltRight />}
        </ToggleButton>
        <MenuSection>
          <MenuItem onClick={() => setActiveMenu("activeLabs")}>
            <FiPieChart size={20} />
            <MenuLabel isOpen={isOpen}>Active Labs</MenuLabel>
          </MenuItem>
          <MenuItem onClick={() => setActiveMenu("previousLabs")}>
            <FiPieChart size={20} />
            <MenuLabel isOpen={isOpen}>Previous Labs</MenuLabel>
          </MenuItem>
          <MenuItem onClick={() => setActiveMenu("wallet")}>
            <FiGrid size={20} />
            <MenuLabel isOpen={isOpen}>Wallet</MenuLabel>
          </MenuItem>
          <MenuItem onClick={() => setActiveMenu("previousLabs")}>
            <FiBell size={20} style={{ color: "#191D23" }} />
            <MenuLabel isOpen={isOpen}>Notifications</MenuLabel>
            <NumberBadge
              isOpen={isOpen}
              style={{ backgroundColor: "#047857", color: "#FFFFFF" }}
            >
              10
            </NumberBadge>
          </MenuItem>
        </MenuSection>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        <Divider />

        <div>
          <ProfileSection>
            <Avatar />
            <ProfileInfo isOpen={isOpen}>
              <div style={{ color: "#E5E1E1" }}>Jenny Wilson</div>
              <div>jen.wilson@example.com</div>
            </ProfileInfo>
          </ProfileSection>
        </div>
        <button
          style={{
            backgroundColor: "#C5524C", // Button background color
            padding: "10px 20px", // Padding inside the button
            borderRadius: "4px", // Rounded corners
            display: "flex", // Flexbox layout for alignment
            alignItems: "center", // Center items vertically
            justifyContent: "center", // Center items horizontally
            gap: isOpen ? "10px" : "0px", // Space between icon and text
            border: "none", // No border
            cursor: "pointer", // Pointer cursor on hover
            color: "#fff", // Text color (make sure it's not the same as the background)
          }}
        >
          <FiLogOut size={isOpen ? 20 : 15} color="#fff" />{" "}
          {/* Explicitly set the icon color to white */}
          {isOpen && <span>Log out</span>}
        </button>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
