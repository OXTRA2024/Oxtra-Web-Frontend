import React from "react";
import Navigation from "../Dashboard/Navigation";
import DashbordHeader from "../Dashboard/DashbordHeader";
import SideNav from "../Dashboard/SideNav";
import AlterFooter from "../../layout/NonAuthLayout/Footers/AlterFooter";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePage: string;
}

const DashboardLayout = ({ children, activePage }: DashboardLayoutProps) => {
  return (
    <div className="h-screen flex flex-col ">
      <Navigation />

      <div className="flex-1 w-[90%] lg:max-w-[1033px] mx-auto">
        <DashbordHeader />
        <div className="flex flex-col lg:flex-row mt-12 gap-10">
          <div>
            <SideNav activePage={activePage} />
          </div>
          <div className="bg-brandGray-200 p-8 rounded-xl lg:w-[740px] xl:w-[840px]">
            {children}
          </div>
        </div>
      </div>
      <AlterFooter />
    </div>
  );
};

export default DashboardLayout;
