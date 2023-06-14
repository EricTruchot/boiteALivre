import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import Map from '../../components/Map';
import { StyleSheet } from "react-native";
import { handleTable } from '../service';

export default function IndexMap()  {
    
  const [markers, setMarkers] = useState({});

  useEffect(() => {
    (async () => {
        await getAllSpots()
      })();
    }, []);
    console.log(markers)

    async function getAllSpots() {
        const allSpots = await handleTable("spots");
        setMarkers(allSpots);
    }

  return (
    <SafeAreaView style={styles.container}>
        <Map markers={markers} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})