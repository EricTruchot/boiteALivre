import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { handleTable } from '../service';
import { Link } from 'expo-router';

export default function App ()  {
  const [scanned, setScanned] = useState(false);
  const [scannedTwice, setScannedTwice] = useState(false);
  const [livres, setLivres] = useState([]);
  const [takeBook, setTakeBook] = useState();
  const [bookTaken, setBookTaken] = useState([]);
  const [didTakeBook, setDidTakeBook] = useState(false);
  const [showsSecondPage, setShowsSecondPage] = useState(false);
  const [empruntBook, setEmpruntBook] = useState([]);


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    getData(data)
  };
  const handleBarCodeScanned2 = ({ type, data }) => {
    const idBook = data.split('/')[3]

    setScannedTwice(true);
    prendreLivre(takeBook, idBook)
    setTakeBook()
    setDidTakeBook(true)
  };

  async function getData(data) {
    const table = data.split('/')
    const result = await handleTable(table[2], table[3]);
    setLivres(result)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleTable("emprunt", bookTaken);
      setEmpruntBook(data);
    };
  
    fetchData();
  }, [showsSecondPage]);

  const prendreLivre = ( id, idBook ) => {
    setLivres(livres.filter(livre => livre.id !== id));
    setBookTaken([
      ...bookTaken,
        idBook,
    ]);
  };

  return (
    <View style={styles.container}>
      
      { !showsSecondPage ? ( 
        <>
        
      { empruntBook !== [] && (
        <Button title={'Voir les emprunts'} onPress={() => setShowsSecondPage(true)} />
      )}
        <Link href="/map" style={styles.subtitle}>Want to see the map ?</Link>

          {didTakeBook && (
              <Text style={styles.title}>Vous avez emprunter un livre</Text>
          )}
          { !scanned && !takeBook &&
              <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                  style={{ height: 400, width: 400 }}
                  />
          }
          {scanned && !takeBook && <Button title={'Appuyez pour scanner encore'} onPress={() => setScanned(false)} />}

          { scanned && !takeBook &&
              livres.map((livre) => (
              <View key={livre?.id}>
                  <Text style={styles.infos}>
                      Auteur: {livre?.auteur}
                  </Text>
                  <Text style={styles.infos}>
                      Name: {livre?.name}
                  </Text>
                  <Text style={styles.infos}>
                      Resume: {livre?.resume}
                  </Text>
                  <Button
                  title={"Prend le livre (nécessite un scan)"}
                  onPress={async() => {
                      setTakeBook(livre?.id);
                  }}
                  />
            </View>
          ))}

          { !scannedTwice && takeBook &&
              <BarCodeScanner
                  onBarCodeScanned={scannedTwice ? undefined : handleBarCodeScanned2}
                  style={{ height: 400, width: 400 }}
                  />
          }
          {!scanned && scannedTwice && <Button title={'Appuyez pour scanner encore'} onPress={() => setScannedTwice(false)} />}

        </>
      ) : (
        <View>
          <Button title={'retouner à la liste'} onPress={() => setShowsSecondPage(false)} />
          {empruntBook && 
            empruntBook?.map((livre) => (
              <View key={livre?.id}>
                <Text style={styles.infos}>
                    Auteur: {livre?.auteur}
                </Text>
                <Text style={styles.infos}>
                    Name: {livre?.name}
                </Text>
                <Text style={styles.infos}>
                    Resume: {livre?.resume}
                </Text>
                <Button
                title={"Prend le livre (nécessite un scan)"}
                onPress={async() => {
                    setTakeBook(livre?.id);
                }}
                />
              </View>
          ))}
          </View>
      )}
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
    title: {
        color: "white",
        fontSize: 20,
        marginBottom: 12,
        marginTop: 12,
    },
    infos: {
        color: "white",
        marginBottom: 12,
        marginTop: 12,
    },
})