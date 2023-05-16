import { Link } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>#contact</Text>
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
