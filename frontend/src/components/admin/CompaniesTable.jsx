import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

function CompaniesTable() {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader className='bg-gray-100'>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
                        </Avatar>
                    </TableCell>
                    <TableCell> Company Name </TableCell>
                    <TableCell> 18-04-2025 </TableCell>
                    <TableCell className='text-right'>
                        <Popover>
                            <PopoverTrigger>
                                <MoreHorizontal className='cursor-pointer'/>
                            </PopoverTrigger>
                            <PopoverContent className="w-25 bg-white">
                                <div className='flex item-center gap-2 w-fit cursor-pointer'>
                                    <Edit2 className='w-4'/>
                                    <span>Edit</span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable
