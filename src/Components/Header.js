import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../DataManagement/DataSlice'

function Header() {
  const Dispatch = useDispatch();
  const length = useSelector((state) => state.userData.length);
  const [usersName, setUsersName] = useState('');
  
  function getCurrentDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
  }

  function addData(e) {
    e.preventDefault();
    let obj = {
      userName: usersName,
      registerDate: getCurrentDate(),
      status: false
    };
    Dispatch(addUser(obj))
    setUsersName('');
  }
  return (
    <>
      <div className="container bg-light text-dark p-3 d-flex justify-content-between">
        <h5>Total Task: {length}</h5>
        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => addData(e)}>
          <input className="form-control mr-sm-2" type="text" placeholder="Add Task here" value={usersName} aria-label="Search" onChange={e => setUsersName(e.target.value)} />
          <button className="btn btn-danger my-2 my-sm-0" type="submit">Add Data</button>
        </form>
      </div>
    </>
  )
}

export default Header
