// Import necessary types
import styled from "styled-components";

// Define the interface for the props
interface WalletCardProps {
  dark?: boolean;
}

// Use the interface in the styled component
const WalletCard = styled.div<{ dark: boolean }>`
  background-color: ${({ dark }) => (dark ? "#11161c" : "#11161c")};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: ${({ dark }) => (dark ? "1px solid #F47921" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
`;

export default WalletCard;
