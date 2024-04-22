"use client";
import Link from "next/link"
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"

export function LoginForm() {

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit() {
    try {
      Swal.fire({
        title: 'Success!',
        text: 'Login successful',
        icon: "success",
        confirmButtonText: 'Ok'
      })
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 min-w-full flex flex-col items-center"
          >
            <div className="grid gap-5 w-full">

              {/* Email */}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Email :</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gamil.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <div className="grid gap-2">

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <div className="flex items-center">
                        <FormLabel>Password :</FormLabel>
                        <Link href="#" className="ml-auto inline-block text-sm underline">
                          Forgot your password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Login */}
              <Button type="submit" className="w-full">
                Login
              </Button>

              {/* Login with Google */}
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
        </Form>


        {/* SignUp */}
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
