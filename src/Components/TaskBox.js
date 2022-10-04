import React, { useEffect } from 'react'
import { useState } from 'react';
import CommonContext from './CommonContext'

function TaskBox(props) {
    const { id, detail: { taskTitle, taskDescription, taskDate } } = props;
    const [checkBoxValue, setCheckBoxValue] = useState(true);

    useEffect(() => {
        let taskContainer = document.querySelectorAll("div[data-taskcontainer='dt']")[id];
        let dateContainer = document.querySelectorAll("h5[data-date='date']")[id];
        if (dateContainer.innerHTML === 'Due date is Passed.') {
            taskContainer.classList.remove('border-primary');
            taskContainer.classList.add('border-warning');
        }
    }, [])

    function checkDueDate(date) {
        let taskDate = new Date(date);
        let presentDate = new Date();

        let year = taskDate.getFullYear() - presentDate.getFullYear();
        let month = taskDate.getMonth() - presentDate.getMonth();
        let testDate = taskDate.getDate() - presentDate.getDate();

        if (year <= 0 && month <= 0 && testDate < 0) return 'Due date is Passed.';

        return `${taskDate.getDate()}/${taskDate.getMonth() + 1}/${taskDate.getFullYear()}`;
    }

    function checkCheckBox(e) {
        setCheckBoxValue(!checkBoxValue);
        let styleTitle = document.querySelectorAll("strong[data-title='title']")[id].style;
        let styleDescription = document.querySelectorAll('p[data-description="desc"]')[id].style;

        // e.target.checked instead of checkBoxValue
        if (checkBoxValue) {
            styleTitle.textDecoration = 'line-through';
            styleDescription.textDecoration = 'line-through';
        } else {
            styleTitle.textDecoration = 'none';
            styleDescription.textDecoration = 'none';
        }
    }

    return (
        <>
            <CommonContext.Consumer>
                {({ setListOfTask, listOfTask }) =>
                    <div data-taskcontainer='dt' className="container p-2 rounded mb-3 border border-primary ">
                        {console.log(listOfTask)}
                        <div className="row">
                            <div className="col-md-1 d-flex justify-content-center align-items-center">
                                <input className="form-check-input m-1" type="checkbox" onChange={(e) => checkCheckBox(e)} />
                            </div>
                            <div className="col-md-1 text-center my-auto">
                                <h4 className='m-0'>{id + 1}.</h4>
                            </div>
                            <div className="col-md-6 my-auto">
                                <h4 className='mb-1'>
                                    {/* <div>
                                        <span style={{}}> */}
                                            <strong data-title='title' >
                                                {taskTitle}
                                            </strong>
                                        {/* </span>
                                    </div> */}
                                </h4>
                                <p data-description='desc' className='m-0'>
                                    {taskDescription}
                                </p>
                            </div>
                            <div className="col-md-2 my-auto">
                                <h5 data-date='date' className='m-0 text-center'>{checkDueDate(taskDate)}</h5>
                            </div>
                            <div className="col-md-2 my-auto">
                                <button className='btn btn-primary w-100' onClick={() => { setListOfTask([...listOfTask.slice(0, id), ...listOfTask.slice(id + 1)]) }}>Delete</button>
                            </div>
                        </div>
                    </div>
                }
            </CommonContext.Consumer>
        </>
    )
}

export default TaskBox
