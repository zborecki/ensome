import { useQuery } from '@tanstack/react-query';
import axios from './configurations/axios';
import { IDatabase } from './types/database';

enum KEY {
  SECTIONS = 'sections'
}

export const useSections = () => {
  const { data, isLoading } = useQuery<IDatabase>(
    [KEY.SECTIONS],
    async () => axios.get(`/${KEY.SECTIONS}.json`).then((response) => response.data),
    {
      initialData: {
        welcome: {
          headline: '',
          description: ''
        }
      } as IDatabase
    }
  );

  return { data, isLoading };
};
