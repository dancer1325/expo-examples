/** @type {import('expo/config').ExpoConfig} */
module.exports = {
  name: "with-app-integrity",
  slug: "with-app-integrity",
  scheme: "withappintegrity",
  icon: "https://github.com/expo/expo/blob/master/templates/expo-template-blank/assets/icon.png?raw=true",
  splash: {
    image: "https://github.com/expo/expo/blob/master/templates/expo-template-blank/assets/splash.png?raw=true",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    bundleIdentifier: "com.example.withappintegrity",
  },
  android: {
    package: "com.example.withappintegrity",
  },
  web: {
    bundler: "metro",
    output: "server",
  },
  plugins: ["expo-router", "expo-secure-store"],
};
