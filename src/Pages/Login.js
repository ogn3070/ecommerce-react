import React from 'react'

function Login() {

  function handleSubmit(e){
    e.preventDefault();
    let form = new FormData(e.currentTarget)

    alert(form.get("email"))
    alert(form.get("password"))

  }
  return (
    <div className='signup'>
      <form onSubmit={(e) => handleSubmit(e) } className='Container'>

        <div className='row'>

          <div className='col-md-6'>
            <label className='form-label'>Email:</label>
            <input name='email' type='email' className='form-control' />
          </div>

          <div className='col-md-6'>
            <label className='form-label'>Password:</label>
            <input name='password' type='password' className='form-control' />
          </div>

          <button type='submit' className='btn btn-md w-100 btn-dark mt-4'>Signup</button>
        </div>
      </form>

    </div>
  )
}

export default Login