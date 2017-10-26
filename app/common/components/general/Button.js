import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const Button = styled.button`

  text-align: center;

  &:focus {
    outline: none;
  }

  /* width */
  ${(props) => (!props.width || props.width === 'full' ? css`
    width: 100%;`
    : ''
  )}
  ${(props) => (props.width === 'auto' ? css`
    width: auto;`
    : ''
  )}

  /* width end */

  /* types */
  ${(props) => (props.btnType === 'primary' ? css`
    color: white;
    background: ${props.theme.primaryColor};
    border: 1px solid ${darken(0.2, props.theme.primaryColor)};
    &:active, &:focus {
      background: ${lighten(0.1, props.theme.primaryColor)};
    }`
    : ''
  )}
  ${(props) => (props.btnType === 'default' ? css`
    color: ${props.theme.darkTextColor};
    background: ${props.theme.grayBg};
    border: 1px solid ${darken(0.2, props.theme.grayBg)};
    &:active, &:focus {
      background: ${lighten(0.1, props.theme.grayBg)};
    }`
    : ''
  )}
  ${(props) => (props.btnType === 'danger' ? css`
    color: white;
    background: ${props.theme.dangerColor};
    border: 1px solid ${darken(0.2, props.theme.dangerColor)};
    &:active, &:focus {
      background: ${lighten(0.1, props.theme.dangerColor)};
    }`
    : ''
  )}
  /* types end */

  /* sizes */
  ${(props) => (props.size === 'xs' ? css`
    font-size: 10px;
    padding: 4px 6px;`
    : ''
  )}
  ${(props) => (props.size === 'sm' ? css`
    font-size: 12px;
    padding: 6px 9px;`
    : ''
  )}
  ${(props) => (!props.size || props.size === 'md' ? css`
    font-size: 14px;
    padding: 8px 12px;`
    : ''
  )}
  ${(props) => (props.size === 'lg' ? css`
    font-size: 18px;
    padding: 12px 18px;`
    : ''
  )}
  ${(props) => (props.size === 'xl' ? css`
    font-size: 22px;
    padding: 18px 24px;`
    : ''
  )}
  /* sizes end */
`;

export default Button;
