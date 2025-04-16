import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from './ui/badge'


function AppliedJobTable() {
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1,2,3,4].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>16-04-2025</TableCell>
                                <TableCell>Software Engineer</TableCell>
                                <TableCell>Google</TableCell>
                                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </div>
    )
}

export default AppliedJobTable
