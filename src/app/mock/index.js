import { StyleSheet, Text, View, Button } from "react-native";
import { postServ, getServ, deleteServ } from "../service";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [servTest, setServTest] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = await getServ();
    const parse = await JSON.parse(result);
    setServTest(parse);
  }
  function removeItem(id) {
    setServTest(prev => prev.filter((el) => el.id !== id)); // filter by id
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>MOCK</Text>
        {servTest.map((line) => (
          <View key={line?.id}>
            <Text style={styles.title}>
              id: {line?.id}
              boite: {line?.boite}
            </Text>
            <Button
              title={"delete"}
              onPress={() => {
                deleteServ(line?.id);
                removeItem(line?.id);
              }}
            />
          </View>
        ))}
        <Button //TODO le 1er clique marche pas?
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
