import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledFieldSet = styled.fieldset `
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
  border: none;
`;

const StyledFieldSetLegend = styled.legend `
  width: 100%;
  padding: 0;
  padding-bottom: 10px;
  color: ${(props) => props.theme.darkTextColor};
  font-size: 14px;
  font-weight: 600;
`;

const FieldSet = (props) => {
  const { legend, children } = props;
  return (<StyledFieldSet>
    {legend !== null ? <StyledFieldSetLegend>{legend}</StyledFieldSetLegend> : ''}
    {children}
  </StyledFieldSet>);
};

FieldSet.propTypes = {
  legend: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

FieldSet.defaultProps = {
  legend: null,
  children: '',
};

export default FieldSet;
