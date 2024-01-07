import {
  Button,
  Input,
  Label,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { setDepartment } from 'components/firebase';
import { Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

export const AddDepartmentForm = () => {
  const { email, company } = useAuth();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        department: '',
      }}
      onSubmit={(values, action) => {
        const data = {
          department: values.department,
          redactor: email,
          company: company,
          id: nanoid(),
        };
        setDepartment(data);
        navigate('/home');
      }}
    >
      <Form>
        <Label>
          Введіть назву нового підрозділу
          <Input name="department" placeholder="Відділ якості" />
        </Label>
        <Button type="submit">Підтвердити</Button>
      </Form>
    </Formik>
  );
};
