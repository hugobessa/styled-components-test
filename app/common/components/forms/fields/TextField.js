import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';


const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-width: 1px;
  border-style: solid;

  border-radius: ${(props) => props.theme.fieldsBorderRadius};

  border-color: ${(props) => (props.hasError ?
    props.theme.dangerColor
    : props.theme.defaultBorderColor
  )};

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ?
      lighten(0.1, props.theme.dangerColor)
      : props.theme.defaultFocusBorderColor
    )};
  }

`;

const TextField = (props) => {
  const { onChange, ...otherProps } = props;
  return (<StyledInput
    onChange={(event) => {
      event.preventDefault();
      onChange(event.target.value);
    }}

    {...otherProps}
  />);
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  value: '',
  placeholder: '',
};


export default TextField;
