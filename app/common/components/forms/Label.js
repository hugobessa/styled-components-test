import styled, { css } from 'styled-components';
import { makeSrOnly } from 'styles/mixins/a11y';


const Label = styled.label`
  font-weight: bold;

  ${(props) => (props.hidden ?
    makeSrOnly()
    : ''
  )}
  ${(props) => (props.hasError ?
    css`color: ${(props2) => props2.theme.dangerColor};`
    : ''
  )}
`;

export default Label;
