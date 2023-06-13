import axios from "axios"
// import React, { useEffect, useState } from "react";

  export async function ResultsFetchAuthentification(url) {
    let pokeRetour= "raté";
   await axios.get("http://localhost:3030/boite")
        // .then((pokemon)=> {
        //     pokeRetour = pokemon?.data?.name;
        //     console.log('name: ', pokeRetour);
        // })
        .then((pokemon)=> {
          pokeRetour = pokemon;
      })
        return pokeRetour;
  }


  export async function getServ() {
   await axios.get("http://localhost:3030/boite")
        .then((pokemon)=> {
          servRetour = pokemon?.data;
      })
        return JSON.stringify(servRetour);
  }

  export async function postServ() {
    const randomId = Math.floor(Math.random() * 100000)
    const result = await axios.post('http://localhost:3030/boite', { id: randomId, boite: "boite2"});
  }

  export async function deleteServ(id) {
    const deleteBoite = await axios.delete('http://localhost:3030/boite/'+ id);
  }