import {
  Button,
  Input,
  Label,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { setDepartment } from 'components/farebase';
import { Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const AddDepartmentForm = () => {
  const { email, company } = useAuth();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        department: '',
        departmentDisplay: '',
      }}
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
