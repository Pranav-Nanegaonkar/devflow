import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function page() {
  const session = await auth();

  console.log(session);

  return (
    <div className=" flex flex-col justify-center items-center text-4xl gap-4">
      <h1 className="  ">Test Fonts For Next js</h1>
      <h1 className=" font-space-grotesk h1-bold">DevOverflow</h1>
      <h1 className=" font-space-grotesk ">Test Fonts For Next js</h1>
      <h1 className=" h1-bold ">Test Fonts For Next js</h1>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
        className="px-10 pt-[100px]"
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
