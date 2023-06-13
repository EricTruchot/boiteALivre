import { Link } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";
import { postServ, testServ } from "../service";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [servTest, setServTest] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = await testServ();
    const parse = await JSON.parse(result);
    setServTest(parse);
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>MOCK</Text>
        {servTest.map((line) => (
          <Text key={line?.id} style={styles.title}>
            id: {line?.id}
            boite: {line?.boite}
          </Text>
        ))}
        <Button
          title={"ajout"}
          onPress={() => {
            postServ();
            getData();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
    backgroundColor: "black",
  },
  //   main: {
  //     flex: 1,
  //     justifyContent: "center",
  //     // maxWidth: 960,
  //     margin: 0,
  //     backgroundColor: "black",
  //     width: 100,

  //   },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
