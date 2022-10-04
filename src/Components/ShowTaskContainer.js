import React from 'react'
import TableRow from './TableRow'
import { useSelector } from 'react-redux';


function ShowTaskContainer() {
  const userList = useSelector((state) => state.userData);
  return (
    <>
      <div className="container p-3">
        <h1 className='text-center mb-3'><u>List of Task</u></h1>
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S. No.</th>
              <th scope="col">User</th>
              <th scope="col">Current Date</th>
              <th scope="col">Status</th>
              <th scope="col">Change Status</th>
              <th scope="col">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item, ind) => <TableRow key={ind} id={ind} data={item} />)}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default ShowTaskContainer;
