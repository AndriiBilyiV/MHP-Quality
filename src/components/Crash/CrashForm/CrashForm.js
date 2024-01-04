import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAreas, selectCrashPoints } from '../../../redux/selectors';
import { getAreas, getCrashPoints } from '../../../redux/operations';
import { useAuth } from 'hooks/useAuth';
import { CrashItem } from './CrashItem';
import { CrashSwitch } from './CrashSwitch';
import { Button } from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { setCrashRecord } from 'components/firebase';

export const CrashForm = () => {
  const [crashState, setCrashState] = useState({});
  const changeStatus = p => {
    setCrashState(state => {
      return { ...state, ...p };
    });
  };
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
  const sendReport = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;
    const stateArray = Object.entries(crashState);
    for (let point of stateArray) {
      const data = {
        year: year,
        month: month,
        day: day,
        id: point[0],
        status: point[1].status,
        area: point[1].area,
        display: point[1].display,
      };
      setCrashRecord(data);
    }
  };
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
                    <CrashSwitch point={point} change={changeStatus} />
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      <Button onClick={() => sendReport()}>Надіслати звіт</Button>
    </div>
  );
};
