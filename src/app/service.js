import axios from "axios"
// import React, { useEffect, useState } from "react";

  export async function ResultsFetchAuthentification(url) {
    let pokeRetour= "raté";
    console.log('poké: ', url);
   await axios.get("http://localhost:3030/boite")
        // .then((pokemon)=> {
        //     pokeRetour = pokemon?.data?.name;
        //     console.log('name: ', pokeRetour);
        // })
        .then((pokemon)=> {
          pokeRetour = pokemon;
          console.log('name: ', pokeRetour);
      })
        return pokeRetour;
  }


  export async function testServ() {
    let servRetour= "raté";
    console.log('servRetour', servRetour);
   await axios.get("http://localhost:3030/boite")
        .then((pokemon)=> {
          servRetour = pokemon?.data;
          console.log('name: ', servRetour);
      })
        return JSON.stringify(servRetour);
  }


  export async function postServ() {
    const randomId = Math.floor(Math.random() * 100000)
    const result = await axios.post('http://localhost:3030/boite', { id: randomId, boite: "boite2"});
    console.log(randomId);

  }