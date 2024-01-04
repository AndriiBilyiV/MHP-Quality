import { Formik } from 'formik';
import { Switch } from './CrashItem.styled';

const translate = {
  unchecked: 'Не оглянуто',
  unhurt: 'Ціле',
  broken: 'Пошкоджено',
};
export const CrashSwitch = ({ point, change }) => {
  return (
    <Formik initialValues={{ status: 'unchecked' }}>
      {({ values, setFieldValue }) => (
        <Switch>
          <label>{translate[values.status]}</label>
          <input
            type="radio"
            name="status"
            value="unchecked"
            checked={values.status === 'unchecked'}
            onChange={e => {
              setFieldValue('status', 'unchecked');
              change({
                [point.id]: {
                  status: e.target.value,
                  area: point.area,
                  display: point.point,
                },
              });
            }}
          />
          <input
            type="radio"
            name="status"
            value="unhurt"
            checked={values.status === 'unhurt'}
            onChange={e => {
              setFieldValue('status', 'unhurt');
              change({
                [point.id]: {
                  status: e.target.value,
                  area: point.area,
                  display: point.point,
                },
              });
            }}
          />
          <input
            type="radio"
            name="status"
            value="broken"
            checked={values.status === 'broken'}
            onChange={e => {
              setFieldValue('status', 'broken');
              change({
                [point.id]: {
                  status: e.target.value,
                  area: point.area,
                  display: point.point,
                },
              });
            }}
          />
        </Switch>
      )}
    </Formik>
  );
};
