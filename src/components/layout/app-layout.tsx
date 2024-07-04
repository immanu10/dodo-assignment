import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar";
import { Header } from "../header";
import { useState } from "react";

export default function AppLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[228px_1fr] grid-rows-[auto_1fr]">
      <Header setMobileNavOpen={setMobileNavOpen} />
      <Sidebar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <main className="overflow-y-auto">
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
