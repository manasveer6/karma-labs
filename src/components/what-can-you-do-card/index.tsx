import styled from 'styled-components';
import Image from 'next/image';
import {whatYouCanDoItems} from '../../constants/labs';

const WhatYouCanDoBox = styled.div`
  margin-top: 4rem;
  padding-right: 5.156rem;
  padding-left: 5.156rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap; /* Ensures two cards per row */
`;

const CardContainer = styled.div`
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 1.25rem;
  width: 40%;
  max-width: 500px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 1rem;
  transition: all 0.3s ease-in-out;
  object-fit: cover;

  &:hover {
    transform: translateY(-10px); /* Subtle hover effect */
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const CardHeading = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const CardText = styled.p`
  color: #b7b7b7;
  font-size: 1rem;
  text-align: left;
`;

const CardImage = styled.img`
border-radius: 12px;
align-self: stretch;
flex-shrink: 0;
height: 300px;
width: 100%;
position: relative;
object-fit: cover;
`;

const WhatYouCanDo = () => {
  return (
    <WhatYouCanDoBox>
      {whatYouCanDoItems.map((item, i) => (
        <CardContainer key={i}>
          <CardImage
           
            alt={item.title}
            src={item.imageSrc}
          />
          <div>
            <CardHeading>{item.title}</CardHeading>
            <CardText>{item.description}</CardText>
          </div>
        </CardContainer>
      ))}
    </WhatYouCanDoBox>
  );
};

export default WhatYouCanDo;
