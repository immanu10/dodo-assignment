import { X } from "lucide-react";
import { StartIcon } from "../assets/icons/StarIcon";
import SidebarSection from "./ui/navbar";

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
        <SidebarSection.Item
          label="Overview"
          icon={<StartIcon />}
          to="/overview"
        />
        <SidebarSection.Item label="Transaction" icon={<StartIcon />}>
          <SidebarSection.SubItem label="Overview" to="/transaction/overview" />
          <SidebarSection.SubItem label="Products" to="/transaction/products" />
        </SidebarSection.Item>
      </SidebarSection>
    </div>
  );
}
