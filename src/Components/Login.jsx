import React,{useState} from 'react'
import './login.css'
import {Link} from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    const server = "http://localhost:4000/login"
    const options={header:{"content-type":"multipart/form-data"}}
    await axios.post(server, { email, password }, options)
    .then(res => {
      alert("login successfull")
      setEmail("")
      setPassword("")
    })
    .catch((err)=>{
      alert(err)
        setEmail("");
        setPassword("");
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="login">
        <div className="content">
          <div className="title">
            <h2>LogIn</h2>
          </div>

          <div className="a">
            <div className="e">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required placeholder="Enter your email" value={email}
                onChange={ e => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="a">
            <div className="p">
              <label htmlFor='password'>Password</label>
              <input id="password"
                type="password"
                required
                placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="a">
            <div className="b">
              <button type="submit">Login</button>
            </div>
          </div>
          <div className="submit">
            Don't have an account yet ? &nbsp;
            <Link to={'/signup'}>
              <button type="button"> SignUp</button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login
