import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  icon: { marginBottom: -3 },
});

const TabBarIcon = ({ ionIcons, name, focused }) => {
  return (
    <>
      {ionIcons ? (
        <Ionicons
          name={name}
          size={30}
          style={styles.icon}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      ) : (
        <MaterialIcons
          name={name}
          size={30}
          style={styles.icon}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      )}
    </>
  );
};

TabBarIcon.propTypes = {
  ionIcons: PropTypes.bool,
  name: PropTypes.string,
  focused: PropTypes.bool,
};

export default TabBarIcon;
