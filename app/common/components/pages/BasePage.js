import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from 'common/components/grid';


const PageHeader = styled.h1`
  width: 100%;
  padding: 10px 15px;
  border-bottom: 1px solid ${(props) => props.theme.darkTextColor};
  text-align: center;
  color: ${(props) => props.theme.darkTextColor};
  font-size: 16px;
  font-weight: 700;
`;

const PageContent = styled(Container)`
  margin-top: 10px;
`;


class BasePage extends React.Component { // eslint-disable-line
  render() {
    const { pageTitle, children } = this.props;
    return (<div>
      <PageHeader> {pageTitle} </PageHeader>
      <PageContent>
        {children}
      </PageContent>
    </div>);
  }
}

BasePage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

BasePage.defaultProps = {
  pageTitle: '',
  children: '',
};

export default BasePage;
