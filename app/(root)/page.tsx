import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function page() {
  return (
    <div className=" flex flex-col justify-center items-center text-4xl gap-4">
      <h1 className="  ">Test Fonts For Next js</h1>
      <h1 className=" font-space-grotesk h1-bold">DevOverflow</h1>
      <h1 className=" font-space-grotesk ">Test Fonts For Next js</h1>
      <h1 className=" h1-bold ">Test Fonts For Next js</h1>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-2xl">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
