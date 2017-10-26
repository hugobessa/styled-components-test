import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PanelWrapper = styled.div`
  width: 100%;
`;

const PanelHeader = styled.header`
  width: 100%;
  padding: 8px 15px;
  background-color: ${(props) => props.theme.primaryColor};
  text-align: center;
  color: white;
`;

const PanelBody = styled.section`
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.lightGrayBg};
  color: ${(props) => props.theme.darkTextColor};
`;


export default class Panel extends React.Component { // eslint-disable-line
  render() {
    const { title, children } = this.props;
    return (<PanelWrapper>
      <PanelHeader>{title}</PanelHeader>
      <PanelBody> {children} </PanelBody>
    </PanelWrapper>);
  }
}

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Panel.defaultProps = {
  title: '',
  children: '',
};
