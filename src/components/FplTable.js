import React from 'react'
import { COLUMNS } from './columns'


export const FplTable = () => {
    const tableHeader = () => {
        const headerItems = COLUMNS

        return headerItems.map((key, index) => {
            return <th key={index}>{key.Header}</th>
        })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {tableHeader()}
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
