"use client";

import {
    File,
    ListFilter,
    MoreHorizontal,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useRouter } from "next/navigation";


export default function TableComponent() {

    const router = useRouter();

    const handleEditClick = () => {
        router.push(`/form/`)
    }

    const handleDeleteClick = () => {
        Swal.fire({
            title: 'Warning!',
            text: 'Are you sure ?',
            icon: 'warning',
            confirmButtonText: 'Yes'
        })
    }

    return (
        <div className="flex min-h-screen w-full flex-col ">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="draft">Draft</TabsTrigger>
                                <TabsTrigger value="archived" className="hidden sm:flex">
                                    Archived
                                </TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm" className="h-8 gap-1">
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Filter
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            Active
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Archived
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button size="sm" variant="outline" className="h-8 gap-1">
                                    <File className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Export
                                    </span>
                                </Button>

                            </div>
                        </div>
                        <TabsContent value="all">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Users</CardTitle>
                                    <CardDescription>
                                        All users data in one Table
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Revenue
                                                </TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Total Sales
                                                </TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Created at
                                                </TableHead>
                                                <TableHead>
                                                    <span className="sr-only">Actions</span>
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    John Doe
                                                    <div className="font-sm text-gray-400">(johndoe@gmail.com)</div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">Draft</Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    $499.99
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    25
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-07-12 10:42 AM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button
                                                                aria-haspopup="true"
                                                                size="icon"
                                                                variant="ghost"
                                                            >
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem
                                                                onClick={handleEditClick}>
                                                                Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                onClick={handleDeleteClick}>
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    Jacod muler
                                                    <div className="font-sm text-gray-400">(jaocobMuller@gmail.com)</div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">Active</Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    $129.99
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    100
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-10-18 03:21 PM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button
                                                                aria-haspopup="true"
                                                                size="icon"
                                                                variant="ghost"
                                                            >
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem
                                                                onClick={handleEditClick}>
                                                                Edit
                                                            </DropdownMenuItem>
                                                            onClick={handleDeleteClick}
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    Anna Frank
                                                    <div className="font-sm text-gray-400">(annafrank@gmail.com)</div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">Active</Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    $39.99
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    50
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-11-29 08:15 AM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button
                                                                aria-haspopup="true"
                                                                size="icon"
                                                                variant="ghost"
                                                            >
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem
                                                                onClick={handleEditClick}>
                                                                Edit
                                                            </DropdownMenuItem>
                                                            onClick={handleDeleteClick}
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    Morrie Swartz
                                                    <div className="font-sm text-gray-400">(morrie@gmail.com)</div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">Draft</Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    $2.99
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    0
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-12-25 11:59 PM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button
                                                                aria-haspopup="true"
                                                                size="icon"
                                                                variant="ghost"
                                                            >
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem
                                                                onClick={handleEditClick}>
                                                                Edit
                                                            </DropdownMenuItem>
                                                            onClick={handleDeleteClick}
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground">
                                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                        users
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}
