import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define keyframes for the animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container with background image
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 1200px;
  color: #fff;
  background: url('/hero.png') no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Content within the container
const HeroContent = styled.div`
  text-align: center;
  padding: 20px;
  z-index: 10;
  position: relative;
  margin-top: -750px;
  animation: ${fadeIn} 1s ease-out forwards;
`;

// Heading with animation
const HeroHeading = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 100px;
  animation: ${fadeIn} 1.5s ease-out forwards;
`;

// Button with hover effects
const Button = styled.a`
  color: black;
  padding: 10px 20px;
  border-radius: 25px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, background 0.3s;
  background: #ffffff;
  animation: ${fadeIn} 2s ease-out forwards;

  &:hover {
    background: linear-gradient(90deg, #c2412b 3.7%, #fb8c00 99.72%);
  }
`;

// Container for buttons with animation delay
const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  animation: ${fadeIn} 2.5s ease-out forwards;
`;

const HeroSection = () => {
  const [labId, setLabId] = useState<string | null>(null);
  useEffect(() => {
    // Simulate fetching the labId dynamically from an API or route
    const fetchedLabId = '123'; // This is an example, replace it with real labId
    setLabId(fetchedLabId);
  }, []);
  return (
    <HeroContainer>
      <HeroContent>
        <HeroHeading>Avidia Labs</HeroHeading>
        <HeroButtons>
          <Link href={`/lab/${labId}`} passHref><Button>Get Started</Button></Link>
          <Link href="/dashboard" passHref><Button>Go to Dashboard</Button></Link>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
