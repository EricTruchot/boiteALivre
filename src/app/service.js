import axios from "axios"
import { serializeCache } from "axios-hooks";
// import React, { useEffect, useState } from "react";

  export async function ResultsFetchAuthentification(url) {
    let pokeRetour= "raté";
   await axios.get("192.168.1.200:3030/boite")
        .then((pokemon)=> {
          pokeRetour = pokemon;
      })
        return pokeRetour;
  }


  export async function getServ() {
   await axios.get("192.168.1.200:3030/boite")
        .then((pokemon)=> {
          servRetour = pokemon?.data;
      })
        return JSON.stringify(servRetour);
  }

  export async function postServ() {
    await axios.post('192.168.1.200:3030/boite', { boite: "boite2"});
  }

  export async function deleteServ(id) {
    await axios.delete('192.168.1.200:3030/boite/'+ id);
  }

  export async function getQRCodeElement(table, id) {
    console.log('test');
    const result = await axios.get('192.168.1.200:3030/'+ table); 
    console.log(result);
    return JSON.stringify(result);

    // axios.get('192.168.1.200:3030/boite')
    // .then(res => {
    //     console.log(res);
    //     console.log(res.data)
    // })
    // .catch(error => console.log(error));

  //   await axios.get("192.168.1.200:3030/boite")
  //   .then((pokemon)=> {
  //     servRetour = pokemon?.data;
  // })
  //   return JSON.stringify(servRetour);


  }