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
      <div className="fixed right-0 bottom-1 bg-white dark:bg-slate-900 px-2 py-1 text-xs font-medium border dark:border-slate-600 rounded-lg">
        <span>
          Made by{" "}
          <a href="https://immanu10.github.io/" target="_blank">
            @immanu10
          </a>
        </span>
      </div>
    </div>
  );
}
