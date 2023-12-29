import { Formik } from 'formik';
import { Switch } from './CrashItem.styled';

const translate = {
  unchecked: 'Не оглянуто',
  unhurt: 'Ціле',
  broken: 'Пошкоджено',
};
export const CrashSwitch = () => {
  return (
    <Formik
      initialValues={{ status: 'unchecked' }}
      onSubmit={(values, action) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Switch>
          <input
            type="radio"
            name="status"
            value="unchecked"
            checked={values.status === 'unchecked'}
            onChange={() => setFieldValue('status', 'unchecked')}
          />
          <input
            type="radio"
            name="status"
            value="unhurt"
            checked={values.status === 'unhurt'}
            onChange={() => setFieldValue('status', 'unhurt')}
          />
          <input
            type="radio"
            name="status"
            value="broken"
            checked={values.status === 'broken'}
            onChange={() => setFieldValue('status', 'broken')}
          />
          <label>{translate[values.status]}</label>
        </Switch>
      )}
    </Formik>
  );
};
