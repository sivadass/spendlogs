import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import { Alert, Button, FormControl } from "../../components/core";
import { CATEGORY_ICONS } from "../../constants/common";

const CategorySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  icon: Yup.string().required("Required")
});

interface CategoryFormProps {
  initialValues: {
    name: string;
    icon: string;
  };
  handleFormSubmit: any;
  isEditing?: boolean;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  initialValues,
  handleFormSubmit,
  isEditing = false
}) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CategorySchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setError("");
        return handleFormSubmit(values)
          .then((d: any) => {
            setSubmitting(false);
            setSuccess(true);
            !isEditing && resetForm();
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
            placeholder="Name"
            type="text"
            name="name"
            label="Name"
            component={FormControl.Input}
          />
          <Field
            placeholder="Category Icon"
            type="text"
            name="icon"
            icons={CATEGORY_ICONS}
            label="Icon"
            component={FormControl.CategoryInput}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            onClick={() => {}}
            loading={isSubmitting}
          >
            {isEditing ? "UPDATE" : "SAVE"}
          </Button>
          {success && <Alert message="Successfully saved!" type="success" />}
          {error && <Alert message={error} type="error" />}
        </form>
      )}
    </Formik>
  );
};

export default CategoryForm;
