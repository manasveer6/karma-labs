"use client";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  height: 600px;
  color: white;
  position: relative;
  padding: 90px;
  background: url("/blobs.png") no-repeat center center / cover;
  background-size: 1173.384px 499.309px;
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  margin-left: 69px;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 55px;
`;

const HighLight = styled.span`
  color: #f47921;
`;

const Subheading = styled.p`
  color: #d1d1d1;
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
`;

const StyledButton = styled(motion.a)`
  padding: 10px 30px;
  background: linear-gradient(90deg, #c2412b 3.7%, #fb8c00 99.72%);
  color: #fff;
  border-radius: 20px;
  text-decoration: none;
`;

const OrbitalGraphic = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: url("/illustration.png") no-repeat left center / contain;
  background-color: transparent;
  margin-left: 90px;
`;

const OrbitalSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger animation when 10% of the component is in view
  });

  return (
    <HeroContainer ref={ref}>
      <TextContent
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        <Heading>
          <HighLight>Join Avidia Labs</HighLight> & Transform Your Digital
          Experience with Cloud Computing!
        </Heading>
        <Subheading>
          Experience Seamless Access to Top-Tier Software Like VSCode, Blender,
          And Davinci Resolve Directly In Your Browser. Join Our Beta And Help
          Shape The Future Of Cloud Computing.
        </Subheading>
        <Link href="/#" passHref>
          <StyledButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </StyledButton>
        </Link>
      </TextContent>
      <OrbitalGraphic
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
      />
    </HeroContainer>
  );
};

export default OrbitalSection;
