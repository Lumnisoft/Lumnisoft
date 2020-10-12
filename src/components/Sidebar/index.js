import React from 'react'
import { 
  
  Link
} from "react-router-dom"
const Sidebar = () => {


  return (
    <>
      <Link to="/">Home</Link>

      <Link to="/problem">Problem solver</Link>
    </>
  );
}

export default Sidebar