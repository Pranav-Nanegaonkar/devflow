"use client";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

export default function SocialAuthForms() {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 flex-1 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });

      toast.success("Signin successfully");
    } catch (error) {
      console.log(error);
      toast.error("Signin Failed");
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          className="invert-colors mr-2.5 object-contain"
          src="/icons/github.svg"
          alt="github-logo"
          width={20}
          height={20}
        />
        <span>Log in with Github</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          className="mr-2.5 object-contain"
          src="/icons/google.svg"
          alt="google-logo"
          width={20}
          height={20}
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
}
