import Link from "next/link";
import React from "react";

import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import FormItem from "@/shared/FormItem";
import Input from "@/shared/Input/Input";

const PageLogin = () => {
  return (
    <div
      className="mt-16 h-max rounded-2xl bg-white p-10 shadow-2xl sm:w-4/5 lg:w-1/2"
      data-nc-id="PageLogin"
    >
      <h2 className="mb-5 flex items-center justify-center text-2xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
        Login
      </h2>
      <div className="mx-auto max-w-md">
        <div className="space-y-2">
          <div className="grid gap-2">
            <FormItem label="Username">
              <Input
                type="text"
                rounded="rounded-full"
                sizeClass="h-10 px-4 py-2"
                placeholder="Your username"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              />
            </FormItem>
            <FormItem label="Password">
              <Input
                type="password"
                rounded="rounded-full"
                sizeClass="h-10 px-4 py-2"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              />
            </FormItem>
            <ButtonPrimary className="mt-2">Login</ButtonPrimary>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href="/forgot-pass"
              className="text-sm font-semibold text-primary hover:underline hover:underline-offset-2"
            >
              Forgot password
            </Link>
            <span className="block text-center text-sm font-semibold text-neutral-500">
              Don&apos;t have an account? {` `}
              <Link
                href="/signup"
                className="text-primary hover:underline hover:underline-offset-2"
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
