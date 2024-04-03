import React from 'react'
import { Link } from 'react-router-dom'
import programmer from '../assets/programmer.webp'
import ProjectCard from '../Components/ProjectCard'


function Home() {
  return (
    <div>
        <div className="row m-3">
            <div className="col-sm-6">
                <h3 className='text-center'>Project Fair</h3>
                <p style={{textAlign:'justify'}}>
                A project is a series of structured tasks, activities, and deliverables that are carefully executed to achieve a desired outcome. They are temporary efforts to create value through unique products, services and processes.

Each aspect of a project must go through the phases of the project lifecycle before reaching an end goal. This lifecycle allows project managers to execute each phase of their project effectively. It enables them to plan each task and activity meticulously, ensuring the highest chances of a project’s success.
                </p>
                <div className='text-center'>
                    <Link to={'/login'} ><button className='btn btn-dark mt-2 mb-5'>Get Started</button></Link>
                </div>
            </div>
            <div className="col-sm-6"><img src={programmer} width={'550px'} alt="" /></div>
        </div>
        <div className="row">
            <div className="col-12" style={{height:'480px'}}>
                <h3 className='text-center m-5'>Explore Our Project</h3>
                <marquee width="60%" direction="left" height="350px">
                    <div>
                        <ProjectCard/>
                    </div>
                </marquee>
            </div>
        </div>
        <div className="row mx-5 mb-5">
            <h2 className='text-center mb-4'>Our Services</h2>
            <div className="col-md-4">
                <div className='card shadow p-5' style={{height:'550px'}}>
                    <h4 className='text-center m-2 '>Web Designing</h4>
                    <p className='p-2' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facilis similique cumque aliquam inventore voluptatibus numquam aliquid beatae quos distinctio dolore eos error a repellat, molestiae fugit unde mollitia odio.</p>
                </div>
            </div>
            <div className="col-md-4">
            <div className='card shadow p-5' style={{height:'550px'}}>
                    <h4 className='text-center m-2 '>Single Page Application</h4>
                    <p className='p-2' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facilis similique cumque aliquam inventore voluptatibus numquam aliquid beatae quos distinctio dolore eos error a repellat, molestiae fugit unde mollitia odio.</p>
                </div>
            </div>
            <div className="col-md-4">
            <div className='card shadow p-5' style={{height:'550px'}}>
                    <h4 className='text-center m-2 '>Backend Services</h4>
                    <p className='p-2' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facilis similique cumque aliquam inventore voluptatibus numquam aliquid beatae quos distinctio dolore eos error a repellat, molestiae fugit unde mollitia odio.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home