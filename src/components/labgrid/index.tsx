import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import LabCard from "../labcard";
import { getAllLabs } from "@/src/hooks/lab";

const GridContainer = styled.div`
  padding: 40px 90px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  background-color: #000;
`;

type Lab = {
  id: string;
  name: string;
  description: string;
  rate: number;
  image: string;
};

const LabGrid = ({ setActiveMenu }: { setActiveMenu: (menu: string) => void }) => {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_JWT_TOKEN as string;
        const labsData = await getAllLabs(token);

        if (labsData && labsData.data) {
          setLabs(labsData.data); // Extract the 'data' array
        } else {
          setError('Invalid response format');
        }
      } catch (error) {
        setError('Failed to fetch labs');
      } finally {
        setLoading(false);
      }
    };

    fetchLabs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <GridContainer>
      {labs.map((lab, index) => (
        <LabCard
          key={index}
          title={lab.name}
          description={lab.description}
          avcPrice={lab.rate}
          imageSrc={lab.image}
          labId={lab.id}
        />
      ))}
    </GridContainer>
  );
};

export default LabGrid;
