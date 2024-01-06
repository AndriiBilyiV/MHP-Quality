import { Field, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPositions } from '../../redux/selectors';
import { getPositions, identifyMe } from '../../redux/operations';
import {
  Button,
  Label,
  StyledForm,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';

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
          isAdmin: false,
          isAproved: false,
          user: user,
          userName: userName,
          position: values.position,
          positionDisplay: positions.find(
            position => position.position === values.position
          ).positionDisplay,
          company: values.company,
        };
        dispatch(identifyMe(data));
        navigate('/home');
      }}
    >
      <StyledForm>
        <Label>
          Оберіть компанію в якій працюєте
          <Field as="select" name="company">
            <option value="">Оберіть</option>
            <option value="Legko">Легко</option>
            <option value="MPF">МПФ</option>
            <option value="VPF">ВПФ</option>
          </Field>
        </Label>
        <Label>
          Оберіть Вашу посаду
          <Field as="select" name="position">
            <option value="">Оберіть</option>
            {positions.map(position => {
              return (
                <option key={position.position} value={position.position}>
                  {position.positionDisplay}
                </option>
              );
            })}
          </Field>
        </Label>
        <Button type="submit">OK</Button>
      </StyledForm>
    </Formik>
  );
};
