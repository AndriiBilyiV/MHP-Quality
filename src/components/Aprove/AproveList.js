import { getAllUsers } from 'components/firebase';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { AproveItem } from './AproveItem';

export const AproveList = () => {
  const { company } = useAuth();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers();
        setUsers(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [company]);
  const requests = users.filter(user => user.status === 'request');
  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {requests
        ? requests.map(request => (
            <AproveItem key={request.id} details={request} />
          ))
        : null}
    </ul>
  );
};
