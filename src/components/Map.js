import React, { useEffect, useState, useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { handleTable } from "../app/service";

export default function Map({ markers }) {
  const [latitude, setLatitude] = useState(43.641548);
  const [longitude, setLongitude] = useState(5.098634);

  const mapRef = useRef(null);

  useEffect(() => {
      mapRef.current?.animateToRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      })
  }, []);

  return (
      <MapView
        ref={mapRef}
        userLocationPriority="high"
        showsUserLocation={true}
        style={styles.map}
        >
        { Object.keys(markers).length > 0  && markers?.map(marker => (
            <Marker
            key={marker?.id}
            coordinate={{latitude: marker?.latitude, longitude: marker?.longitude}}
            title={marker?.title}
        />
        ))}
        
      </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "60%",
    width: "90%",
  },
})