"use client"
import Image from "next/image";
import Header from "@/components/Header";
import Dashboard from "@/components/dashboard";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [assets, setAssets] = useState([])
  console.log(assets)

  const onHandleNewUpload = (asset) => {
    setAssets(prev => [asset, ...prev])
  }

  return (
    <div >
      <Header />
      <div className="main-container">
        <Sidebar onHandleNewUpload={onHandleNewUpload} />
        <Dashboard />
        {/* yes */}
      </div>
    </div>
  );
}
