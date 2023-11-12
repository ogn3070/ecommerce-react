import React from 'react'

function Signup() {
  return (
    <div className='signup'>
      <form className='Container p-5'>

        <div className='row'>

          <div className='col-md-6'>
            <label className='form-label'>Firstname:</label>
            <input type='text' className='form-control' />
          </div>

          <div className='col-md-6'>
            <label className='form-label'>Secondname:</label>
            <input type='text' className='form-control' />
          </div>

          <div className='col-md-6'>
            <label className='form-label'>Email:</label>
            <input type='email' className='form-control' />
          </div>

          <div className='col-md-6'>
            <label className='form-label'>Password:</label>
            <input type='password' className='form-control' />
          </div>

          <button type='submit' className='btn btn-md btn-dark m-4 '>Signup</button>
        </div>
      </form>

    </div>
  )
}

export default Signup