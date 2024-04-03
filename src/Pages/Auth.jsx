import React from 'react'
import { Link } from 'react-router-dom'


function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <img src="https://www.east2global.com/static/images/sign-1.webp" className='p-4 mt-3'  width={'500px'} height={'400px'} alt="" />
        </div>
        <div className="col-lg-6 p-4">
          <form className='shadow bg-black m-3'> 
            <h2 className='text-center m-5'>Project Fair</h2>
            <h4>
            {
              register? 'Register' : 'Login'
            }
            </h4>
            <div className='m-2'>
              {
                register && 
                <input type="text" placeholder='Username' className='form-control mb-2' />
              }
              <input type="text" placeholder='email' className='form-control mb-2' />
              <input type="text" placeholder='passwoord' className='form-control mb-2' />
            </div>

            <div>
              {
                register?
                <div className='text-center m-4'>
                  <button className='btn btn-dark m-4'>Register</button>
                  <p>Already registred?<Link to={'/login'}>Login here...</Link></p>
                </div>
                :
                <div className='text-center m-4'>
                  <button className='btn btn-dark m-4'>Login</button>
                  <p>New to here?<Link to={'/register'}>Register here...</Link></p>
                </div>
              }
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth