import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RocketIcon } from "../assets/icons/RocketIcon";
import { StartIcon } from "../assets/icons/StarIcon";
import { SearchInput } from "./search-input";
import { MenuIcon, SidebarClose, SidebarOpen } from "lucide-react";
import { SunIcon } from "../assets/icons/SunIcon";
import { ClockIcon } from "../assets/icons/ClockIcon";
import { BellIcon } from "../assets/icons/BellIcon";

type HeaderProps = {
  setMobileNavOpen: (value: boolean) => void;
  notificationOpen: boolean;
  toggleNotificationSection: () => void;
};

export function Header({
  setMobileNavOpen,
  notificationOpen,
  toggleNotificationSection,
}: HeaderProps) {
  const [pageName, setPageName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname.split("/");
    setPageName(pagePath[1] || "Home");
  }, [location.pathname]);

  return (
    <header className="border-b border-border py-3 px-2 grid grid-cols-[1fr_auto] gap-2 items-center">
      <div className="flex flex-col md:flex-row md:items-center">
        <button
          className="p-1 block md:hidden"
          onClick={() => setMobileNavOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <div className="hidden text-xs font-normal md:flex items-center gap-3">
          <RocketIcon />
          <StartIcon />
          <span className="inline text-gray-400">Pages</span>
          <span className="inline text-gray-400">/</span>
          <span className="inline capitalize"> {pageName}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SearchInput />
        <button className="p-1">
          <SunIcon />
        </button>
        <button className="p-1">
          <ClockIcon />
        </button>
        <button className="p-1">
          <BellIcon />
        </button>
        <button className="p-1" onClick={toggleNotificationSection}>
          {notificationOpen ? (
            <SidebarClose className="w-5 h-5 fill-muted" />
          ) : (
            <SidebarOpen className="w-5 h-5 fill-muted" />
          )}
        </button>
      </div>
    </header>
  );
}
