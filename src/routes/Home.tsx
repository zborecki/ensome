import Loading from '../components/Loading';
import Welcome from '../components/Welcome';
import { useSections } from '../services';

const Home = (): JSX.Element => {
  const { data, isLoading } = useSections();

  return (
    isLoading ? <Loading />
      : (
        <>
          <Welcome content={data?.welcome} />
          <div />
        </>
      )
  );
};

export default Home;
