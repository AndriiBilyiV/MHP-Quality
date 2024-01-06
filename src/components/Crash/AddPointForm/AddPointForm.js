import {
  Button,
  Input,
  StyledForm,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectAreas } from '../../../redux/selectors';
import { nanoid } from 'nanoid';
import { useAuth } from 'hooks/useAuth';
import { setNewPoint } from '../../../redux/operations';

export const AddPointForm = () => {
  const areas = useSelector(selectAreas);
  const { email, company } = useAuth();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        area: '',
        point: '',
      }}
      onSubmit={(values, action) => {
        const val = JSON.parse(values);
        console.log(values);
        console.log(val);
        const data = {
          area: val.area[0],
          point: val.point,
          id: nanoid(),
          redactor: email,
          company: company,
          areaDisplay: val.area[1],
        };
        dispatch(setNewPoint(data));
      }}
    >
      <StyledForm>
        <label>
          Досі немає необхідної точки? Оберіть дільницю та введіть назву нової
          точки
          <Field as="select" name="area">
            <option value="">Оберіть</option>
            {areas.map(area => {
              return (
                <option
                  key={area.area}
                  value={JSON.stringify([area.area, area.areaDisplay])}
                >
                  {area.areaDisplay}
                </option>
              );
            })}
          </Field>
          <label></label>
          <Input name="point" />
        </label>
        <Button type="submit">Додати нову точку</Button>
      </StyledForm>
    </Formik>
  );
};
