import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import LabConfigModal from "../labmodal";

const Card = styled.div`
  background-color: #1e2029;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  color: #fff;
  align-items: center;
`;

const CardImageContainer = styled.div`
  width: 270px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #140d08;
  margin-bottom: 15px;
  margin-left: -5px;
  gap: 24px;
`;

const CardImage = styled.div<{ imageSrc: string }>`
  width: 30%;
  height: 40%;
  background-image: url(${(props) => props.imageSrc});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #f4f0ef;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 20px;
  text-align: left;
`;

export const AVCPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #f5cba7;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Adds space between the buttons */
  gap: 10px; /* Optional: Adjust the gap between the buttons */
  width: 100%; /* Ensures the buttons span the full width of the parent */
`;

const LearnMoreButton = styled.button`
  padding: 10px 20px;
  background: #f47921;
  color: #fff;
  border-radius: 20px;
  height: var(--40, 40px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  text-decoration: none;
  transition: background 0.3s;
  margin: 10px 0; /* Add margin for space above and below the button */

  &:hover {
    background: linear-gradient(90deg, #fb8c00 3.7%, #c2412b 99.72%);
  }
`;

interface LabCardProps {
  title: string;
  description: string;
  avcPrice: number;
  imageSrc: string;
  labId: string;
}

const LabCard: React.FC<LabCardProps> = ({
  title,
  description,
  avcPrice,
  imageSrc,
  labId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter hook

  const handleLearnMore = () => {
    router.push(`/lab/${labId}`); // Redirect to the dynamic lab details page
  };

  const handleLaunchLab = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = (totalAvcs: number) => {
    setIsModalOpen(false);
    console.log("Total AVCs for this configuration: ", totalAvcs);
  };

  const ramMultiplier = 1.5;
  const cpuMultiplier = 2.0;

  return (
    <>
      <Card>
        <CardImageContainer>
          <CardImage imageSrc={imageSrc} />
          <CardTitle>{title}</CardTitle>
        </CardImageContainer>
        <CardDescription>{description}</CardDescription>
        <AVCPrice>
          <span>
            <Image src="/avc-icon.png" alt="AVC Icon" width={24} height={24} />
          </span>
          <span>{avcPrice} AVC per hour</span>
          <span>
            <Image
              src="/info-icon.png"
              alt="Info Icon"
              width={16}
              height={16}
            />
          </span>
        </AVCPrice>
        <ButtonContainer>
          <LearnMoreButton onClick={handleLearnMore}>
            Learn More
          </LearnMoreButton>
          <LearnMoreButton onClick={handleLaunchLab}>
            Launch Lab
          </LearnMoreButton>
        </ButtonContainer>
      </Card>

      <LabConfigModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        avcRatePerHour={avcPrice}
        ramMultiplier={ramMultiplier}
        cpuMultiplier={cpuMultiplier}
      />
    </>
  );
};

export default LabCard;
