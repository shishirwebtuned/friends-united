"use client"

import { cn } from "@/lib/utils"
import { Button } from "../Components/ui/button"
import { Card, CardContent } from "../Components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "../Components/ui/field"
import { Input } from "../Components/ui/input"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import axiosInstance from "../utils/axiosinstance"
import axios from "axios"

interface LoginValues {
  email: string
  password: string
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })

  const initialValues: LoginValues = {
    email: "",
    password: "",
  }

  const handleSubmit = async (values: LoginValues) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, values)
      console.log("Login successful", response.data)
    } catch (error) {
      console.error("Login failed", error)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, values }) => (
              <Form className="p-6 md:p-8 w-full">
                <FieldGroup>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                    <p className="text-muted-foreground">
                      Login to your account
                    </p>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="m@example.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <div className="text-red-500 text-xs mt-1">
                      <ErrorMessage name="email" />
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <div className="text-red-500 text-xs mt-1">
                      <ErrorMessage name="password" />
                    </div>
                  </Field>

                  <Button type="submit">Login</Button>
                </FieldGroup>
              </Form>
            )}
          </Formik>

          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Login"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
