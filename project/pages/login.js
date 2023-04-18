import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { getSession } from "next-auth/react";
import InputWithLabel from "@/Components/form/inputwithlabel";
import { useFormik } from "formik";
import login_validation from "../lib/formVaild/formVaildation";
import { GetServerSideProps } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Input from "@/Components/form/input";
import InputErrorMessage from "@/Components/utils/inputerrormsg";
import GoogleSigninButton from "@/Components/form/googlesigninbox";
import Button from "@/Components/form/Button";
import toast from "react-hot-toast";
import Logo from "../assets/Logo.png";
import { Footer } from "@/Components/footer";
import Navbar from "@/Components/Navbar";
const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validation,
    onSubmit: LoginSubmit,
  });

  async function LoginSubmit(values) {
    setLoading(true);
    try {
      const status = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });
      if (status?.error) throw Error(status?.error );

      if (status?.ok) 
      {
        router.push("/");
        toast("welcome user !")
      }
      setLoading(false);
      
    } catch (error) {
      setError(error?.message);
      setLoading(false);
    }
  }

  return (
    <>
    <Navbar/> 
      <Head>
        <title>Login your account</title>
      </Head>

      <section className="bg-gray-50 py-3 dark:bg-blue-400">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <span className="mr-2">Login to</span>
            
            <img src={Logo.src} className="App-logo w-8 h-8 mr-2 rounded " alt="logo"/>
            <span className="text-red-400 font-bold">H</span>
            <span className="text-primary-700">appy</span>
            
            <span className="text-primary-700">Mall</span>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {error && (
                <p className="text-red-500 flex items-center gap-x-2">
                  
                  <span>{error}</span>
                </p>
              )}
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <InputWithLabel
                    label="Email Address"
                    placeholder="Email Address"
                    type="email"
                    {...formik.getFieldProps("email")}
                    name="email"
                  />

                  <InputErrorMessage
                    touched={formik.touched.email}
                    error={formik.errors.email}
                  />
                </div>

                <div>
                  <InputWithLabel
                    label="New Password"
                    type="password"
                    {...formik.getFieldProps("password")}
                    name="password"
                  />

                  <InputErrorMessage
                    touched={formik.touched.password}
                    error={formik.errors.password}
                  />
                </div>

                <Button type="submit" className="" loading={loading}>
                  Login
                </Button>
              </form>

              <GoogleSigninButton />

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <span className="mr-1"> Do not have an account?</span>
                <Link
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Create account!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Login;

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};