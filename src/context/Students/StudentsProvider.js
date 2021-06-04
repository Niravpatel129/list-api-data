import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '../../service/fetcher';
import StudentsContext from './StudentsContext';

const API_URL = '/assessment/students';

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState();
  const { data } = useSWR(API_URL, fetcher);

  useEffect(() => {
    if (!data) return;

    setStudents(data.students);
  }, [data]);

  return <StudentsContext.Provider value={{ students }}>{children}</StudentsContext.Provider>;
};

export default StudentsProvider;
