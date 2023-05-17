import axios from "axios"
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import useAxios from 'axios-hooks';

export default function Results() {
    const [pokemons, setPokemon] = useState(null);
    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon/1")
        .then((pokemon)=> {
            setPokemon(pokemon.data);
        })
    },[])
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>{pokemons?.name}</Text>
        </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
  });