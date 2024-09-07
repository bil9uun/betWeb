"use client";
import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/userProvider";

const LogInPage = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .matches(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "Email is not valid"
      )
      .max(50, "Email must be under 50 character")
      .required("Email is required")
      .email("Email is not valid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const { logIn } = useUser();

  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      console.log(email), console.log(password);
      logIn({ email, password });
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  return (
    <div className="w-screen main-container flex items-center justify-center">
      <div className="w-1/2 flex flex-col self-center items-center justify-center gap-4">
        <p>{formik.errors.email}</p>
        <Input
          className="rounded-xl text-black"
          type="email"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <p className="text-white">{formik.errors.password}</p>
        <Input
          className="rounded-xl text-black"
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          className="bg-accent rounded-xl w-1/4"
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Log in
        </Button>
        <div className="gap-4 flex flex-col items-center justify-center">
          <Link href="/signup">
            <p className="underline">If you dont have account ?</p>
          </Link>
          <p>or</p>
          <Link href="/forgotPassword">
            <p className="underline">Forgot password ?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
