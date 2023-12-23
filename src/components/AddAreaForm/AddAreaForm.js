import {
  Button,
  Input,
  Label,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { setArea } from 'components/firebase';
import { Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AddAreaForm = () => {
  const { email, company } = useAuth();

  return (
    <Formik
      initialValues={{
        area: '',
        areaDisplay: '',
      }}
      onSubmit={(values, action) => {
        const data = {
          area: values.area,
          areaDisplay: values.areaDisplay,
          redactor: email,
          company: company,
        };
        setArea(data);
        // navigate('/home');
      }}
    >
      <Form>
        <Label>
          Введіть назву нової дільниці
          <Input name="areaDisplay" placeholder="Майстерня КІП" />
        </Label>
        <Label>
          Введіть ключ назви нової дільниці
          <Input name="area" placeholder="kip-mastershop" />
        </Label>
        <Button type="submit">Підтвердити</Button>
      </Form>
    </Formik>
  );
};
