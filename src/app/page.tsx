"use client";
import Footer from "../components/footer";
import HeroSection from "../components/hero";
import FeaturesSection from "../components/featurecard";
import Navbar from "../components/navbar";
import FeaturesGridSection from "../components/card";
import OrbitalSection from "../components/herocontainer";

import { useState, useEffect } from "react";
import LoadingSpinner from "../components/loader";
import DesktopOnlyNotification from "../components/displayNotifier";


export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., fetching data)
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div id="__next">
      <DesktopOnlyNotification /> {/* Add the notification component */}
      <Navbar />
      <div className="main-content">
        <section>
          <HeroSection />
          <FeaturesSection />
          <FeaturesGridSection />
          <OrbitalSection />
        </section>
      </div>
      <Footer />
    </div>
  );
}
