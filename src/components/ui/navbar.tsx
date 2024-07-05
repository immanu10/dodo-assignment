import { ChevronDown, ChevronUp } from "lucide-react";
import React, { ReactNode, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

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
      <ul className="mt-2 flex flex-col space-y-0.5 select-none">{children}</ul>
    </div>
  );
}

function SidebarNavItem({
  children,
  icon,
  label,
  to,
}: {
  children?: ReactNode;
  icon?: ReactNode;
  label: string;
  to?: string;
  expand?: boolean;
}) {
  const { pathname } = useLocation();
  const isParentPath =
    children &&
    React.Children.toArray(children).some((child) => {
      if (React.isValidElement(child) && child.props.to) {
        return pathname.startsWith(child.props.to);
      }
      return false;
    });
  const [isOpen, setIsOpen] = useState(isParentPath);

  useEffect(() => {
    if (isParentPath) {
      setIsOpen(true);
    }
  }, [pathname]);

  if (children) {
    return (
      <li className="relative cursor-pointer">
        <div
          className="px-4 py-1  flex items-center gap-2 rounded-lg hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronUp className="text-gray-400 w-5 h-5" />
          ) : (
            <ChevronDown className="text-gray-400 w-5 h-5" />
          )}

          {icon}
          <p className="font-light">{label}</p>
        </div>
        {isOpen && (
          <ul className="mt-1 flex flex-col space-y-0.5">{children}</ul>
        )}
      </li>
    );
  }
  return (
    <li>
      <NavLink to={to ? to : "#"} className={cn("block relative ")}>
        {({ isActive }) => (
          <>
            <div
              className={cn(
                "invisible absolute left-0 inset-y-0 my-auto h-[20px] rounded-2xl bg-black w-1 transition-all",
                { visible: isActive }
              )}
            ></div>
            <div
              className={cn(
                "px-4 py-1 pl-11 flex items-center gap-2 rounded-lg hover:bg-muted",
                {
                  "bg-muted": isActive,
                }
              )}
            >
              {icon}
              <p className="font-light">{label}</p>
            </div>
          </>
        )}
      </NavLink>
    </li>
  );
}
function SidebarSubItem({ label, to }: { label: string; to: string }) {
  return (
    <li>
      <NavLink to={to ? to : "#"} className={cn("block relative")}>
        {({ isActive }) => (
          <>
            <div
              className={cn(
                "invisible absolute left-0 inset-y-0 my-auto h-[20px] rounded-2xl bg-black w-1 transition-all",
                { visible: isActive }
              )}
            ></div>
            <div
              className={cn(
                "px-4 py-1 flex items-center gap-2 rounded-lg hover:bg-muted",
                {
                  "bg-muted": isActive,
                }
              )}
            >
              <p className="font-light ml-14">{label}</p>
            </div>
          </>
        )}
      </NavLink>
    </li>
  );
}

SidebarSection.Item = SidebarNavItem;
SidebarSection.SubItem = SidebarSubItem;
export default SidebarSection;
