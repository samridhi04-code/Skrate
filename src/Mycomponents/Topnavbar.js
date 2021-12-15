import React from 'react'

export default function Topnavbar({name}) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-link">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <b> Skrate </b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <div className="nav-item"> <a> <img style={{borderRadius:"100%", height:"40px", width:"40px",position:"absolute",right:"9%", top:"14%"}} src="https://wallpapercave.com/wp/g7TrhkK.jpg"/> <span style={{position:"absolute",right:"1%", top:"25%",fontStyle:"bold !important"}}>{name} </span> </a> </div>
          </div>
        </div>
      </nav>
    )
}
