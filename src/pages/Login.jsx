import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <a href="https://52.78.177.198:8080/oauth2/authorization/seoul42 ">
        <button style={{ padding: '1em' }}>로그인</button>
      </a>
      <Link to="/project">
        <button>project</button>
      </Link>
      <button>cadet</button>
    </>
  )
}

export default Login
