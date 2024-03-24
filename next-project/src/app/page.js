'use client'
import React, { useState } from 'react';
// components
import Table from "@/app/components/table";
// JSON
import jsonData from '../../json/baseballgame.json';

export default function Home() {

    const [ tableHead, setTableHead ] = useState(
        [
            {
                "text": 'Team',
                "style": ''
            },
            {
                "text": 'Day',
                "style": ''
            },
            {
                "text": 'Time',
                "style": 'text-center'
            },
            {
                "text": 'Hall',
                "style": ''
            },
        ]
    )

    return (
        <>
            <div className="container mx-auto p-5">
                <Table
                    dataHead={tableHead}
                    dataList={jsonData}
                />
            </div>
        </>
    );
}
