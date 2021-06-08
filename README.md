# Boilerplate for React native project

All you need to make an app for react native application

This project is a template starter kit with expo. Have `.eslintrc.js` integrated for best practices, also have many other packages to help speed up development.

It has a blank workspace, with a redux containing modal message that we can display anytime by calling `shoeMessage` action from Redux

Development tools installed:
- [Eslint](https://eslint.org/)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Husky](https://github.com/typicode/husky)
- [jest-expo](https://docs.expo.io/guides/testing-with-jest/)
- [react-native-testing-library](https://github.com/callstack/react-native-testing-library)

Don't forget to add `formatOnSave` if you are using VSCode to format your code on save, makes life so much easier following the `.eslintrc.js` given on the boilerplate. For example:

```
    "[javascript]": {
        "editor.defaultFormatter":"dbaeumer.vscode-eslint",
        "editor.formatOnSave": true
    },
    "editor.codeActionsOnSave": {
        // For ESLint
        "source.fixAll.eslint": true,
    },
```

Helpers:
- [Size utils](https://stackoverflow.com/questions/33628677/react-native-responsive-font-size)

Packages used here can be find in `setup-dev.sh`:
- [Formik](https://formik.org/) for forms
- [Yup](https://github.com/jquense/yup) for validations
- [React-redux](https://github.com/reduxjs/react-redux)
- [Redux](https://github.com/reduxjs/redux)
- [Redux-saga](https://github.com/redux-saga/redux-saga)
- [Dayjs](https://github.com/iamkun/dayjs)
- [Axios](https://github.com/axios/axios)
- [Ui-kitten](https://github.com/akveo/react-native-ui-kitten)
- [Async storage](https://github.com/react-native-async-storage/async-storage)
- [React native gesture handler](https://github.com/software-mansion/react-native-gesture-handler)

## How It Works

### React Navigation
We have setup `"@react-navigation/stack";` in `src/Routes.js` that has 1 default screen which is `HomeScreen`.
From here you can add extra screens and route according to your own application needs.

### Forms
We have a `formik` wrapper on used components with a `UI-kitten` UI library so it makes it soo easy for you to create forms.

Example form:
```
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Button } from "@ui-kitten/components";
import { TextField } from "../components/forms";
import { actions as messageActions } from "../store/ducks/message.duck";

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Required"),
});

const initialValues = {
  fullName: "",
};

export default function HomeScreen() {
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    try {
      dispatch(
        messageActions.showMessage({
          message: `My name is: ${values.fullName}`,
        })
      );
    } catch (e) {
      dispatch(
        messageActions.showMessage({
          message: "There are some error",
        })
      );
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <>
            <TextField label="Full Name" name="fullName" />
            <Button onPress={handleSubmit} disabled={isSubmitting}>
              Submit
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

```

### Feedbacks

After every resolve or reject for form API, we should give a feedback to the user saying either it succeed, or failed.

For this, there is a default `<Message />` component that is attached with the state saved in redux: `message.duck.js`

To display a message in any component, simply do:
```
import { actions as messageActions } from "../store/ducks/message.duck";

dispatch(actions.showMessage({ open: true, message: "Hello world" }));
```


### Testing

Unit testing can be done with [jest](https://docs.expo.io/guides/testing-with-jest/),
jest configuration is automatically setup with the recommended pattern from expo.
