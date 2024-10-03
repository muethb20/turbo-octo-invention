import { z } from "zod"
import { columns } from "../../ui/columns"
import { DataTable } from "../../ui/data-table"
import { taskSchema } from "@/data/schema.ts";
import * as React from "react";
import {mockdata} from "@/data/mockdata.ts";


function getTasks() {
    return z.array(taskSchema).parse(mockdata)
}

export const TodosPage:React.FC = () =>  {

    return (
        <>
            <h1>Dont get Bougie</h1>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                </div>
                <DataTable data={getTasks()} columns={columns} />
            </div>
        </>
    )
}