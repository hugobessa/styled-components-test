import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';


const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.defaultBorderColor};
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

const TextArea = (props) => {
  const { onChange, ...otherProps } = props;

  return (<StyledTextArea
    onChange={(event) => {
      event.preventDefault();
      onChange(event.target.value);
    }}
    {...otherProps}
  />);
};

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
};


export default TextArea;
