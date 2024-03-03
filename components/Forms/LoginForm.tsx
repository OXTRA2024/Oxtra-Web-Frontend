import React, { useEffect } from "react";
import classNames from "classnames";
import { useState } from "react";
import Link from "next/link";
import { Form, Formik } from "formik";
import { initLoginValues, validationLoginSchema } from "@/helpers/validations";
import AuthInput from "../constants/AuthInput";
import { Button } from "@chakra-ui/react";
import Pick_Return from "../constants/Pick_Return";
import { useRouter } from "next/router";

const labelClasses = classNames(
  "text-[12px] leading-[12px] font-gordita-bold text-[$444648]",
);

const LoginForm = () => {
  const [checkout, setCheckout] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkoutValue = localStorage.getItem("checkout");
    /* @ts-ignore */
    setCheckout(checkoutValue);
  }, []);

  const handleSubmit = (values = "") => {
    if (checkout) {
      setIsLoading(true);
      {
        setTimeout(() => {
          setIsLoading(false);
          router.push("/checkout");
        }, 2000);
      }
    } else {
      console.log(values);
    }
  };
  const [show, setShow] = useState(false);

  const buttonText =
    checkout !== null ? "Create account and Pay" : "Create Account";

  return (
    <main>
      <div
        className={`${
          checkout === "checkout" ? "flex" : "hidden"
        } mt-[50px] md:mt-[unset]`}
      >
        <Pick_Return />
      </div>

      <div className="mt-[30px]">
        <div className="text-center mb-[20px] text-[#444648] font-gordita-bold text-[24px]">
          Login
        </div>
      </div>

      <section className="flex w-[100%] lg:mx-auto lg:max-w-[500px] flex-col">
        <Formik
          /* @ts-ignore */
          onSubmit={handleSubmit}
          initialValues={initLoginValues}
          validationSchema={validationLoginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            /* @ts-ignore */
            <Form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-6">
                <div className="col-span-full">
                  <label htmlFor="" className={labelClasses}>
                    Email address
                  </label>
                  <div className="mt-1">
                    <AuthInput
                      placeholder="Enter your email address"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.email}
                      error={errors?.email && touched?.email && errors?.email}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="email-address" className={labelClasses}>
                    Enter password
                  </label>
                  <div className="mt-1 relative">
                    <AuthInput
                      placeholder="Enter password"
                      value={values?.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      error={
                        errors?.password &&
                        touched?.password &&
                        errors?.password
                      }
                      onClick={() => setShow((prev) => !prev)}
                      password={show ? false : true}
                      show
                      type={show ? "text" : "password"}
                    />
                  </div>
                </div>
              </div>
              <div className="text-end mt-[22px] mb-[32px]">
                <Link
                  href="/forgot-password"
                  className="text-[12px] leading-[12px] text-black font-gordita-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                bg="#438950"
                _hover={{ opacity: 0.8 }}
                borderRadius="8px"
                h="48px"
                color="#fff"
                fontSize="14px"
                fontWeight={500}
                isLoading={isLoading}
                w="full"
                type="submit"
                _active={{ bg: "#438950" }}
                _focus={{ bg: "#438950" }}
                isDisabled={!isValid || !dirty}
              >
                {buttonText}
              </Button>{" "}
            </Form>
          )}
        </Formik>
        <div className="text-center mt-[32px]">
          <span className="text-[12px] text-brandGray-300 leading-[12px] font-gordita-medium">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-brandGreen-300 ">
              Sign up
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
};

export default LoginForm;
