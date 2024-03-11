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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuItems = [
  {
    title: "Pages",
    list: [
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
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Info",
        path: "/dashboard/user",
        icon: <MdHelpCenter />,
      },
      {
        title: "Team",
        path: "/dashboard/user/team",
        icon: <MdPeople />,
      },
      {
        title: "Logs",
        path: "/dashboard/user/log",
        icon: <MdAnalytics />,
      },
      {
        title: "Settings",
        path: "/dashboard/user/setting",
        icon: <MdOutlineSettings />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full h-14">
        <Avatar>
          <AvatarImage
            className="h-12 w-12"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <Separator />
      <div className="p-2">
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Select a fruit"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup >
            <SelectLabel>Choose Country</SelectLabel>
            <SelectItem  value="DE">DE-Server</SelectItem>
            <SelectItem value="IT">IT-Server</SelectItem>
            <SelectItem value="FR">FR-Server</SelectItem>
            <SelectItem value="UK">UK-Server</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      </div>
      <ScrollArea className="h-full rounded-md">
      <Button
          variant="outline"
          role="combobox"
          // aria-expanded={open}
          className="w-[200px] justify-between"
        >
          </Button>
        <Button variant="ghost" className="w-full">Element</Button>
        {/* <Tabs defaultValue="account" className="w-[100px]" >
          <TabsList >
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
        </Tabs> */}
      </ScrollArea>
    </div>
  );
};

export default Sidebar;

{
  /* <ScrollArea className="h-500 w-48 rounded-md border"> */
}
{
  /* <Command className="h-full rounded-lg shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="h-full rounded-lg border shadow-md">
          {menuItems.map((item) => (
            <CommandGroup key={item.title} heading={item.title}>
              {item.list.map((itemItem) => (
                <CommandItem key={itemItem.path}>
                  <span className="mr-2 h-4 w-4">{itemItem.icon}</span>
                  <span>{itemItem.title}</span>
                </CommandItem>
              ))}
              <CommandSeparator key={item.title} />
            </CommandGroup>
          ))}
        </CommandList>
      </Command> */
}
{
  /* </ScrollArea> */
}
