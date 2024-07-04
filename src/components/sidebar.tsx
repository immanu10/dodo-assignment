import { ChevronDown, X } from "lucide-react";
import { RocketIcon } from "../assets/icons/RocketIcon";
import { ReactNode } from "react";
import { StartIcon } from "../assets/icons/StarIcon";
import { Link } from "react-router-dom";

type SidebarProps = {
  mobileNavOpen: boolean;
  setMobileNavOpen: (value: boolean) => void;
};

export function Sidebar({ mobileNavOpen, setMobileNavOpen }: SidebarProps) {
  return (
    <>
      <aside className="row-span-full bg-background hidden md:flex border-r border-border">
        <SidebarView />
      </aside>
      {mobileNavOpen && (
        <div className="md:hidden fixed h-full w-screen bg-black/80 z-40 inset-0 overflow-hidden transition-all">
          <div className="h-full w-[228px] shadow-sm bg-background overflow-y-auto">
            <SidebarView />
            <button
              onClick={() => setMobileNavOpen(false)}
              className="absolute top-[20px] left-[240px] rounded-full bg-background p-1 z-50 shadow-lg"
            >
              <X className="text-foreground" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function SidebarView() {
  return (
    <div className="w-full h-full px-4">
      <SidebarSection name="Pages">
        <SidebarNavItem />
        <SidebarNavItem />
        <SidebarNavItem />
      </SidebarSection>
    </div>
  );
}

function SidebarSection({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <div className="">
      <h4 className="text-gray-400 text-sm">{name}</h4>
      <div className="mt-2 flex flex-col space-y-1">{children}</div>
    </div>
  );
}

function SidebarNavItem() {
  return (
    <div className="relative bg-muted py-1 rounded-lg">
      <div className="absolute left-0 inset-y-0 my-auto h-[20px] rounded-2xl bg-black w-1"></div>
      <div className="pl-4 flex items-center gap-2">
        <ChevronDown className="text-gray-400 w-4 h-4" />
        <StartIcon />
        <p className="font-light">Overview</p>
      </div>
    </div>
  );
}
