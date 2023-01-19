import React, { useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState();

  const APIKey = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=331a54698054b6219871663dccdff33c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(APIKey).then((responce) => {
        setData(responce.data);
        console.log(responce.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="h-screen grid place-items-center bg-gray-800">
      {/* <input
        value={location}
        onChange={event =>setLocation(event.target.value)}
        onKeyDown={searchLocation}
        className="w-96 h-10 rounded-lg mt-10 bg-white/40 font-semibold pl-2 text-white text-2xl ml-[60rem]" 
        placeholder="Enter City ">
       </input> */}
      <div className="flex ">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          className="bg-white p-2 w-64 text-center rounded-l-lg uppercase font-semibold "
          placeholder="Enter Your Location"
        />
        <button className="bg-blue-400 w-10 flex items-center justify-center rounded-r-lg">
          {" "}
          <SearchIcon />
        </button>
      </div>
      <div>
        <div className="text-7xl font-black text-cyan-400 flex">
          <p className="pl-8 pt-12">{data.name} </p>
        </div>
        <div className="text-7xl font-bold text-white">
          <p className="pl-12 pt-8">
            {" "}
            {data.main ? <h1> {data.main.temp}°F</h1> : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
