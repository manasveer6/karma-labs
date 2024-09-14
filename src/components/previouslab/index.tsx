import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LabCard from "../labcard";
import { getUserLabs } from "@/src/hooks/previouslab";
import EmptyState from "../emptypage";

const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  padding: 20px;
`;

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

const PreviousLabs = () => {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const token = process.env.NEXT_PUBLIC_JWT_TOKEN || "";

  useEffect(() => {
    if (!token) {
      console.error("No token found. Make sure to set NEXT_PUBLIC_JWT_TOKEN in your environment.");
      setError("Authentication token missing");
      setLoading(false);
      return;
    }
  
    const fetchLabs = async () => {
      try {
        const labsData = await getUserLabs(token);
        if (labsData && labsData.data) {
          setLabs(labsData.data);
        } else {
          setError("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching previous labs:", error);
        setError("Failed to fetch labs");
      } finally {
        setLoading(false);
      }
    };
  
    fetchLabs();
  }, [token]);
  

  

  return (
    <div>
      <Title>Previous Labs</Title>
      {labs.length === 0 ? (
        <EmptyState
          message="No previous labs found."
          onClick={() => (window.location.href = "/labs")}
        />
      ) : (
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
      )}
    </div>
  );
};

export default PreviousLabs;
