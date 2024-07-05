import { ReactNode, createContext, useContext, useState } from "react";
import { cn } from "../../lib/utils";

interface TabsContextType {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const Tabs = ({
  defaultValue,
  className,
  children,
}: {
  defaultValue: string;
  className?: string;
  children: ReactNode;
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <div className={cn("tabs", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <div className={cn("tabs-list flex", className)}>{children}</div>;

const TabsTrigger = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs");
  }
  const { selectedTab, setSelectedTab } = context;
  const isSelected = selectedTab === value;

  return (
    <button
      className={cn(
        "tabs-trigger py-3 text-sm transition-colors text-gray-500/50",
        {
          "text-gray-500": isSelected,
        }
      )}
      onClick={() => setSelectedTab(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs");
  }
  const { selectedTab } = context;
  return selectedTab === value ? (
    <div className="tabs-content mt-2">{children}</div>
  ) : null;
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export default Tabs;
