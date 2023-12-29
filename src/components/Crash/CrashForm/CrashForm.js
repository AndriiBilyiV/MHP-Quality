import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAreas, selectCrashPoints } from '../../../redux/selectors';
import { getAreas, getCrashPoints } from '../../../redux/operations';
import { useAuth } from 'hooks/useAuth';
import { CrashItem } from './CrashItem';
import { CrashSwitch } from './CrashSwitch';
import { Button } from 'components/DefoultStyledComponetns/DefoultStyledComponetns';

export const CrashForm = () => {
  const dispatch = useDispatch();
  const { company } = useAuth();
  useEffect(() => {
    const foo = async () => {
      await dispatch(getCrashPoints(company));
    };
    foo();
  }, [dispatch, company]);
  const points = useSelector(selectCrashPoints);
  useEffect(() => {
    const foo = async () => await dispatch(getAreas(company));
    foo();
  }, [dispatch, company]);
  const areas = useSelector(selectAreas);
  return (
    <div>
      <ul>
        {areas.map(area => (
          <li key={area.area}>
            <CrashItem key={area.area + 'label'} area={area} />
            <ul>
              {points
                .filter(point => point.area === area.area)
                .map(point => (
                  <li
                    key={point.id}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>{point.point}</span>
                    <CrashSwitch />
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      <Button>Надіслати звіт</Button>
    </div>
  );
};
