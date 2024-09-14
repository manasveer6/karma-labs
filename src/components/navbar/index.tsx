"use client";
import styled from "styled-components";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Use this for client-side routing

const Nav = styled.nav`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 29px 95px;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25.5px; /* 170% */
  text-transform: capitalize;
`;

const NavbarLinkItem = styled.li`
  padding: 0 15px;
`;

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;

  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 25.5px; /* 170% */
  text-transform: capitalize;

  &:hover {
    color: #f47921; // Orange hover effect
  }
`;

const LoginButton = styled.button`
  width: 117px;
  padding: 13px 28px;
  background: linear-gradient(90deg, #c2412b 3.7%, #fb8c00 99.72%);
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: linear-gradient(
      90deg,
      #fb8c00 3.7%,
      #c2412b 99.72%
    ); // Inverse gradient on hover
  }
`;

const LogoImage = styled.img`
  width: 89px;
  height: auto;
  transition: width 0.3s ease;
`;



const Navbar = () => {
  const [labId, setLabId] = useState<string | null>(null);
  // const [loading, setLoading] = useState(true); // Loading state for session check
  const router = useRouter(); // Use Next.js router for client-side navigation

  useEffect(() => {
    // Simulate fetching the labId dynamically from an API or route
    const fetchedLabId = '123'; // This is an example, replace it with real labId
    setLabId(fetchedLabId);
  }, []);

  const handleLoginClick = () => {
    router.push('/login'); // Use router.push for client-side navigation
  };
  
  return (
    <Nav>
      <div>
        <LogoImage
          src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Avidia.png"
          alt="Avidia Labs"
        />
      </div>
      <NavbarLinks>
        <NavbarLinkItem>
          <Link href="/" passHref>
            <NavbarLink>Home</NavbarLink>
          </Link>
        </NavbarLinkItem>
        <NavbarLinkItem>
           {/* Dynamically link to the specific lab if labId is available */}
           {labId && (
            <Link href={`/lab/${labId}`} passHref>
              <NavbarLink>Lab Details</NavbarLink>
            </Link>
          )}
        </NavbarLinkItem>
        <NavbarLinkItem>
          <Link href="/dashboard" passHref>
            <NavbarLink>My Dashboard</NavbarLink>
          </Link>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <Link href="/wallet" passHref>
            <NavbarLink>Wallet</NavbarLink>
          </Link>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <Link href="#" passHref>
            <NavbarLink>Explore</NavbarLink>
          </Link>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <Link href="#" passHref>
            <NavbarLink>Community</NavbarLink>
          </Link>
        </NavbarLinkItem>
      </NavbarLinks>
      <LoginButton onClick={handleLoginClick}>Log In</LoginButton>
    </Nav>
  );
};

export default Navbar;
