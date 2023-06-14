import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Link } from 'expo-router';
import { getQRCodeElement, } from '../service';


export default function App()  {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isValid, setIsValid] = useState(); 

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // ( async () => {
    //   let result = await ResultsFetchAuthentification(data);
    // })();
    ( async () => {
        console.log('data', data);
        const table = data.split('/');
        console.log('table', table);
            const element = await getQRCodeElement(table[0], table[1]);
            console.log('element', element);
            
            // if (element.utilisateur && element.utilisateur.length > 0) {
        
            //     return (
            //         <View style={styles.container}>
            //           <View style={styles.main}>
            //             <Text style={styles.title}>Utilisateur</Text>
            //             <Text style={styles.title}>{element.utilisateur}</Text>
        
            //           </View>
            //         </View>
            //       );
            // }
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
      <Text style={styles.subtitle}>{isValid}</Text>
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