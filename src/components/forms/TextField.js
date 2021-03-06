import React, { useCallback } from "react";
import { useFormikContext, useField } from "formik";
import { Input } from "@ui-kitten/components";
import PropTypes from "prop-types";

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  secure: PropTypes.bool,
};

export default function TextField({ name, label, secure = false, ...props }) {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched, handleBlur } = useFormikContext();

  const handleType = useCallback(
    (text) => {
      setFieldValue(name, text);
    },
    [name]
  );

  const handleFocus = () => {
    setFieldTouched(name);
  };

  return (
    <Input
      status={Boolean(meta.error && meta.touched) && "danger"}
      value={String(field.value)}
      label={label}
      caption={Boolean(meta.error && meta.touched) && String(meta.error)}
      secureTextEntry={secure}
      onBlur={handleBlur(name)}
      onFocus={handleFocus}
      onChangeText={handleType}
      {...props}
    />
  );
}
