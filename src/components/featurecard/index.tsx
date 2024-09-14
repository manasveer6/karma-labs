"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { features } from "@/src/constants/featurecard";

const SectionContainer = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  color: white;
  padding: 40px 80px;
  opacity: 0; // Initially hidden
`;

const FeatureHeadingContainer = styled.div`
  grid-column: 1 / 2;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
`;

const Highlight = styled.span`
  color: #f47921;
`;

const FeatureParagraph = styled.span`
  color: #c0c0c0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  width: 330px;
`;

const FeaturesStack = styled.div`
  grid-column: 2 / 4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;

const FeatureTitle = styled.h1`
  font-size: 38px;
  font-weight: 600;
  line-height: 120%;
`;

const FeatureBlock = styled(motion.div)`
  background-color: #18181c;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FeatureNumber = styled.div`
  color: #f47921;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: 1px solid #f47921;
`;

const FeatureDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeatureText = styled.span`
  color: #C0C0C0;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
`;

const FeaturesSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry:', entry);
        if (entry.isIntersecting && !hasAnimated) {
          console.log('Animating FeaturesSection');
          controls.start('visible');
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, hasAnimated]);

  return (
    <SectionContainer
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <FeatureHeadingContainer>
        <FeatureTitle>
          <Highlight>Features</Highlight> that <br /> Keep You going
        </FeatureTitle>
        <FeatureParagraph>
          Instant Access to Any Software, Right from Your Browser - No Downloads, No Hassle!
        </FeatureParagraph>
      </FeatureHeadingContainer>
      <FeaturesStack>
        {features.map((feature, index) => (
          <FeatureBlock
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } },
            }}
          >
            <FeatureNumber>{feature.number}</FeatureNumber>
            <FeatureDescription>
              <FeatureText>{feature.text}</FeatureText>
            </FeatureDescription>
          </FeatureBlock>
        ))}
      </FeaturesStack>
    </SectionContainer>
  );
};

export default FeaturesSection;
