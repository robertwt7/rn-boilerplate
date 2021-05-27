import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import * as eva from "@eva-design/eva";
import { PersistGate } from "redux-persist/es/integration/react";
import { ApplicationProvider } from "@ui-kitten/components";
import { registerRootComponent } from "expo";
import React from "react";
import { Message } from "./src/components";
import store, { persistor } from "./src/store/store";
import Routes from "./src/Routes";
import { default as kittenTheme } from "./src/kitten-theme.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

function App(props) {
  console.log("Provider", Provider);
  console.log("Route", Routes);
  console.log("PersistGate", PersistGate);
  console.log("Application Provider", ApplicationProvider);
  console.log("View", View);
  console.log("Text", Text);
  console.log("Navigation Container", NavigationContainer);
  console.log("Message", Message);
  console.log("Stylesheet", StyleSheet);
  console.log("Store", store);
  console.log("Persistor", persistor);
  console.log("Eva", eva);
  console.log("theme", kittenTheme);
  console.log("platform", Platform);
  console.log("Statusbar", StatusBar);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...kittenTheme }}>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>

            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <NavigationContainer>
              <Routes />
              <Message />
            </NavigationContainer>
          </View>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}

export default registerRootComponent(App);
