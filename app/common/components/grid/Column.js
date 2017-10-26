import styled from 'styled-components';
import { makeColumn, makeColumnOffset } from 'styles/mixins/grid';


const Column = styled.div`
  ${makeColumn}
  ${makeColumnOffset}
`;

export default Column;
