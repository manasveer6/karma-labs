import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #2B2B2B;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  color: #fff;
  font-size: 24px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: #333;
  color: #fff;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: #333;
  color: #fff;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  background-color: #FF6B00;
  color: white;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
`;

const ModalFooter = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #f47921;
  font-size: 18px;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (totalAvc: number) => void;
  avcRatePerHour: number; // Base rate per hour
  ramMultiplier: number;  // Multiplier for RAM
  cpuMultiplier: number;  // Multiplier for CPU
}

const LabConfigModal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, avcRatePerHour, ramMultiplier, cpuMultiplier }) => {
  const [name, setName] = useState<string>("");
  const [hours, setHours] = useState<number>(1); 
  const [ram, setRam] = useState<number>(4); // Default to 4GB
  const [cpu, setCpu] = useState<number>(2); // Default to 2 vCPU
  const [totalAvcs, setTotalAvcs] = useState<number>(avcRatePerHour);

  // Recalculate total AVCs based on selections
  useEffect(() => {
    const calculatedTotal = hours * avcRatePerHour + ram * ramMultiplier + cpu * cpuMultiplier;
    setTotalAvcs(calculatedTotal);
  }, [hours, ram, cpu, avcRatePerHour, ramMultiplier, cpuMultiplier]);

  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Customize Your Lab Experience</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label>Hours</Label>
            <Select value={hours} onChange={(e) => setHours(parseInt(e.target.value, 10))}>
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5 hours</option>
              <option value="6">6 hours</option>
              <option value="7">7 hours</option>
            </Select>
          </div>
          <div>
            <Label>RAM</Label>
            <Select value={ram} onChange={(e) => setRam(parseInt(e.target.value, 10))}>
              <option value="4">4GB</option>
              <option value="8">8GB</option>
              <option value="16">16GB</option>
              <option value="24">24GB</option>
              <option value="32">32GB</option>
              <option value="40">40GB</option>
              <option value="56">56GB</option>
              <option value="64">64GB</option>
            </Select>
          </div>
          <div>
            <Label>CPU</Label>
            <Select value={cpu} onChange={(e) => setCpu(parseInt(e.target.value, 10))}>
              <option value="2">2 vCPU</option>
              <option value="4">4 vCPU</option>
              <option value="8">8 vCPU</option>
              <option value="12">12 vCPU</option>
              <option value="16">16 vCPU</option>
              <option value="20">20 vCPU</option>
              <option value="24">24 vCPU</option>
              <option value="28">28 vCPU</option>
            </Select>
          </div>
        </ModalContent>
        <ConfirmButton onClick={() => onConfirm(totalAvcs)}>Confirm</ConfirmButton>
        <ModalFooter>Total: {totalAvcs} AVCs</ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
};

export default LabConfigModal;
