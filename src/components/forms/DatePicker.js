import React, { useState } from "react";
import { Datepicker, useTheme } from "@ui-kitten/components";
import { Pressable, StyleSheet } from "react-native";
import { useFormikContext, useField } from "formik";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { MaterialIcons } from "@expo/vector-icons";
import { moderateScale } from "helpers";

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(16),
    fontWeight: "400",
  },
});

const FormikCalendar = ({ name, label }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(name);
  const theme = useTheme();

  const CalendarIcon = (props) => (
    <MaterialIcons
      name="calendar-today"
      size={24}
      color={theme["color-primary-default"]}
    />
  );

  const handleSelect = (nextDate) => {
    setFieldValue(name, nextDate);
    setFieldTouched(name, true);
  };

  return (
    field.value && (
      <Datepicker
        date={new Date(field.value)}
        onSelect={handleSelect}
        label={label}
        placeholder="Pick Date"
        accessoryRight={CalendarIcon}
      />
    )
  );
};

FormikCalendar.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default FormikCalendar;
