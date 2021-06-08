import React from "react";
import { Button, Card, Modal, Text } from "@ui-kitten/components";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "store/ducks/message.duck";
import { StyleSheet } from "react-native";
import { moderateScale } from "../../helpers";

const styles = StyleSheet.create({
  message: {
    fontSize: moderateScale(20),
    fontWeight: "500",
    marginVertical: 16,
  },
  p8: {
    padding: 4,
  },
});

export default function Message() {
  const { message, open } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  return (
    <Modal visible={open}>
      <Card disabled style={styles.p8}>
        <Text style={styles.message}>{message}</Text>
        <Button onPress={() => dispatch(actions.hideMessage())}>DISMISS</Button>
      </Card>
    </Modal>
  );
}
