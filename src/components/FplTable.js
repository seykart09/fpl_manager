import React, {useState} from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import '../css/styles.css'


export const FplTable = () => {
    const apiData = MOCK_DATA
    const [info, setInfo] = useState(apiData)
    
    const tableHeader = () => {
        const headerItems = COLUMNS
        return headerItems.map((key, index) => {
            return <th key={index}>{key.Header}</th>
        })
    }

    const addManager = () => {
        
    }

    const tableBody = () => {
        return info.map(data =>  {
            let score = 0;
            data.points.forEach(element => score += element.points)
            data.sum = score
            console.log(data.sum)
            if(data.teamNickname == undefined)
            {
                data.teamNickname ="N/A"
            }
            return (
                <tr key={data.teamId}>
                    <td>{data.teamId}</td>
                    <td>{data.teamName}</td>
                    <td>{data.managerName}</td>
                    {/* "teamNickname" in data? */}
                    <td>{data.teamNickname}</td>
                    {/* <td>N/A</td> */}
                    <td>{data.sum}</td>
                    <td className='opration'>
                        <button className='actions' title="Overview"><i className="fa fa-ellipsis-v"></i></button>
                        <button className='edit' title="Edit"><i className="fa fa-edit"></i></button>
                        <button className='button' title="Delete"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table id='fpl_table'>
                <thead>
                    <tr>
                        {tableHeader()}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody()}
                </tbody>
            </table>
            <button className='manager_btn'>Add Manager</button>
        </div>
    )
}
