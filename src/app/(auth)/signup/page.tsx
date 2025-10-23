import Link from "next/link";
import React from "react";

import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import FormItem from "@/shared/FormItem";
import Input from "@/shared/Input/Input";

const PageSignUp = () => {
  return (
    <div
      className="mt-8 h-max rounded-2xl bg-white p-10 shadow-2xl w-1/2"
      data-nc-id="PageSignUp"
    >
      <h2 className="mb-5 flex items-center justify-center text-2xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
        Sign Up
      </h2>
      <div className="mx-auto max-w-md">
        <div className="space-y-2">
          <form className="grid gap-1">
            <FormItem label="Email" helperText="">
              <Input
                type="Email"
                rounded="rounded-full"
                sizeClass="h-10 px-4 py-2"
                placeholder="youremail@example.com"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              />
            </FormItem>
            <FormItem label="Username" helperText="">
              <Input
                type="text"
                rounded="rounded-full"
                sizeClass="h-10 px-4 py-2"
                placeholder="Your username"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              />
            </FormItem>
            <FormItem label="Password" helperText="">
              <Input
                type="password"
                rounded="rounded-full"
                sizeClass="h-10 px-4 py-2"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              />
            </FormItem>
            <FormItem label="Confirm Password" helperText="Mật khẩu nhập lại không chính xác">
              <Input
                type="password"
                rounded="rounded-full"
                sizeClass="h-10 px-4 py-2"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              />
            </FormItem>
            <ButtonPrimary className="mt-2">Sign Up</ButtonPrimary>
          </form>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="block text-center text-sm font-semibold text-neutral-500">
              Already have an account? {` `}
              <Link
                href="/login"
                className="text-primary hover:underline hover:underline-offset-2"
              >
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
