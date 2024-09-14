"use client";
import styled from "styled-components";
import Image from "next/image"; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import the hook
import { cards } from "@/src/constants/featurecard";

const GridContainer = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 100px 80px;
  background-color: #000;
  color: white;
`;

const TextContainer = styled(motion.div)`
  grid-column: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TextTitle = styled.h2`
  color: var(--Absolute-White, #fff);
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Highlight = styled.span`
  color: #f47921;
`;

const TextPara = styled.p`
  color: var(--Grey-90, #e6e6e6);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.096px;
`;

const Card = styled(motion.div)`
  background-color: #18181c;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  height: 371.227px;
`;

const CardTitle = styled.h3`
  color: var(--Absolute-White, #fff);
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.132px;
`;

const CardText = styled.p`
  color: #c2c2c2;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.096px;
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 40px;
  border-radius: 8px;
  opacity: var(--sds-size-stroke-border);
  background: var(--primary-base, #f47921);
`;

const FeaturesGridSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <GridContainer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.3 } }
      }}
    >
      <TextContainer
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <TextTitle>
          Why Choose <br /> <Highlight> Avidia Labs? </Highlight>
        </TextTitle>
        <TextPara>
          Instant Access to Any Software, Right from <br /> Your Browser - No
          Downloads, No Hassle!
        </TextPara>
      </TextContainer>
      {cards.map((card, index) => (
        <Card
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <CardIcon>
            <Image
              src={card.icon}
              alt={`${card.title} icon`}
              width={50}
              height={50}
            />
          </CardIcon>
          <CardTitle>{card.title}</CardTitle>
          <CardText>{card.text}</CardText>
        </Card>
      ))}
    </GridContainer>
  );
};

export default FeaturesGridSection;
