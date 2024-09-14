import { cardData } from '@/src/constants/labs';
import styled from 'styled-components';

const EnhancedSection = styled.section`
  background-color: #121212;
  padding: 50px 5%;
  color: white;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #f47921;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: #a1a1a1;
  margin-bottom: 50px;
`;

const CardGrid = styled.div`
  display: grid;
  border-radius: 24px;
  grid-template-columns: repeat(3, 1fr); /* This makes 3 cards per row */
  gap: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* For smaller screens, 2 cards per row */
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* For mobile, 1 card per row */
  }
`;

const Card = styled.div`
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 300px;
  background-color: #1e1e1e; /* Card background */
  border-radius: 24px;
  overflow: hidden; /* Ensures the rounded corners are respected */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 1px; /* Adjust the thickness of the border */
    background: linear-gradient(180deg, rgba(244, 121, 33, 1.00) 0%, rgba(244, 121, 33, 0.10) 52.79998779296875%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0); /* Use the content box for the gradient */
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;



const CardIcon = styled.div`
  background-color: #f47921;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #a1a1a1;
`;

const EnhancedLearning = () => {
  return (
    <EnhancedSection>
      <Heading>Enhanced learning experience</Heading>
      <SubHeading>
        Get collaborative learning environments for students and teachers with cloud PCs that enable real-time sharing and unrestricted learning experiences.
      </SubHeading>
      <CardGrid>
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardIcon>{card.icon}</CardIcon>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </CardGrid>
    </EnhancedSection>
  );
};

export default EnhancedLearning;
