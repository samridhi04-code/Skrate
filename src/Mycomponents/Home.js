import React, { useEffect, useState } from 'react';
import Topnavbar from "./Topnavbar";
import Sidenavbar from "./Sidenavbar";
import {
  Boxfirst
} from "./Boxfirst";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState({});
    const URL = "https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818";
  
    useEffect(() => {
      axios.get(`${URL}`)
      .then((res) => {
          setData(res.data);
      })
      .catch((err) => {
          console.log("Error", err);
      })
  }, [])
    
    return (
        <>
            <Topnavbar fullName={data.full_name} />
            <Sidenavbar />
            <Boxfirst fetchedData={data} />
        </>
    )
}

export default Home;