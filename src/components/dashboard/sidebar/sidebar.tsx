"use client";
import {
  MdDashboard,
  MdAddBox,
  MdShoppingBag,
  MdAssignmentAdd,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdDraw,
} from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const menuPage = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Element",
    path: "/dashboard/element",
    icon: <MdAddBox />,
  },
  {
    title: "Product",
    path: "/dashboard/product",
    icon: <MdShoppingBag />,
  },
  {
    title: "Channel",
    path: "/dashboard/channel",
    icon: <MdDraw />,
  },
  {
    title: "Order",
    path: "/dashboard/order",
    icon: <MdAssignmentAdd />,
  },
];

const menuUser = [
  {
    title: "User",
    path: "/dashboard/user",
    icon: <MdHelpCenter />,
  },
  {
    title: "Team",
    path: "/dashboard/team",
    icon: <MdPeople />,
  },
  {
    title: "Logfile",
    path: "/dashboard/logfile",
    icon: <MdAnalytics />,
  },
  {
    title: "Config",
    path: "/dashboard/config",
    icon: <MdOutlineSettings />,
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full h-14 p-2">
        <Avatar>
          <AvatarImage
            className="h-12 w-12"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>ZZ</AvatarFallback>
        </Avatar>
      </div>
      <Separator />
      <div className="p-2">
        <Select>
          <SelectTrigger className="shadow">
            <SelectValue placeholder="Select a Server"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Choose Server</SelectLabel>
              <SelectItem value="DE">DE-Server</SelectItem>
              <SelectItem value="IT">IT-Server</SelectItem>
              <SelectItem value="FR">FR-Server</SelectItem>
              <SelectItem value="UK">UK-Server</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="h-full rounded-md">
        <ToggleGroup
          type="single"
          className="list-none p-1 flex flex-col gap-1"
        >
          {menuPage.map((item) => (
            <Button
              variant="ghost"
              className="w-full justify-start p-0 m-0 flex flex-col gap-2 my-5"
              key={item.path}
            >
              <Link href={item?.path} className="w-full justify-start p-0 m-0">
                {/* <ToggleGroupItem
                  value={item.path}
                  key={item.path}
                  className="w-full h-full justify-start p-0 m-0 flex gap-2 my-5"
                > */}
                {React.cloneElement(item?.icon, { className: "w-5 h-5" })}
                <span>{item?.title}</span>
                {/* </ToggleGroupItem> */}
              </Link>
            </Button>
          ))}
          <Separator />
          {menuUser.map((item) => (
            <Button
              variant="ghost"
              className="w-full justify-start"
              key={item.title}
            >
              <Link href={item?.path} className="flex gap-2 my-5">
                {React.cloneElement(item?.icon, { className: "w-5 h-5" })}
                <span>{item?.title}</span>
              </Link>
            </Button>
          ))}
        </ToggleGroup>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
