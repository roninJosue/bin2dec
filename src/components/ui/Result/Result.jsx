import { StyledResult } from './Result.styles';

const Result = ({ result }) => (
  <StyledResult data-testid="result" length={result.toString().length}>
    {result}
  </StyledResult>
);

export default Result;
