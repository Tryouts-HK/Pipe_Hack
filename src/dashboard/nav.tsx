// import Link from "react-router-dom";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./dropdown";
// import { Button } from "../components/ui/button";
import { DashProfile } from "./profile";

export default function ProfileNav () {
    const handleYearChange = () => {
        // Implement year change logic here
    }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <form className="relative hidden w-full max-w-sm sm:flex">
            <Input type="search" placeholder="Search..." className="pr-8" />
            <SearchIcon className="absolute right-2 top-2 h-4 w-4 text-muted-foreground" />
          </form>
        </div>
        <div className="flex items-center gap-4">
          {/* <DropdownMenu>
            <DropdownMenuTrigger onClick={handleYearChange}>
              <Button variant="outline" className="flex items-center gap-2">
                <span>2023</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" isOpen={false} className="w-[120px]">
              <DropdownMenuLabel>Select Year</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>2023</DropdownMenuItem>
              <DropdownMenuItem>2022</DropdownMenuItem>
              <DropdownMenuItem>2021</DropdownMenuItem>
              <DropdownMenuItem>2020</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <select className="rounded-lg border border-gray-300 bg-white text-gray-900 h-10 px-4 pr-8 mb-4">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            </select>
          <DropdownMenu>
            <DropdownMenuTrigger onClick={handleYearChange}>
              {/* <Button variant="ghost" className="rounded-full">
                <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                <span className="sr-only">Toggle user menu</span>
              </Button> */}
              <DashProfile />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end"  isOpen={false}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

// function ChevronDownIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 9l6 6 6-6" />
//     </svg>
//   );
// }

// function MountainIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
