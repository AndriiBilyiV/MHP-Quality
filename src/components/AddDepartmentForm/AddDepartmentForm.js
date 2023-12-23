import {
  Button,
  Input,
  Label,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { setDepartment } from 'components/firebase';
import { Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  department: Yup.string()
    .min(3, 'Мінімум 3 символи')
    .matches(
      /^[a-zA-Z-]+$/,
      'Допускаються тільки букви латинського алфавіту та дефізи'
    )
    .required("Обов'язково заповнити"),
  departmentDisplay: Yup.string()
    .min(3, 'Мінімум 3 символи')
    .required("Обов'язково заповнити"),
});

export const AddDepartmentForm = () => {
  const { email, company } = useAuth();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        department: '',
        departmentDisplay: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, action) => {
        const data = {
          department: values.department,
          departmentDisplay: values.departmentDisplay,
          redactor: email,
          company: company,
        };
        setDepartment(data);
        navigate('/home');
      }}
    >
      <Form>
        <Label>
          Введіть назву нового підрозділу
          <Input name="departmentDisplay" placeholder="Відділ якості" />
        </Label>
        <Label>
          Введіть ключ назви нового підрозділу
          <Input name="department" placeholder="quality" />
        </Label>
        <Button>Підтвердити</Button>
      </Form>
    </Formik>
  );
};
