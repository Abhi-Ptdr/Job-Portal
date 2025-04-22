import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

// to give a diff color background according to status of application
const statusColorMap = {
    rejected: 'bg-red-700',
    accepted: 'bg-green-700',
    pending: 'bg-gray-500',
};

function AppliedJobTable() {
    const { allAppliedJobs } = useSelector(store => store.job);
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader className='bg-gray-200'>
                    <TableRow>
                        <TableHead className="">Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='border-b'>
                    {
                        allAppliedJobs.length <= 0 ? <span>You haven't applied to any job yet.</span> : allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>{appliedJob?.createdAt.split('T')[0]}</TableCell>
                                <TableCell>{appliedJob?.job?.title}</TableCell>
                                <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                                <TableCell className="text-right">
                                    <Badge
                                        className={`${statusColorMap[appliedJob?.status]} text-white rounded-full pb-1 w-18`}
                                    >
                                        {appliedJob?.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </div>
    )
}

export default AppliedJobTable
