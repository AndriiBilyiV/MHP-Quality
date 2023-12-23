import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAreas } from '../../../redux/selectors';
import { getAreas } from '../../../redux/operations';
import { useAuth } from 'hooks/useAuth';
import { CrashItem } from './CrashItem';

export const CrashForm = () => {
  const { company } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    const foo = async () => await dispatch(getAreas(company));
    foo();
  }, [dispatch, company]);
  const areas = useSelector(selectAreas);
  console.log(areas);
  return (
    <ul>
      {areas.map(area => (
        <li key={area.area}>
          <CrashItem area={area} />
        </li>
      ))}
    </ul>
  );
};
