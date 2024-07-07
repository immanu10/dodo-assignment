import { X } from "lucide-react";
import SidebarSection from "./ui/navbar";
import { RocketIcon } from "../assets/icons/RocketIcon";
import { TransactionIcon } from "../assets/icons/TransactionIcon";
import { InvoiceIcon } from "../assets/icons/InvoiceIcon";
import { CustomerIcon } from "../assets/icons/CustomerIcon";
import { BarCodeIcon } from "../assets/icons/BarCodeIcon";
import { IdentityIcon } from "../assets/icons/IdentityIcon";
import { BasketIcon } from "../assets/icons/BasketIcon";
import { NotebookIcon } from "../assets/icons/NotebookIcon";
import { GearIcon } from "../assets/icons/GearIcon";
import { FileDocIcon } from "../assets/icons/FileDocIcon";
import { HelpCenterIcon } from "../assets/icons/HelpCenterIcon";
import Tabs from "./ui/tabbar";

type SidebarProps = {
  mobileNavOpen: boolean;
  setMobileNavOpen: (value: boolean) => void;
};

export function Sidebar({ mobileNavOpen, setMobileNavOpen }: SidebarProps) {
  return (
    <>
      <aside className="row-span-full bg-background dark:bg-background-dark  hidden md:flex border-r border-border dark:border-slate-800 overflow-y-auto">
        <SidebarView />
      </aside>
      {mobileNavOpen && (
        <div className="md:hidden fixed h-full w-screen bg-black/80 z-40 inset-0 overflow-hidden transition-all">
          <div className="h-full w-[248px] shadow-sm bg-background dark:bg-background-dark overflow-y-auto">
            <SidebarView />
            <button
              onClick={() => setMobileNavOpen(false)}
              className="absolute top-[20px] left-[260px] rounded-full bg-background p-1 z-50 shadow-lg"
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
  const NAV_ITEMS = [
    {
      label: "Overview",
      icon: <RocketIcon />,
      to: "/overview",
    },
    {
      label: "Transaction",
      icon: <TransactionIcon />,
      children: [
        {
          label: "Overview",
          to: "/transaction/overview",
        },
        {
          label: "Products",
          to: "/transaction/products",
        },
      ],
    },
    {
      label: "Invoices",
      icon: <InvoiceIcon />,
      children: [
        {
          label: "Sub Item 1",
          to: "/invoices/sub1",
        },
        {
          label: "Sub Item 2",
          to: "/invoices/sub2",
        },
      ],
    },
    {
      label: "Customers",
      icon: <CustomerIcon />,
      children: [
        {
          label: "Sub Item 1",
          to: "/customers/sub1",
        },
        {
          label: "Sub Item 2",
          to: "/customers/sub2",
        },
      ],
    },
    {
      label: "Product Catalog",
      icon: <BarCodeIcon />,
      children: [
        {
          label: "Overview",
          to: "/catalog/overview",
        },
        {
          label: "Products",
          to: "/catalog/products",
        },
        {
          label: "Discounts",
          to: "/catalog/discounts",
        },
        {
          label: "Taxable Items",
          to: "/catalog/taxable",
        },
      ],
    },
    {
      label: "Reports",
      icon: <IdentityIcon />,
      children: [
        {
          label: "Sub Item 1",
          to: "/reports/sub1",
        },
        {
          label: "Sub Item 2",
          to: "/reports/sub2",
        },
      ],
    },
    {
      label: "Checkout",
      icon: <BasketIcon />,
      children: [
        {
          label: "Sub Item 1",
          to: "/checkout/sub1",
        },
        {
          label: "Sub Item 2",
          to: "/Checkout/sub2",
        },
      ],
    },
    {
      label: "Business Account",
      icon: <NotebookIcon />,
      children: [
        {
          label: "Sub Item 1",
          to: "/business/sub1",
        },
        {
          label: "Sub Item 2",
          to: "/business/sub2",
        },
      ],
    },
    {
      label: "Developer Tools",
      icon: <GearIcon />,
      children: [
        {
          label: "Settings",
          to: "/developer/settings",
        },
        {
          label: "Sub Item 2",
          to: "/developer/sub2",
        },
      ],
    },
  ];
  return (
    <div className="w-full h-full px-4">
      <div className="flex items-center gap-4 py-4">
        <img src="/user-logo.svg" alt="user-avatar" />
        <span className="text-sm font-light">Superstar AI</span>
      </div>
      <Tabs defaultValue="favorite" className="mt-1">
        <Tabs.List className="flex items-center gap-4">
          <Tabs.Trigger value="favorite">Favorites</Tabs.Trigger>
          <Tabs.Trigger value="recent">Recently</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="favorite">
          <ul className="space-y-2 cursor-pointer">
            <li className="text-sm font-light">
              <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
              Get Started
            </li>
            <li className="text-sm font-light">
              <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
              Transactions
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="recent">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-sm font-light">Hello, User</span>
          </div>
        </Tabs.Content>
      </Tabs>
      <SidebarSection name="Pages" className="mt-8">
        {NAV_ITEMS.map((item, i) => (
          <SidebarSection.Item
            key={i}
            label={item.label}
            icon={item.icon}
            to={item.to}
          >
            {item.children &&
              item.children.map((subItem, subItemIndex) => (
                <SidebarSection.SubItem
                  key={subItemIndex}
                  label={subItem.label}
                  to={subItem.to}
                />
              ))}
          </SidebarSection.Item>
        ))}
      </SidebarSection>
      <SidebarSection name="Pages" className="mt-8">
        <SidebarSection.Item
          label={"Documentation"}
          icon={<FileDocIcon />}
          url="https://immanu10.github.io/"
        />
        <SidebarSection.Item
          label={"Help Center"}
          icon={<HelpCenterIcon />}
          url="https://immanu10.github.io/"
        />
      </SidebarSection>
      <div className="mt-16 pb-8">
        <img src="/app-logo.svg" alt="applogo" className="dark:invert" />
      </div>
    </div>
  );
}
