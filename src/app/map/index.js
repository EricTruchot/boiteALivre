import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import Map from '../../components/Map';
import { StyleSheet } from "react-native";
import { handleTable } from '../service';
import { Link } from 'expo-router';

export default function IndexMap()  {
    
  const [markers, setMarkers] = useState({});

  useEffect(() => {
    (async () => {
        await getAllSpots()
      })();
    }, []);

    async function getAllSpots() {
        const allSpots = await handleTable("spots");
        setMarkers(allSpots);
    }

  return (
    <SafeAreaView style={styles.container}>
        <Map markers={markers} />
        
        <Link href="/spot" style={styles.subtitle}>Scan un spot</Link>
    </SafeAreaView>
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
      subtitle: {
        fontSize: 36,
        color: "#38434D",
      },
})