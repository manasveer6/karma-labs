"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import {
  footerText,
  icons,
  importantLinks,
  links,
} from "@/src/constants/footer";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #18181c;
  color: white;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: -webkit-fill-available;
  max-width: 1200px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FooterHeading = styled.h4`
  color: white;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: white;
  margin-bottom: 8px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const AvidiaLogo = styled.div`
  margin: 20px 0;
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #aaa;
  text-align: center;
  width: 100%;
  margin-top: 20px; // Adjust margin-top as needed
`;

const IconSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; // Space between logo and icons
`;
const LogoImage = styled.img`
  width: 89px;
  height: 89px;
  transition: width 0.3s ease;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoGroup>
          <LogoSection>
          <LogoImage
            src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Avidia.png"
            alt="Avidia Labs"
          />
          </LogoSection>
          <IconSection>
            {icons.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={30}
                height={30}
              />
            ))}
          </IconSection>
        </LogoGroup>
        <FooterSection>
          <FooterHeading> {footerText.sitemapTitle}</FooterHeading>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              passHref
              className="font-thin"
            >
              <FooterLink>{link.text}</FooterLink>
            </Link>
          ))}
        </FooterSection>
        <FooterSection>
          <FooterHeading> {footerText.importantLinksTitle}</FooterHeading>
          {importantLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              passHref
              className="font-thin"
            >
              <FooterLink>{link.text}</FooterLink>
            </Link>
          ))}
        </FooterSection>
      </FooterContent>
      <AvidiaLogo>
        <Image
          src="/labs.png"
          alt={footerText.labsAlt}
          width={1150}
          height={135}
        />
      </AvidiaLogo>
      <Copyright>
        {footerText.copyright}
        {new Date().getFullYear()}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
