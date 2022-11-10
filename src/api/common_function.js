import { PermissionsAndroid } from "react-native";
import { showMessage } from "react-native-flash-message";
import Geolocation from "react-native-geolocation-service";

export function flashMessage(
  message,
  description,
  type = "success",
  icon = "success"
) {
  showMessage({
    message,
    description,
    type,
    icon,
  });
}
async function requestPermissions() {
  if (Platform.OS === "ios") {
    const auth = await Geolocation.requestAuthorization("whenInUse");
    if (auth === "granted") {
      // do something if granted...
    }
  }

  if (Platform.OS === "android") {
    const auth = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (auth === PermissionsAndroid.RESULTS.GRANTED) {
      // do something if granted...
    }
  }
}

export function askUserToAllowLocation() {
  requestPermissions();
}

export function searchingAnElementInArray(checkElement, arr) {
  {
    if (arr[n - 1] == checkElement) return arr[n - 1];
    let backup = arr[n - 1];
    arr[n - 1] = x;
    for (let i = 0; ; i++) {
      if (arr[i] == x) {
        arr[n - 1] = backup;
        if (i < n - 1) return "Found";
        return "Not Found";
      }
    }
  }
}
