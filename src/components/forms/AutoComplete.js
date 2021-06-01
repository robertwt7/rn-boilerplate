import React, { useEffect } from "react";
import { AutocompleteItem, Autocomplete } from "@ui-kitten/components";
import PropTypes from "prop-types";
import { useField, useFormik, useFormikContext } from "formik";

FormikAutoComplete.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

const filter = (item, query) =>
  item.title.toLowerCase().includes(query.toLowerCase());

export default function FormikAutoComplete({ name, data }) {
  const [value, setValue] = React.useState(null);
  const [filteredData, setFilteredData] = React.useState(data);
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const onSelect = (index) => {
    setValue(data[index].name);

    // Submitted value is ID
    setFieldValue(name, data[index].id);
  };

  const onChangeText = (query) => {
    setValue(query);
    setFilteredData(data.filter((item) => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem key={item.id} title={item.name} />
  );

  return (
    <Autocomplete
      placeholder="Place your Text"
      value={value}
      onSelect={onSelect}
      onChangeText={onChangeText}
    >
      {filteredData.map(renderOption)}
    </Autocomplete>
  );
}
