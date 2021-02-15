import React, {useState} from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import '../css/styles.css'
import HandleMangers from './HandleMangers'
import { OverviewModal } from './OverviewModal'
import { EditModal } from './EditModal'


export const FplTable = () => {
    const API_DATA = MOCK_DATA
    const API = 'https://run.mocky.io/v3/a8f4f5d6-3b59-4a55-893f-007d145b2f80';

    const [info, setInfo] = useState(API_DATA)
    const [showAddUI, setshowAddUI] = useState(false)
    const [currentlySelected, setCurrentlySelected] = useState(null)
    const [dataSelected, setDataSelected] = useState(null)
    const onClick = () => setshowAddUI(!showAddUI)

    const componentDidMount = () => {
        fetch(API)
          .then((response) => response.json())
          .then((data) => console.log('This is your data', data));
    }

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
                        <button className='actions' title="Overview" onClick={() => overviewData(data.teamId)}><i className="fa fa-ellipsis-v"></i></button>
                        <button className='edit' title="Edit" onClick={() => editData(data.teamId)}><i className="fa fa-edit"></i></button>
                        <button className='button' title="Delete" onClick={() => removeData(data.teamId)}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }

    const removeData = (id) => {
        const find = info.filter(data => id !== data.teamId)
        setInfo(find)
    }

    const overviewData = (id) => {
        const find = info.filter(data => id == data.teamId)
        setCurrentlySelected(find[0].points)
    }

    const editData = (id) => {
        const find = info.filter(data => id == data.teamId)
        console.log(find)
        setDataSelected(find)
    }

    const generateID = () => {
        const min = 1
        const max = 10000000
        const rand = Math.floor(Math.random()*(max-min+1)+min)

        console.log(rand)
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
            { showAddUI ? <HandleMangers/> : null }
            { currentlySelected == null ? null : <OverviewModal onCloseButtonClick={() => setCurrentlySelected(null)} scores={currentlySelected}/>}
            { dataSelected == null ? null : <EditModal onCloseButtonClick={() => setDataSelected(null)} data={dataSelected}/>}
            {/* <EditModal/> */}
        </div>
    )
}
