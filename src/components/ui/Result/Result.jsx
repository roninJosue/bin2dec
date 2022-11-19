import { StyledResult } from './Result.styles';

const Result = ({ result }) => (
  <StyledResult length={result.toString().length}>{result}</StyledResult>
);

export default Result;
