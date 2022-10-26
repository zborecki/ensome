import { CircularProgress } from '@mui/material';

const Loading = (): JSX.Element => (
  <div className="loading__wrapper">
    <CircularProgress className="loading__progressBar" />
  </div>
);

export default Loading;
