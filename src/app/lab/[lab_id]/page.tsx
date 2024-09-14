"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/src/components/navbar';
import Footer from '@/src/components/footer';
import { Labs } from '@/src/components/labs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Skeleton styles

const LabDetailsPage = () => {
  const params = useParams();
  const labId = Array.isArray(params.lab_id) ? params.lab_id[0] : params.lab_id; // Ensure labId is a string
  const labName = "Web Design"; 
  const labCategory = "Design Courses"; 

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching/loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust as necessary

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      <Navbar />

      {loading ? (
        // Show skeleton loader while loading
        <div style={{ padding: '20px' }}>
          {/* Skeleton for the title, description, and images */}
          <Skeleton height={40} width={300} style={{ marginBottom: '20px' }} baseColor="#1E1E1E" highlightColor="#2A2A2A" />
          <Skeleton height={30} width="80%" baseColor="#1E1E1E" highlightColor="#2A2A2A" />
          <Skeleton height={200} width="100%" style={{ marginTop: '20px' }} baseColor="#1E1E1E" highlightColor="#2A2A2A" />
          <Skeleton height={30} width="50%" style={{ marginTop: '10px' }} baseColor="#1E1E1E" highlightColor="#2A2A2A" />
          <Skeleton height={30} width="60%" style={{ marginTop: '10px' }} baseColor="#1E1E1E" highlightColor="#2A2A2A" />
        </div>
      ) : (
        // Render the actual content once loading is complete
        <Labs labId={labId as string} labName={labName} labCategory={labCategory} /> 
      )}

      <Footer />
    </div>
  );
};

export default LabDetailsPage;
