import { RotatingLines } from 'react-loader-spinner';
import { DivStyleLoader } from './Loader.styled';

const Loader = () => {
  return (
    <DivStyleLoader>
      <RotatingLines strokeColor="yellow" />
    </DivStyleLoader>
  );
};

export default Loader;
