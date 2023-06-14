import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getUserById, handleTable } from './service';
import { retrieveData, storeData } from './localstorageUser';
import { Link } from 'expo-router';

export default function App()  {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();

    if (retrieveData('isLoggedIn')) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const table = data.split('/')[2]
    handleTable(table);
    setIsLoggedIn(true);

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      
      { isLoggedIn ? (
        <Link href="/map" style={styles.subtitle}>Want to see the map ?</Link>
      ) : (
        <Text>Vous devez être connecté pour avoir accès à la map</Text>
      )}

      { isLoggedIn &&
        <Link href="/spot" style={styles.subtitle}>Scan la boite</Link>
      }
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: 400, width: 400 }}
        />
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
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
})