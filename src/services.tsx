import { useQuery } from '@tanstack/react-query';
import axios from './configurations/axios';

enum KEY {
  SECTIONS = 'sections'
}

export const useSections = () => {
  const { data, isLoading } = useQuery([KEY.SECTIONS], () => (
    axios.get(`/${KEY.SECTIONS}.json`).then((response) => response.data)
  ));

  return { data, isLoading };
};
