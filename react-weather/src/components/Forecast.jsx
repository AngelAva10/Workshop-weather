import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import { Grid, CircularProgress } from "@mui/material";
import { Form } from "./Form";

export const Forecast = () => {
   const [search, setSearch] = useState('Asuncion')
   const [state, setState] =  useState()
   const handleSearch = (e) => { 
    e.preventDefault()
    console.log(e.target.city.value)

        setSearch(e.target.city.value)

   }
 /* useEffect(() => {
    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eb0b28dc1984d2f0f78c1f7488f24e60&units=metric`) 
        .then((response) => response.json())
        .then((data) => {
            const {main, weather, wind} = data
            const {description} = weather[0]
            const {speed} = wind

            setState({...main, description, speed})
           
        })
        
        .catch((error) => (console.error(error)))
    }
    fetchData()
  }, [search])
*/
  useEffect(() => {
    const fetchData = async() => {
        try{
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eb0b28dc1984d2f0f78c1f7488f24e60&units=metric`) 
       const data = await response.json()
       const {main, weather, wind} = data
       const {description} = weather[0]
       const {speed} = wind

       setState({...main, description, speed})
        }
        catch(error) {
            console.error(error)
        }

    }
    fetchData()
  }, [search])

  console.log(search)
  if (!state) return <CircularProgress />
    return (
    <div> 
        <Form handleOnChange={handleSearch} />
        <Grid container spacing={2}>
  <Grid xs={8}>
    <DataCard title={state.description} subtitle={state.temp}/>
  </Grid>
  <Grid xs={4}>
  <DataCard title="Humidity" subtitle={state.humidity}/>
  </Grid>
  <Grid xs={4}>
  <DataCard title="Wind" subtitle={state.speed}/>
  </Grid>
  <Grid xs={8}>
  <DataCard/>
  </Grid>
</Grid>
    </div>
  )
}
