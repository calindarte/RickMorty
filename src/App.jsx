import {  Container, Grid, ListItem, Typography } from "@mui/material";
import Character from "./assets/components/Character";
import CharacterSkeleton from "./assets/components/CharacterSkeleton";
import { useEffect, useState } from "react";

const fakePromise = ()=> new Promise((resolve)=> setTimeout(resolve,2000));

export default function App() {


  const [characters,setCharacters]=useState([])
  const [loading,setLoading]= useState(true)

  useEffect(()=>{
    getData()
  },[])

  const getData = async()=> {
    try {
      await fakePromise()
     const res = await fetch('https://rickandmortyapi.com/api/character')
     const data = await res.json()
     setCharacters(data.results)
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
  return(
    <Container maxWidth='md'>
      <Typography variant="h3" textAlign='center' mb={3}>Rick and Morty</Typography>
      <Grid container spacing={{ md: 4 }} columns={{ sm: 4, md: 12 }} >
      {
        loading? Array.from(new Array(6)).map((_,index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ListItem key={index}>
            <CharacterSkeleton/>
            </ListItem>
          </Grid>
        ))
      :characters.map((character)=>(
        <Grid item xs={2} sm={4} md={4} key={character.id}>

       <ListItem key={character.id}> <Character
        
        name={character.name}
        image={character.image}
        /> </ListItem></Grid>
      ))
      }
      
      </Grid>
    </Container>
  )
}