import React, { Component } from 'react'
import '../css/styles.css'


class HandleMangers extends Component {
    render() {
        return (
            <form>
                <div>
                    <label>Team Name</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Manager Name</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Team Nickname</label>
                    <input type='text'/>
                </div>
                <div>
                    <button id="saveBtn">
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

export default HandleMangers
