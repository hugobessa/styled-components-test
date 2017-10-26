import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: ${(props) => darken(0.2, props.theme.dangerColor)}
`;

const StyledFormGroupWrapper = styled.div`
  margin-bottom: 20px;
`;

const FormGroup = (props) => {
  const childrenWithErrorFlag = React.Children.map(
    props.children,
    (child) => React.cloneElement(child, {
      hasError: props.errors.length > 0,
    }));

  return (<StyledFormGroupWrapper>
    {childrenWithErrorFlag}
    {props.errors.length > 0 ?
      <ErrorMessage>{props.errors[0]}</ErrorMessage>
      : ''
    }
  </StyledFormGroupWrapper>);
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
};

FormGroup.defaultProps = {
  hasError: false,
  errors: [],
};

export default FormGroup;
