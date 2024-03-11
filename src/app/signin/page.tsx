import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SigninPage() {
  return(
    <div className="w-full h-full flex flex-row justify-center border">
      <div className="w-28 h-full bg-background">
        x
      </div>
      <div>

      </div>
      <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </div>
  )
}