import { type ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";

interface LayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export default function Layout({ sidebar, children }: LayoutProps) {
  return (
    <div className="page-wrapper">
      {/* Gobal NavBar */}
      <Navbar />
      {/* Everything below the navbar */}
      <div className="main-wrapper">
        {/* Sidebar */}
        {sidebar && <div className="sidebar">{sidebar}</div>}
        {/* Main Content */}
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}
