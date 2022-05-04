import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../contexts/auth"

function Redirect() {
    const { navigate } = useContext(AuthContext);

    useEffect(() => {
        navigate("/")
    }, [])

  return (
    <div></div>
  )
}

export default Redirect