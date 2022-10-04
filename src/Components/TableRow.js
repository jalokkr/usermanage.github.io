import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, changeStatus } from '../DataManagement/DataSlice'
import './TableRow.css'

function TableRow(props) {
    const Dispatch = useDispatch();
    const { id, data: { userName, registerDate, status } } = props;
    return (
        <>
            <tr className={(status) ? 'text-success strike' : 'text-danger'}>
                <th scope="row" >{id + 1}.</th>
                <td>{userName}</td>
                <td>{registerDate}</td>
                <td>{status.toString()}</td>
                <td><button className='btn btn-primary' onClick={() => Dispatch(changeStatus(id))} > Change Status</button></td>
                <td><button className='btn btn-danger' onClick={() => Dispatch(deleteUser(id))}>Delete</button></td>
            </tr>
        </>
    )
}

export default TableRow
