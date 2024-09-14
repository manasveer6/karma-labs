"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { AVCPrice } from "../labcard";
import styled from "styled-components";
import {
  aIMentorBoxItems,
  breadCrumbItems,
  learnings,
  studentReviews,
  whatYouCanDoItems,
} from "@/src/constants/labs";
import SneakPeak from "../sneakpeak";
import Specifications from "../specifications";
import WhatYouCanDoCard from "../what-can-you-do-card";
import EnhancedLearning from "../enhanced-section";
const BACKGROUND_COLOR = "#18181C";

const Heading = styled.div`
  color: #f47921;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.75rem;
  text-align: center;
`;
const WhatYouCanDoBox = styled.div`
  margin-top: 4rem;
  padding-right: 5.156rem;
  padding-left: 5.156rem;
  display: flex;
  gap: 2rem;
`;
const AIMentorBox = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 8rem;
  justify-content: center;
`;

// Define the props type
interface LabsProps {
  labId: string;
  labName: string;
  labCategory: string;
}

export const Labs = ({ labId, labName, labCategory }: LabsProps) => {
  return (
    <>
      {/* Your JSX structure here... */}

      <div className={`bg-[${BACKGROUND_COLOR}] pt-8 pb-24`}>
        <div>
          <div className="flex top-[1.25rem] ml-[8.1875rem]">
            {breadCrumbItems.map((breadcrumbItem, i) => {
              return (
                <div className="flex gap-2 " key={i}>
                  <span className="labPage-breadCrumb-color">
                    {breadcrumbItem}
                  </span>
                  {i !== breadCrumbItems.length - 1 && (
                    <ChevronRight color="#807A82" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex">
            <Image
              className="ml-[8.375rem] h-[11rem] mt-[3.0625rem]"
              alt="dots"
              src="/dots.png"
              width={80}
              height={176}
            />
            <div className="flex gap-8">
              <div className="mt-[5.1125rem] ml-[-2rem] max-w-[41rem] flex flex-col gap-4">
                <h1 className="font-semibold text-[2.25rem] text-white leading-[3.15rem]">
                  Master Front-End Development <br /> With React JS
                </h1>
                <p className="text-[#A1A1A1] text-sm leading-[1.4rem] font-normal tracking-[1%]">
                  React JS is a popular JavaScript library for building user
                  interfaces. In this lab, you&apos;ll learn how to create
                  interactive, fast, and scalable web applications. Perfect for
                  front-end developers looking to enhance their skills.
                </p>
                <div className="flex gap-8">
                  <AVCPrice>
                    <span>
                      <Image
                        src="/avc-icon-bright.png"
                        alt="AVC Icon"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span>10 AVC per hour</span>
                    <span>
                      <Image
                        src="/info-icon-bright.png"
                        alt="Info Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                  </AVCPrice>
                  <AVCPrice>
                    <span>
                      <Image
                        src="/participants.png"
                        alt="Participants Icon"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span>100 Participants</span>
                  </AVCPrice>
                </div>
                <button className="bg-gradient-to-r font-normal text-white max-w-[14.375rem] rounded-[6.25rem] py-[0.75rem] px-[1.5rem] from-[#F47921] to-[#DD4A2F]">
                  Launch Now
                </button>
              </div>
              <div>
                <Image
                  className="mt-[5.0625rem]"
                  alt="React JS"
                  src="/react-lab-img.png"
                  width={426.87}
                  height={298}
                />
                <Image
                  className="ml-[8rem] mt-[-2rem]"
                  alt="dots"
                  src="/inverted-dots.png"
                  width={344}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SneakPeak />
      <Specifications />
      <WhatYouCanDoCard />

    <EnhancedLearning/>
      <Heading className="mt-[8rem] mb-[8rem]">What our students say</Heading>
      <div className="flex gap-12 mb-[4rem] justify-center">
        {Array(studentReviews)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex flex-col gap-8 ">
              <div className="flex gap-4 justify-center items-center">
                <Image
                  src="/student.png"
                  alt="User Profile"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ">
                  <span className="text-white">Subhramanyam</span>
                  <span className="text-[#666666]">San Francisco, USA</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="z-10"
                  src="/rating.png"
                  alt="User Profile"
                  width={140}
                  height={36}
                />
                <div
                  className={`bg-[${BACKGROUND_COLOR}] mt-[-1rem] font-[400] leading-[1.5rem] text-white p-8 rouned-lg`}
                >
                  React JS Lab was an amazing experience! It <br /> helped me
                  transition from a beginner to an <br />
                  intermediate level. The AI mentor was a great <br /> guide
                  throughout the process.
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
