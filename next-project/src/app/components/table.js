import React, { useEffect, useState } from "react";

import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

import Chip from "./chip";

export default function Table(props) {
    const {
        dataHead,
        dataList
    } = props

    const TableHead = () => {
        if(dataHead && dataHead.length > 0){
            return (
                <>
                    <thead className="text-sm">
                        <tr className="h-9 display-max  border-b border-a-black-111827">
                            {dataHead.map((item, index) => (
                                <th key={index} className={`${item.style} font-extrabold`}>
                                    {item.text}
                                </th>
                            ))}
                        </tr>
                        <tr className="h-9 display-min border-b border-a-black-111827">
                            {dataHead.map((item, index) => (
                                index > 0
                                ? (
                                    <th key={index} className={`s-1440:${item.style} font-extrabold`}>{item.text}</th>
                                )
                                : ('')
                            ))}
                        </tr>
                    </thead>
                </>
            )
        }
        else {
            return ('')
        }
    }

    const Child = ({index, item}) => {
        return (
            <>
                {
                    item.Child.map((child, indexChild) => (
                        indexChild > 0 ? (
                            <tr key={indexChild} className={`text-sm ${index % 2 === 0 ? 'bg-a-gray-E5E7EB' : 'bg-a-gray-F3F4F6'}`}>
                                <td >
                                    {child.Day}
                                </td>
                                <td className="flex s-1440:justify-center items-center gap-4">
                                    <Chip data={child.StartTime} />
                                    <span> - </span>
                                    <Chip data={child.EndTime} />
                                </td>
                                <td>
                                    {child.Hall}
                                </td>
                            </tr>
                        ) : ('')
                    ))
                }
            </>
        )
    }

    const TableBody = () => {
        if(dataList && dataList.length > 0) {
            return (
                <>
                    {dataList.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className={`
                                ${`h-[34px] display-min text-base font-bold ${index % 2 === 0 ? 'bg-a-gray-E5E7EB' : 'bg-a-gray-F3F4F6'}`}
                                ${epilogue.className}`}
                            >
                                <td rowSpan={item.Child.length == 1 ? item.Child.length : item.Child.length - 1} colSpan={3}>
                                    {item.Team}
                                </td>
                            </tr>
                            <tr className={`h-[34px] font-medium text-sm
                                ${index % 2 === 0 ? 'bg-a-gray-E5E7EB' : 'bg-a-gray-F3F4F6'}
                                ${item.Child.length > 1 ? 'border-b border-a-gray-D6D9DF' : ''}`}
                            >
                                <td rowSpan={item.Child.length} className="display-max font-bold">
                                    {item.Team}
                                </td>
                                <td>
                                    {item.Child[0].Day}
                                </td>
                                <td className={`flex s-1440:justify-center items-center gap-4`}>
                                    <Chip data={item.Child[0].StartTime} />
                                    <span> - </span>
                                    <Chip data={item.Child[0].EndTime} />
                                </td>
                                <td>
                                    {item.Child[0].Hall}
                                </td>
                            </tr>
                            <Child index={index} item={item} />
                        </React.Fragment>
                    ))}
                </>
            )
        }else {
            return ('')
        }
    }

    return (
        <>
            <table className="w-full text-a-black-1F2937 border-collapse">
                <TableHead />
                <tbody className="">
                    <TableBody />
                </tbody>
            </table>
        </>
    )
}
