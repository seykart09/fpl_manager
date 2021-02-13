import React, {useState} from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import '../css/styles.css'
import HandleMangers from './HandleMangers'


export const FplTable = () => {
    const API_DATA = MOCK_DATA
    const API = 'https://api.github.com/users/hacktivist123/repos';

    const [info, setInfo] = useState(API_DATA)
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)

    // componentDidMount() {
    //     fetch(API)
    //       .then((response) => response.json())
    //       .then((data) => console.log('This is your data', data));
    // }

    const tableHeader = () => {
        const headerItems = COLUMNS
        return headerItems.map((key, index) => {
            return <th key={index}>{key.Header}</th>
        })
    }

    const tableBody = () => {
        return info.map(data =>  {
            let score = 0;
            data.points.forEach(element => score += element.points)
            data.sum = score
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
                        <button className='button' title="Delete" onClick={() => removeData(data.teamId)}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }

    const removeData = (id) => {
        console.log(id)
        const find = info.filter(data => id == data.teamId)
        console.log(find)
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
            <button className='manager_btn' onClick={onClick}>Add Manager</button>
            { showResults ? <HandleMangers/> : null }
            
        </div>
    )
}
