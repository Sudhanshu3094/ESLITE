import { formToJSON } from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const onSubmitHandler = async (event) => {
    event.preventDefault()//when we submit the form it will not reload the webpage
  }


  return (
    <form className='min-h-[80vh] flex items-center' action="">
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-zinc-200 rounded-xl text-zinc-600 text-sm shadow-lg '>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Sign Up" : "Login"} to Book meetings</p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full mt-1' type="email" onChange={(e) => setEmail(e.target.name)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full mt-1' type="password" onChange={(e) => setPassword(e.target.name)} value={password} required />
        </div>
        <button className='bg-neutral-300 text-zinc-700 w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up" ? <p>Already have an Account? <span onClick={() => setState('Login')} className='text-red-700 underline cursor-pointer'>Login here</span></p>
            : <p>Create a new Account? <span onClick={() => setState('Sign Up')} className='text-red-700 underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
