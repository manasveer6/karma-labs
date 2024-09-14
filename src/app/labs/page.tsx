"use client";
import { useState, useEffect } from "react";
import Footer from "@/src/components/footer";
import LabGrid from "@/src/components/labgrid";
import LabsFilterSection from "@/src/components/labsFilterSection";
import Navbar from "@/src/components/navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Skeleton styles

export default function LabsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this timeout as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        // Show skeleton with user-friendly layout
        <div style={{ padding: "20px" }}>
          {/* Skeleton for filter section */}
          <div style={{ marginBottom: "20px" }}>
            <Skeleton 
              width={300} 
              height={40} 
              baseColor="#1E1E1E" 
              highlightColor="#2A2A2A" 
              borderRadius="8px" 
            />
            <Skeleton 
              width={200} 
              height={40} 
              style={{ marginLeft: "20px" }} 
              baseColor="#1E1E1E" 
              highlightColor="#2A2A2A" 
              borderRadius="8px"
            />
          </div>

          {/* Skeleton for labs grid items */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {Array(6) // Create 6 skeleton grid items for loading state
              .fill(0)
              .map((_, idx) => (
                <div key={idx}>
                  <Skeleton 
                    height={200} 
                    baseColor="#1E1E1E" 
                    highlightColor="#2A2A2A" 
                    borderRadius="8px" 
                  />
                  <Skeleton 
                    width="80%" 
                    height={20} 
                    style={{ marginTop: "10px" }} 
                    baseColor="#1E1E1E" 
                    highlightColor="#2A2A2A"
                  />
                  <Skeleton 
                    width="60%" 
                    height={20} 
                    style={{ marginTop: "5px" }} 
                    baseColor="#1E1E1E" 
                    highlightColor="#2A2A2A"
                  />
                </div>
              ))}
          </div>
        </div>
      ) : (
        // Render the actual content once loading is complete
        <>
          <LabsFilterSection />
          <LabGrid setActiveMenu={() => {}} />
        </>
      )}
      <Footer />
    </div>
  );
}
