import Link from "next/link";
import { Button } from "@/components/ui/button";
import SigninPage from "./signin/page";

export default function Homepage() {
  return (
    <div className="h-screen p-10 flex justify-center">
      <SigninPage />
      {/* <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link> */}
    </div>
  );
}
