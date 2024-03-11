import { ReactNode } from "react";
import NavbarUI from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { Separator } from "@/components/ui/separator";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row m-0 p-0 w-screen h-screen">
      <div className="h-full w-56 m-0 p-0">
        <Sidebar />
      </div>
      <Separator orientation="vertical"/>
      <div className="flex-1 flex-col">
        <NavbarUI />
        <Separator />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
