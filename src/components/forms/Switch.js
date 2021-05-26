import React, { useCallback } from "react";
import { Toggle, Text } from "@ui-kitten/components";
import { useFormikContext, useField } from "formik";
import PropTypes from "prop-types";
import { View } from "react-native";

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function Switch({ name, label }) {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const handleChange = useCallback(
    (isChecked) => {
      setFieldValue(name, isChecked);
      setFieldTouched(name, true);
    },
    [name]
  );

  return (
    <View>
      <Toggle checked={field.value} onChange={handleChange}>
        {label}
      </Toggle>
      {meta.touched && meta.error && (
        <Text status="danger">{String(meta.error)}</Text>
      )}
    </View>
  );
}
