import { Platform, Dimensions } from "react-native";

export default {
  isIphoneX: () =>
    Platform.OS === "ios" && Dimensions.get("window").height === 812,
  isIOS: () => Platform.OS === "ios"
};
