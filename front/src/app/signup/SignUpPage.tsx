"use client";

import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

//comp

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/userProvider";

const SignUp = () => {
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
    name: yup
      .string()

      .max(50, "Name must be under 50 character")
      .required("Name is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const { signUp } = useUser();

  const formik = useFormik({
    onSubmit: ({ email, password, name }) => {
      console.log(email), console.log(password), console.log(name);
      signUp({ email, name, password });
    },
    initialValues: { email: "", password: "", name: "" },
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
        <p>{formik.errors.name}</p>
        <Input
          className="rounded-xl text-black"
          type="name"
          placeholder="Name"
          name="name"
          value={formik.values.name}
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
          Sign Up
        </Button>
        <div className="gap-4 flex flex-col items-center justify-center">
          <Link href="/login">
            <p className="underline">If you already have account ?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
