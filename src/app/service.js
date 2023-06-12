import axios from "axios"
import React, { useEffect, useState } from "react";

  export function ResultsFetchAuthentification(url) {
    
    console.log('poké: ', url);
    axios.get(url)
        .then((pokemon)=> {
            const pokeRetour = pokemon?.data?.name;
            console.log('name: ', pokemon?.data?.name);
            return pokeRetour;
        })
  }