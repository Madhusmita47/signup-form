import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
      const [username, setUsername] = useState("")

      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      const handleSubmit = async (e) => {

            e.preventDefault()
            const server = "http://localhost:4000/signup"
            const options = {
                  header: {
                        "content type": "multipart/form-data"
                  }
            }
            await axios.post(server, { username, email, password }, options)
                  .then((res) => {

                        alert("Account created successfully..!")
                        setUsername("")
                        setEmail("")
                        setPassword("")


                  }
                  )
                  .catch((err) => {
                        alert(err)
                        setUsername("")
                        setEmail("")
                        setPassword("")
                  })
      }

      return (
            <>
                  <div className="container">
                        <form onSubmit={handleSubmit}>


                              <div className='signup'>
                                    <div style={{ marginBottom: "40px" }}><h2> SignUp form</h2></div>
                                    <label htmlFor='user'>User Name</label>&nbsp;&nbsp;
                                    <input id='user' required type="text" placeholder='Enter user Name' size="25"
                                          value={username} onChange={e => setUsername(e.target.value)} />
                                    <br></br>  <br></br>
                                    <label htmlFor='email'>Email</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input id='email' required type="email" placeholder='madhu@23gmail.com' size="25"
                                          value={email} onChange={e => setEmail(e.target.value)} />
                                    <br />     <br />
                                    <label htmlFor='password'>Password</label>&nbsp;&nbsp;&nbsp;
                                    <input id='password' required type="password" placeholder='Enter your passsword' size="25"
                                          value={password} onChange={e => setPassword(e.target.value)} />
                                    <br />  <br />
                                    <button type="submit" >SignUp</button>
                                    <p> Already a user ?  login here  <Link to={"/login"}>
                                          <button> login </button>
                                    </Link></p>


                              </div>
                        </form>

                  </div>

            </>

      )
}

export default Signup
