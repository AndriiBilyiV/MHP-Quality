import { getAllDepartments } from 'components/firebase';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';

export const DepartmentsList = () => {
  const { company } = useAuth();
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllDepartments(company);
        setDepartments(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [company]);
  return (
    <ul>
      {departments
        ? departments.map(department => (
            <li key={department.id}>{department.department}</li>
          ))
        : null}
    </ul>
  );
};
