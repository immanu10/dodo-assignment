import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar";
import { Header } from "../header";
import { useState } from "react";
import { RightSideBar } from "../right-sidebar";

export default function AppLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleNotificationSection = () => {
    setNotificationOpen(!notificationOpen);
  };
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[248px_1fr]">
      <Sidebar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <div className="flex">
        <div className="w-full h-full">
          <Header
            notificationOpen={notificationOpen}
            setMobileNavOpen={setMobileNavOpen}
            toggleNotificationSection={toggleNotificationSection}
          />
          <main className="overflow-y-auto w-full h-full px-4 py-4">
            <div className="mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
        {notificationOpen && (
          <RightSideBar
            notificationOpen={notificationOpen}
            setNotificationOpen={setNotificationOpen}
          />
        )}
      </div>
    </div>
  );
}
