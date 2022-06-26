import React from 'react';
import Input from "../../components/Input";

const Login = () => {
  return (
    <div className='container-fluid p-0'>
      <div className="row m-0" style={{height:"89.5vh"}}>
        <div className="col-5 p-0">
          <form className='container bg- h-100 d-flex align-items-center justify-content-center m-0 p-5'>
            <div className="row g-3">
              <div className="col-12">
                <h2 className='m-0 fw-bold'>Welcome to <span className='text-primary fw-bold'>PET</span></h2>
                <p className='m-0 fw-bold'>Don't have an Account? <a href="/signup">Sign Up</a></p>
              </div>
              <div className="col-12">
                <Input type="email" text="Email" placeholder="Enter Email" />
              </div>
              <div className="col-12">
                <Input type="password" text="Password" placeholder="Enter PassWord" />
              </div>
              <div className="col-4">
                <button className="btn btn-primary form-control fw-bold">Login</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-7 p-0">

        </div>
      </div>
    </div>
  )
}

export default Login