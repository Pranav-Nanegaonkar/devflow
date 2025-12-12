import SocialAuthForms from "@/components/forms/SocialAuthForms";
import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-center min-h-screen bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-[90%] rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8 ">
        <div className="flex-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Dev<span className="text-primary-500">Flow</span></h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image
            className="object-contain"
            src="/images/site-logo.svg"
            alt="site-logo"
            width={50}
            height={50}
          />
        </div>
        {children}

        <SocialAuthForms />
      </section>
    </main>
  );
}

/* <div className="flex-start gap-1">
          <Image className="self-baseline"
            src="/images/site-logo.svg"
            alt="site-logo"
            width={23}
            height={23}
          />
          <h1 className="h2-bold font-space-grotesk">
            Dev<span className="text-primary-500">Flow</span>
          </h1>
        </div> */
