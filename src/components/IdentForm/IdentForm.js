import { Form, Field, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPositions } from '../../redux/selectors';
import { getPositions, identifyMe } from '../../redux/operations';

export const IdentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userName } = useAuth();
  useEffect(() => {
    const foo = async () => await dispatch(getPositions('Legko'));
    foo();
  }, [dispatch]);
  const positions = useSelector(selectPositions);
  return (
    <Formik
      initialValues={{
        position: '',
        company: '',
      }}
      onSubmit={(values, action) => {
        const data = {
          isAdmin: true,
          user: user,
          userName: userName,
          position: values.position,
          positionDisplay: positions.find(
            position => position.position === values.position
          ).positionDisplay,
          company: values.company,
        };
        console.log(data);
        dispatch(identifyMe(data));
        navigate('/home');
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
          <Field as="select" name="position">
            <option value="">Оберіть</option>
            {positions.map(position => {
              return (
                <option value={position.position}>
                  {position.positionDisplay}
                </option>
              );
            })}
          </Field>
        </label>
        <button type="submit">OK</button>
      </Form>
    </Formik>
  );
};
