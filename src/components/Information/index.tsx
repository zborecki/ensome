import { InformationProps } from '../../data.types';

const Information = ({ headline, children }: InformationProps): JSX.Element => (
  <>
    <h1>{ headline }</h1>
    <p>{ children }</p>
  </>
);

export default Information;
