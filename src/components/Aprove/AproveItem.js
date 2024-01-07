import {
  Button,
  Input,
  Label,
  StyledForm,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { getAllPositions } from 'components/firebase';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const StyledLi = styled.li`
  border: 2px solid ${p => p.theme.theme.colors.light};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 16px;
`;

export const AproveItem = ({ details }) => {
  console.log('DETAILS', details);
  const { company } = useAuth();
  console.log('COMPANY', company);
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    console.log('USE');
    const fetchData = async () => {
      try {
        const result = await getAllPositions(company);
        setPositions(result);
        console.log('RESULT', result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [company]);
  console.log('POSITIONS', positions);
  return (
    <StyledLi>
      <div>
        <Formik
          initialValues={{
            state: 'user',
            userName: '',
          }}
        >
          {({ setFieldValue }) => (
            <StyledForm>
              <Label>
                Ім'я
                <Input
                  name="userName"
                  value={details.userName}
                  onChange={e => setFieldValue('userName', e.target.value)}
                />
              </Label>
              <Label>
                Посада: {details.position}
                <Field as="select" name="position">
                  <option value="">Оберіть</option>
                  {positions.map(position => (
                    <option key={position.id}>{position.position}</option>
                  ))}
                </Field>
              </Label>{' '}
              <p>Коментар від користувача:</p> <p>{details.comment}</p>
              <Button type="submit">Підтвердити</Button>
            </StyledForm>
          )}
        </Formik>
      </div>
    </StyledLi>
  );
};
