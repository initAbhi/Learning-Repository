import Image from "next/image";
import Header from "@/components/Header";
import Dashboard from "@/components/dashboard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div >
      <Header />
      <div className="main-container">
        <Sidebar />
        <Dashboard />
        {/* yes */}
      </div>
    </div>
  );
}
