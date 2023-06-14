import axios from "axios"
// import React, { useEffect, useState } from "react";

  export async function ResultsFetchAuthentification(url) {
    let pokeRetour= "raté";
   await axios.get("http://localhost:3030/boite")
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
    await axios.post('http://localhost:3030/boite', { boite: "boite2"});
  }

  export async function deleteServ(id) {
    await axios.delete('http://localhost:3030/boite/'+ id);
  }