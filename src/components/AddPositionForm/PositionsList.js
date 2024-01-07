import { getAllPositions } from 'components/firebase';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';

export const PositionsList = () => {
  const { company } = useAuth();
  const [positions, setPositions] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllPositions(company);
        setPositions(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [company]);
  return (
    <ul>
      {positions
        ? positions.map(position => (
            <li key={position.id}>{position.position}</li>
          ))
        : null}
    </ul>
  );
};
