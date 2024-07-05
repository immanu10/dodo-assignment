import { ChevronDown, ChevronRight, Link } from "lucide-react";
import React, { ReactNode, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

function SidebarSection({
  className,
  name,
  children,
}: {
  className?: string;
  name: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <h4 className="text-gray-400 text-sm">{name}</h4>
      <ul className="mt-2 flex flex-col space-y-0.5 select-none nav__list">
        {children}
      </ul>
    </div>
  );
}

function SidebarNavItem({
  children,
  icon,
  label,
  to,
  url,
}: {
  children?: ReactNode;
  icon?: ReactNode;
  label: string;
  to?: string;
  expand?: boolean;
  url?: string;
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
          className="px-4 py-1  flex items-center gap-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronDown className="text-gray-400 w-4 h-4" />
          ) : (
            <ChevronRight className="text-gray-400 w-4 h-4" />
          )}

          {icon}
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all">
            {label}
          </span>
        </div>
        {isOpen && (
          <ul className="mt-1 flex flex-col space-y-0.5">{children}</ul>
        )}
      </li>
    );
  }
  if (url) {
    return (
      <li>
        <a
          href={url}
          target="_blank"
          className="px-4 py-1 flex items-center gap-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark"
        >
          <Link className="text-gray-400 w-3 h-3" />
          {icon}
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all">
            {label}
          </span>
        </a>
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
                "invisible absolute left-0 inset-y-0 my-auto h-[20px] rounded-2xl bg-black dark:bg-blue-500 w-1 transition-all",
                { visible: isActive }
              )}
            ></div>
            <div
              className={cn(
                "px-4 py-1 pl-11 flex items-center gap-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark",
                {
                  "bg-muted dark:bg-muted-dark": isActive,
                }
              )}
            >
              {icon}
              <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all">
                {label}
              </span>
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
                "invisible absolute left-0 inset-y-0 my-auto h-[20px] rounded-2xl bg-black dark:bg-blue-500 w-1 transition-all",
                { visible: isActive }
              )}
            ></div>
            <div
              className={cn(
                "px-4 py-1 flex items-center gap-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark",
                {
                  "bg-muted dark:bg-muted-dark": isActive,
                }
              )}
            >
              <span className="ml-14 text-sm font-medium opacity-80 group-hover:opacity-100 transition-all">
                {label}
              </span>
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
