import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import RNLocation from "react-native-location";

// import { Marker } from "react-native-maps";
import FAIcon from "react-native-vector-icons/FontAwesome";
import IIcon from "react-native-vector-icons/Ionicons";

RNLocation.configure({
  distanceFilter: null,
});

export default function GMAPView() {
  const [location, setlocation] = useState({});
  let permission;
  const permissionHandle = async () => {
    permission = await RNLocation.checkPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse",
      },
    });
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse",
          rationale: {
            title: "Location permission",
            message: "We use your location to show you the nearby places",
            buttonPosition: "OK",
            buttonNegative: "Cancel",
          },
        },
      });
      let locations = await RNLocation.getLatestLocation({ timeout: 100 });
      setlocation(locations);
    } else {
      let locations = await RNLocation.getLatestLocation({ timeout: 100 });
      setlocation(locations);
    }
  };
  useEffect(async () => {
    await permissionHandle();
  }, []);

  return (
    <View style={{ padding: 20, flex: 1, flexDirection: "column" }}>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={
          location.length <= 0
            ? {
                latitude: 18.61966,
                longitude: 17.032111,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
        }
      >
        {/* <Marker
            coordinate={{ latitude: 28.57966, longitude: 77.32111 }}
            title={"JavaTpoint"}
            description={"Java Training Institute"}
          /> */}
      </MapView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <IIcon name="map" size={40}></IIcon>
        <IIcon name="trending-up" size={40}></IIcon>
        <IIcon name="ios-chatbubble-outline" size={40}></IIcon>
        <FAIcon name="user-circle" size={40}></FAIcon>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mapStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
