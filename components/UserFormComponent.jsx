"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function UserFormComponent() {
    const router = useRouter();

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
                text: 'User addition successful',
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
        router.push(`/table/`);
    }
    return (
        <Card className="mx-auto w-[50vw] p-6">
            <CardHeader className=" flex flex-col items-center">
                <CardTitle className="text-2xl">User Form</CardTitle>
                <CardDescription>
                    Edit User details or Enter a new User
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5 min-w-full flex flex-col items-center"
                    >
                        <div className="grid gap-5 w-4/5">
                            {/* name  */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <div className=" flex items-center">
                                            <FormLabel className=" w-1/5">Name :</FormLabel>
                                            <FormControl className=" w-4/5">
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* email  */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <div className=" flex items-center">
                                            <FormLabel className=" w-1/5">Email :</FormLabel>
                                            <FormControl className=" w-4/5">
                                                <Input placeholder="example@gmail.com" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <div className="flex items-center">
                                            <FormLabel className="w-1/5">Password :</FormLabel>
                                            <FormControl className=" w-4/5">
                                                <Input {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* confirm password  */}
                            <FormField
                                control={form.control}
                                name="confirm-password"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <div className="flex items-center">
                                            <FormLabel className="w-1/5">Confirm Password :</FormLabel>
                                            <FormControl className=" w-4/5">
                                                <Input {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* revenue */}
                            <FormField
                                control={form.control}
                                name="revenue"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <div className="flex items-center">
                                            <FormLabel className="w-1/5">Revenue :</FormLabel>
                                            <FormControl className=" w-4/5">
                                                <Input placeholder="$20,000" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* sales */}
                            <FormField
                                control={form.control}
                                name="sales"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <div className="flex items-center">
                                            <FormLabel className="w-1/5">Total sales :</FormLabel>
                                            <FormControl className=" w-4/5">
                                                <Input placeholder="50" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* status */}
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center">
                                            <FormLabel className="w-1/5">Your Gender :</FormLabel>
                                            <Select onValueChange={field.onChange}>
                                                <FormControl>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select Status" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="draft">Draft</SelectItem>
                                                    <SelectItem value="active">Active</SelectItem>
                                                    <SelectItem value="archived">Archived</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mt-10 text-end text-sm w-full">
                            <Button type="submit" className="w-[13.5rem]">
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card >
    )
}
