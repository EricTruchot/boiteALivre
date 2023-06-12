import axios from "axios"
// import React, { useEffect, useState } from "react";

  export async function ResultsFetchAuthentification(url) {
    let pokeRetour= "raté";
    console.log('poké: ', url);
   await axios.get(url)
        .then((pokemon)=> {
            pokeRetour = pokemon?.data?.name;
            console.log('name: ', pokeRetour);
        })
        return await pokeRetour;
  }