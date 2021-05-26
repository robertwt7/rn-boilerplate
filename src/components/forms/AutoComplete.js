import React, { useEffect } from "react";
import { AutocompleteItem, Autocomplete } from "@ui-kitten/components";
import PropTypes from "prop-types";

FormikAutoComplete.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

const filter = (item, query) =>
  item.title.toLowerCase().includes(query.toLowerCase());

export default function FormikAutoComplete({ data }) {
  const [value, setValue] = React.useState(null);
  const [filteredData, setFilteredData] = React.useState(data);

  const onSelect = (index) => {
    setValue(data[index].name);
  };

  const onChangeText = (query) => {
    setValue(query);
    setFilteredData(data.filter((item) => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem key={index} title={item.name} />
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
