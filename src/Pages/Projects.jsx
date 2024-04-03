import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
      <h2 className='text-center m-5'>
        All Projects
      </h2>
      <input type="text" style={{width:'300px'}} placeholder='Search By Technology' className='form-control mx-auto m-5' />
      <div className="row">
        <div className="col">
        <ProjectCard/>
        </div>
      </div>
    </div>
  )
}

export default Projects