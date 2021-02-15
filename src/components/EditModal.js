import React, {useState} from 'react'
import Modal from 'react-modal'
import '../css/styles.css'

export const EditModal = props => {

    console.log(props)

    return (
        <div className="modalDiv">
            <Modal isOpen={true} onRequestClose={props.onCloseButtonClick} id="editModal" style={{
                content: {
                    textAlign:"center"
                }
                }}>
                <div>
                    <h2>Edit</h2>
                    <form>
                        <div>
                            <label>Team ID</label>
                            <input type='text' value={props.data[0].teamId} disabled/>
                        </div>
                        <div>
                            <label>Team Name</label>
                            <input type='text' defaultValue={props.data[0].teamName}/>
                        </div>
                        <div>
                            <label>Manager Name</label>
                            <input type='text' defaultValue={props.data[0].managerName}/>
                        </div>
                        <div>
                            <label>Team Nickname</label>
                            <input type='text' defaultValue={props.data[0].teamNickname}/>
                        </div>
                        <div>
                            <button id="saveBtn">
                                Save
                            </button>
                        </div>
                    </form>
                    {/* {props.scores.map(data => { return (<p key={data.gameWeek}> Gameweek {data.gameWeek} : {data.points} points</p>)})} */}
                </div>
                <div>
                    <button title="Close" onClick={props.onCloseButtonClick} id="closeModal"><i className="fa fa-close"></i>
                    </button>
                </div>
            </Modal> 
        </div>
    )
}
