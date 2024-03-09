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
                    <thead className="font-extrabold">
                        <tr className="display-max border-b border-a-black-111827">
                            {dataHead.map((item, index) => (
                                <th key={index} className={item.style}>
                                    {item.text}
                                </th>
                            ))}
                        </tr>
                        <tr className="display-min border-b border-a-black-111827">
                            {dataHead.map((item, index) => (
                                index > 0
                                ? (
                                    <th key={index} className={item.style}>{item.text}</th>
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
                            <tr key={indexChild} className={index % 2 === 0 ? 'bg-a-gray-E5E7EB' : 'bg-a-gray-F3F4F6'}>
                                <td>
                                    {child.Day}
                                </td>
                                <td className="flex justify-center items-center gap-4">
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
                                ${index % 2 === 0 ? 'display-min bg-a-gray-E5E7EB' : 'display-min bg-a-gray-F3F4F6'}
                                ${epilogue.className}`}
                            >
                                <td rowSpan={item.Child.length == 1 ? item.Child.length : item.Child.length - 1} colSpan={3} className="font-bold">
                                    {item.Team}
                                </td>
                            </tr>
                            <tr className={index % 2 === 0 ? 'bg-a-gray-E5E7EB' : 'bg-a-gray-F3F4F6'}>
                                <td rowSpan={item.Child.length} className="display-max font-bold">
                                    {item.Team}
                                </td>
                                <td className={item.Child.length > 1 ? 'border-b border-a-gray-D6D9DF' : ''}>
                                    {item.Child[0].Day}
                                </td>
                                <td className={item.Child.length > 1 ? 'flex justify-center items-center gap-4 border-b border-a-gray-D6D9DF' : 'flex justify-center items-center gap-4'}>
                                    <Chip data={item.Child[0].StartTime} />
                                    <span> - </span>
                                    <Chip data={item.Child[0].EndTime} />
                                </td>
                                <td className={item.Child.length > 1 ? 'border-b border-a-gray-D6D9DF' : ''}>
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
            <table className="w-full text-a-black-1F2937 text-14 border-collapse">
                <TableHead />
                <tbody className="">
                    <TableBody />
                </tbody>
            </table>
        </>
    )
}
