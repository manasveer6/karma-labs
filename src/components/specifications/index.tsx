import styled from "styled-components";

const SpecificationsSection = styled.section`
  margin: 50px 0;
  text-align: center;
`;

const SpecificationsHeading = styled.h2`
  font-size: 2.5rem;
  color: #f47921; /* Orange color */
  margin-bottom: 2rem;
`;

const SpecificationsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SpecificationCard = styled.div`
  background-color: #1e1e1e;
  padding: 30px 40px;
  border-radius: 15px;
  width: 30%;
  text-align: center;
  border: 2px solid rgba(244, 121, 33, 0.7); /* Orange border */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SpecValue = styled.p`
  font-size: 1.8rem;
  color: #ffffff; /* White for value text */
  margin-bottom: 10px;
`;

const SpecLabel = styled.p`
  font-size: 1rem;
  color: #a1a1a1; /* Light grey for label */
  margin-top: 5px;
`;

const Specifications = () => {
  return (
    <SpecificationsSection>
      <SpecificationsHeading>Specifications</SpecificationsHeading>
      <SpecificationsContainer>
        <SpecificationCard>
          <SpecValue>0.5 M to 12 GiB</SpecValue>
          <SpecLabel>RAM</SpecLabel>
        </SpecificationCard>
        <SpecificationCard>
          <SpecValue>0.1vCPU to 12vCPU</SpecValue>
          <SpecLabel>CPU</SpecLabel>
        </SpecificationCard>
      </SpecificationsContainer>
    </SpecificationsSection>
  );
};

export default Specifications;
