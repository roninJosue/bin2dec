import { Description, FormConverter } from '../../components';
import { StyledHome } from './Home.styles';
import useHome from '../../hooks/useHome';

const Home = () => {
  const { result, handleChange } = useHome();

  return (
    <StyledHome>
      <Description />
      <FormConverter result={result} handleChange={handleChange} />
    </StyledHome>
  );
};

export default Home;
