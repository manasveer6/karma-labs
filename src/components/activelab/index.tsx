import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { getActiveLabs } from "@/src/hooks/activelab";
import EmptyState from "../emptypage";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #11161c;
  padding: 40px;
  color: #fff;
  border-radius: 8px;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
`;

const TitleSection = styled.div`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

const EmptyTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  padding: 20px;
`;
const Subtitle = styled.p`
  font-size: 18px;
  color: #a0abbb;
`;

const CardContainer = styled.div`
  width: 270px;
  height: 200px;
  background-color: #140d08;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
`;

const LabCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e1c24;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  width: 90%;
`;

const LabInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const LabTitle = styled.h3`
  font-size: 18px;
  color: #fff;
`;

const AVCPrice = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  gap: 5px;
`;

const TimeLeft = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
  color: #ff6161;
`;

const RestartButton = styled.button`
  background-color: #f47921;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
`;

const ProgressSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  width: 100%;
  height: 100%;
`;

const ProgressTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProgressBarContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 80%;
  height: 20px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 60%;
  background-color: #f47921;
`;

const TimeRemainingText = styled.span`
  margin-top: 10px;
  color: #a0abbb;
`;

const ActiveLabs = () => {
  const [lab, setLab] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const token = process.env.NEXT_PUBLIC_JWT_KEY || "";

  useEffect(() => {
    const fetchLabData = async () => {
      try {
        console.log("Using Token:", token);
        const labData = await getActiveLabs({ token });
        console.log("Active Labs Data:", labData);
        if (labData && labData.length > 0) {
          setLab(labData[0]); // Assuming the first lab is the active one
        } else {
          setError("No active labs found.");
        }
      } catch (error) {
        console.error("Error fetching active labs:", error);
        setError("Failed to fetch active lab.");
      } finally {
        setLoading(false);
      }
    };

    fetchLabData();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <>
       <EmptyTitle>Active Labs</EmptyTitle>
      <EmptyState
          message="No active labs found."
          onClick={() => (window.location.href = "/labs")}
        />
      </>
     
    );
  }

  const handleRestart = () => {
    const restartUrl = `/labs/${lab.id}`;
    window.location.href = restartUrl;
  };

  return (
    <Container>
      <TitleSection>
        <Title>Start where you left</Title>
        <Subtitle>{lab.name} is still waiting</Subtitle>
        <LabCard>
          <CardContainer>
            <Image src={lab.image} alt={`${lab.name} Icon`} width={90} height={90} />
          </CardContainer>
          <LabInfo>
            <FlexRow>
              <LabTitle>{lab.name}</LabTitle>
              <AVCPrice>
                <Image src="/avc-icon.png" alt="AVC Icon" width={20} height={20} />
                <span>{lab.avcPrice} AVC per hour</span>
                <Image src="/info-icon.png" alt="Info Icon" width={15} height={15} />
              </AVCPrice>
            </FlexRow>
            <TimeLeft>
              <MdOutlineAccessAlarm width={20} height={20} />
              <span>{lab.timeLeft} hours left</span>
            </TimeLeft>
            <RestartButton onClick={handleRestart}>Re-Start Now</RestartButton>
          </LabInfo>
        </LabCard>
      </TitleSection>
      <ProgressSection>
        <ProgressTitle>Time Remaining</ProgressTitle>
        <ProgressBarContainer>
          <ProgressBar style={{ width: `${(lab.timeLeft / lab.totalTime) * 100}%` }} />
        </ProgressBarContainer>
        <TimeRemainingText>
          {lab.timeLeft} hours out of {lab.totalTime} hours
        </TimeRemainingText>
      </ProgressSection>
    </Container>
  );
};

export default ActiveLabs;
