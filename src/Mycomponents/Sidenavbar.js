import React from 'react';
import "./Sidenavbar.css";
import { useLocation } from "react-router-dom";

export default function Sidenavbar() {

    const location = useLocation();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="me col-1 px-2 bg-link position-fixed" id="sticky-sidebar">
                    <div className="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
                        <a href="/" className="nav-link ">
                            <i className={`fa fa-fw fa-home iconee ${location.pathname === "/" && "active"}`} style={{color:"black", fontSize:"35px", margin:"70px 0px 20px 0px" }} ></i>
                        </a>
                        <a href="/item1" className="nav-link"><i className={`fa fa-fw fa-search iconee ${location.pathname === "/item1" && "active"}`} style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} ></i></a>
                        <a href="/item2" className="nav-link"><i className={`fa fa-fw fa-envelope iconee ${location.pathname === "/item2" && "active"}`} style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} ></i></a>
                        <a href="/item3" className="nav-link"><i className={`fa fa-fw fa-user iconee ${location.pathname === "/item3" && "active"}`} style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} ></i></a>
                        <a href="/item4" className="nav-link"><i className={`fa fa-fw fa-th-large iconee ${location.pathname === "/item4" && "active"}`} style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} ></i></a>
                        <a href="/item5" className="nav-link"><i className={`fa fa-fw fa-chart-bar iconee ${location.pathname === "/item5" && "active"}`} style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} ></i></a>
                    </div>
                </div>
            </div>  
        </div>
    )
}
