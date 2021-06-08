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
import kittenTheme from "./src/kitten-theme.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const RootComponent = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...kittenTheme }}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
          <Message />
        </View>
      </ApplicationProvider>
    </PersistGate>
  </Provider>
);

function App(props) {
  return <RootComponent />;
}

export default App;
