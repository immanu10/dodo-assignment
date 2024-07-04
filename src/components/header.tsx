import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RocketIcon } from "../assets/icons/RocketIcon";
import { StartIcon } from "../assets/icons/StarIcon";
import { SearchInput } from "./search-input";

type HeaderProps = {
  setMobileNavOpen: (value: boolean) => void;
};

export function Header({ setMobileNavOpen }: HeaderProps) {
  const [pageName, setPageName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname.split("/");
    setPageName(pagePath[1] || "Home");
  }, [location.pathname]);

  return (
    <header className="border-b border-border py-4 px-2 grid grid-cols-[1fr_auto]">
      <div className="flex items-center">
        <button className="p-2" onClick={() => setMobileNavOpen(true)}>
          <RocketIcon />
        </button>
        <button className="">
          <StartIcon />
        </button>
        <div>{pageName}</div>
      </div>
      <div className="flex items-center">
        <SearchInput />
        <button className="p-2">
          <RocketIcon />
        </button>
        <button className="">
          <StartIcon />
        </button>
      </div>
    </header>
  );
}
