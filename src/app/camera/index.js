import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Link } from 'expo-router';
import { ResultsFetchAuthentification } from '../service';



export default function App()  {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isValid, setIsValid] = useState(); 
  const [pokemon, setPokemon] = useState("test");
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);
// TODO REFACT LE SYTEME DE ROUTER
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log('data ',data);
    ( async () => {
      let result = await ResultsFetchAuthentification(data);
       console.log('result: ', result);
    })();

  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: 400, width: 400 }}
        />
      {/* {isValid === 'authorized' && <Link href='/valid' style={styles.subtitle}>suivant</Link>} */}
      <Text style={styles.subtitle}>{isValid}</Text>
      {/* {isValid === 'denied' && scanned && <Button title={'ca marche pas, try again'} onPress={() => setScanned(false)} />} */}
      <Link href={{pathname: '/valid', query: { name: 'valid' },}}>valid</Link>
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