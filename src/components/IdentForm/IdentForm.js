import { Form, Field, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { identifyMe } from '../../redux/operations';

export const IdentForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Formik
      initialValues={{
        type: '',
        company: '',
      }}
      onSubmit={(values, action) => {
        console.log(values);
        const data = {
          user: user,
          type: values.type,
          company: values.company,
        };
        console.log(data);
        dispatch(identifyMe(data));
      }}
    >
      <Form>
        <label>
          Оберіть компанію в якій працюєте
          <Field as="select" name="company">
            <option value="">Оберіть</option>
            <option value="Legko">Легко</option>
            <option value="MPF">МПФ</option>
            <option value="VPF">ВПФ</option>
          </Field>
        </label>
        <label>
          Оберіть Вашу посаду
          <Field as="select" name="type">
            <option value="">Оберіть</option>
            <option value="inspektor">Інспектор</option>
            <option value="master">Майстер</option>
            <option value="komirnik">Комірник</option>
          </Field>
        </label>
        <button type="submit">OK</button>
      </Form>
    </Formik>
  );
};
