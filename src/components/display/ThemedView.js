import React from "react";
import { View } from "react-native";
import { withStyles } from "@ui-kitten/components";

const AwesomeView = (props) => {
  const { eva, style, children, ...restProps } = props;

  return (
    <View {...restProps} style={[eva.style.awesome, style]}>
      {children}
    </View>
  );
};

const ThemedView = withStyles(AwesomeView, (theme) => ({
  awesome: {
    backgroundColor: theme["color-basic-100"],
  },
}));

export default ThemedView;
