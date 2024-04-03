import React from 'react'
import AddProject from './AddProject'
import { FaGithub } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
function MyProject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='ms-5 mt-5'>My Project</h3>
            <AddProject/>
        </div>
        <div className="row shadow m-5 p-5 border rounded-2">
            <div className="col-6 ">
                <h4>Project title</h4>
            </div>
            <div className="col-6 mt-5 d-flex justify-content-evenly">
                <button className='btn btn-dark'><FaGithub /></button>
                <button className='btn btn-dark'><CiEdit /></button>
                <button className='btn btn-dark'><MdDelete /></button>
            </div>
        </div>
    </div>
  )
}

export default MyProject