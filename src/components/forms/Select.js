import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { useFormikContext, useField } from "formik";
import PropTypes from "prop-types";

FormikSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  label: PropTypes.string,
};

export default function FormikSelect({ data, name, label }) {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [displayValue, setDisplayValue] = useState(" ");
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(name);

  useEffect(() => {
    // If prefilled with edit data from db
    if (field.value && data.length > 0) {
      const index = data.map((i) => i.id).indexOf(field.value);
      setDisplayValue(data[index].name);
    }
  }, [field.value, data]);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setFieldTouched(name, true);
    setFieldValue(name, data[index.row].id);
    // setDisplayValue(data[index.row].name);
  };

  return (
    <Select
      selectedIndex={selectedIndex}
      onSelect={handleSelect}
      value={displayValue}
      label={label}
      caption={Boolean(meta.error && meta.touched) && String(meta.error)}
      status={Boolean(meta.error && meta.touched) && "danger"}
    >
      {data.map((item) => (
        <SelectItem title={item.name} key={item.id} />
      ))}
    </Select>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});
