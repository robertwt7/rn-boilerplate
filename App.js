import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import * as eva from "@eva-design/eva";
import { PersistGate } from "redux-persist/es/integration/react";
import { ApplicationProvider } from "@ui-kitten/components";
import { Message } from "components";
import { registerRootComponent } from "expo";
import store, { persistor } from "./src/store/store";
import Routes from "./src/Routes";
import { default as kittenTheme } from "./src/kitten-theme.json";

function App(props) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ApplicationProvider
            {...eva}
            theme={{ ...eva.light, ...kittenTheme }}
          >
            <View style={styles.container}>
              {Platform.OS === "ios" && <StatusBar barStyle="default" />}
              <NavigationContainer>
                <Routes />
                <Message />
              </NavigationContainer>
            </View>
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default registerRootComponent(App);
