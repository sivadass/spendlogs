import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import { Alert, Button, FormControl } from "../../components/core";
import { LANGUAGES, CURRENCIES } from "../../constants/common";

const SettingsSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required")
});

interface SettingsFormProps {
  initialValues: {
    name: string;
    email: string;
    language?: string;
    currency?: string;
  };
  handleFormSubmit: any;
}

const SettingsForm: React.FC<SettingsFormProps> = ({
  initialValues,
  handleFormSubmit
}) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SettingsSchema}
      onSubmit={(values, { setSubmitting }) => {
        setError("");
        return handleFormSubmit(values)
          .then((d: any) => {
            setSubmitting(false);
            setSuccess(true);
          })
          .catch((err: any) => {
            setSubmitting(false);
            setError(err);
          });
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Full Name"
            type="text"
            name="name"
            label="Full Name"
            component={FormControl.Input}
          />
          <Field
            placeholder="Email"
            type="email"
            name="email"
            label="Email"
            component={FormControl.Input}
            disabled
          />
          <Field
            placeholder="Language"
            name="language"
            label="Language"
            component={FormControl.Select}
            options={LANGUAGES}
          />
          <Field
            placeholder="Currency"
            name="language"
            label="Currency"
            component={FormControl.Select}
            options={CURRENCIES}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            onClick={() => {}}
            loading={isSubmitting}
          >
            SAVE
          </Button>
          {success && <Alert message="Successfully saved!" type="success" />}
          {error && <Alert message={error} type="error" />}
        </form>
      )}
    </Formik>
  );
};

export default SettingsForm;
