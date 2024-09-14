import styled, { keyframes } from "styled-components";
import Image from "next/image";

// Spinner animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Fade in animation for text
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0F0D13; // Dark background
  color: white;
`;

const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #f47921; // Avidia's orange color
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
  margin-bottom: 20px;
`;

const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #f47921; // Avidia's orange color
  animation: ${fadeIn} 2s ease-in-out infinite alternate;
`;

const ImageContainer = styled.div`
  margin-bottom: 20px;
`;


// Styled component for the Avidia logo
const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 20px; // Adjust the spacing below the logo
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = () => (
  <LoaderWrapper>
    <LogoWrapper>
      <StyledLogo
        src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Avidia.png"
        alt="Avidia Logo"
        width={100}
        height={100}
      />
    </LogoWrapper>
    <Loader />
    <LogoText>Avidia Labs</LogoText>
  </LoaderWrapper>
);

export default LoadingSpinner;
