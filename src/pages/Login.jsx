import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <a href="http://52.78.177.198:8080/oauth2/authorization/seoul42 ">
        <div>hello</div>
      </a>
      <Link to="/project">
        <button>project</button>
      </Link>
      <button>cadet</button>
    </>
  )
}

export default Login