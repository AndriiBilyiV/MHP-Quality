import {
  Button,
  Input,
  Label,
  Select,
  StyledForm,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { setPosition } from 'components/firebase';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDepartments } from '../../redux/operations';
import { selectDepartments } from '../../redux/selectors';

export const AddPositionForm = () => {
  const { email, company } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const foo = async () => await dispatch(getDepartments(company));
    foo();
  }, [dispatch, company]);
  const departmens = useSelector(selectDepartments);
  return (
    <Formik
      initialValues={{
        position: '',
        positionDisplay: '',
        department: '',
      }}
      onSubmit={(values, action) => {
        const data = {
          position: values.position,
          positionDisplay: values.positionDisplay,
          department: values.department,
          redactor: email,
          company: company,
        };
        setPosition(data);
        navigate('/home');
      }}
    >
      <StyledForm>
        <Label>
          Оберіть підрозділ майбутньої посади
          <Field as="select" name="department">
            <option value="">Оберіть</option>
            {departmens.map(department => {
              return (
                <option value={department.department}>
                  {department.departmentDisplay}
                </option>
              );
            })}
          </Field>
        </Label>
        <Label>
          Введіть назву нової посади
          <Input name="positionDisplay" placeholder="Інспектор з якості" />
        </Label>
        <Label>
          Введіть ключ назви нової посади
          <Input name="position" placeholder="quality-inspector" />
        </Label>
        <Button>Підтвердити</Button>
      </StyledForm>
    </Formik>
  );
};
