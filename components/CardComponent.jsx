import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign, Users } from 'lucide-react'

const CardComponent = ({ title, content, contentDes }) => {
    return (
        <>
            <Card className=" dark:bg-slate-900 py-3 bg-slate-100 shadow-md dark:shadow-slate-600">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {title}
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{content}</div>
                    <p className="text-xs text-muted-foreground">
                        {contentDes}
                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default CardComponent