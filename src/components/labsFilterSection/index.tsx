import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 40px 90px;
  background-color: #000;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 20px;

`;

const Divider = styled.hr`

  border: none;
  border-top: 1px solid #464646; // Line color
  margin: 0 auto 20px auto; // Center the line and add bottom margin
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1E2029;
  border-radius: 61px;
  padding: 10px 20px;
  margin: 0 auto;
`;

const Tabs = styled.div`
  display: flex;
  gap: 10px;
`;

const Tab = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#F47921' : '#515359')};
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #F47921;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: #221A15;
`;

const IconButton = styled.button`
  background-color: #FFB68D;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 18px;
    height: auto;
  }
`;

const LabsFilterSection = () => {
  return (
    <SectionContainer>
      <Title>Explore Our Diverse Labs: Unleash Your Creativity and Skills</Title>
      <Divider />
      <FilterContainer>
        <Tabs>
          <Tab active>All</Tab>
          <Tab>Web Development</Tab>
          <Tab>Web Design</Tab>
          <Tab>3D Design</Tab>
        </Tabs>
        <IconsContainer>
          <IconButton>
            <img src="/search-icon.png" alt="Search Icon" />
          </IconButton>
          <IconButton>
            <img src="/filter-icon.png" alt="Filter Icon" />
          </IconButton>
        </IconsContainer>
      </FilterContainer>
    </SectionContainer>
  );
};

export default LabsFilterSection;
