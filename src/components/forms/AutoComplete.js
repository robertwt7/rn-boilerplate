import React, { useEffect } from "react";
import { AutocompleteItem, Autocomplete } from "@ui-kitten/components";
import { selectData } from "db/methods";

const filter = (item, query) =>
  item.title.toLowerCase().includes(query.toLowerCase());

export default function FormikAutoComplete() {
  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const query = "SELECT * from categories;";
    const dbData = selectData(query);
    if (dbData) {
      setData(data);
    }
  }, []);

  const onSelect = (index) => {
    setValue(data[index].name);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(data.filter((item) => filter(item, query)));
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
      {data.map(renderOption)}
    </Autocomplete>
  );
}
