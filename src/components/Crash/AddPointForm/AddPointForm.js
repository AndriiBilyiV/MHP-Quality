import { Field, Form, Formik } from 'formik';

export const AddPointForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        position: '',
      }}
      onSubmit={(values, action) => {}}
    >
      <Form>
        <label>
          <Field name="name" />
        </label>
        {}
      </Form>
    </Formik>
  );
};
