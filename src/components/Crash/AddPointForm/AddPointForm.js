import { Field, Form, Formik } from 'formik';

export const AddPointForm = () => {
  return (
    <Formik
      initialValues={{
        area: '',
        point: '',
      }}
      onSubmit={(values, action) => {}}
    >
      <Form>
        <label>
          <Field name="area" />
          <label></label>
          <Field name="point" />
        </label>
      </Form>
    </Formik>
  );
};
