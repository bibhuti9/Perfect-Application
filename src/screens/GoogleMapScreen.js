import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geolocation from "react-native-geolocation-service";

import { COLORS, SIZES } from "../themes/colors";
import { useSelector } from "react-redux";
export default function GoogleMapScreen({ origin, destination }) {
  const GOOGLE_MAPS_APIKEY = "Google Map KEY";
  const mapView = React.useRef();

  // const userCurrentLocation = useSelector(selectUserCurrentLocation);

  const [region, setRegion] = useState({
    latitude: 21.167853,
    longitude: 72.830277,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  var NY = {
    lat: region.latitude,
    lng: region.longitude,
  };

  const ZoomInOutButton = () => {
    return (
      <View
        style={{
          position: "absolute",
          bottom: SIZES.height * 0.35,
          right: SIZES.padding * 2,
          width: 60,
          height: 130,
          justifyContent: "space-between",
        }}
      >
        {/* Zoom In */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => zoomIn()}
        >
          <Text style={{ ...SIZES.L }}>+</Text>
        </TouchableOpacity>

        {/* Zoom Out */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => zoomOut()}
        >
          <Text style={{ ...SIZES.L }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  };
  function zoomIn() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 1.2,
      longitudeDelta: region.longitudeDelta / 1.2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function zoomOut() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 1.2,
      longitudeDelta: region.longitudeDelta * 1.2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapView}
        mapType="satellite"
        style={{ flex: 1 }}
        initialRegion={
          (origin, { latitudeDelta: 0.0922, longitudeDelta: 0.0421 })
        }
      >
        <Marker draggable coordinate={region} title={"current Location"} />
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor={COLORS.secondary}
        /> */}
      </MapView>
      <ZoomInOutButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
