import React from 'react';
import styled from 'styled-components';

const StyledLoaderWrapper = styled.div`
  text-align: center;
  margin: 40px 0;
`;

const Spinner = () => (<StyledLoaderWrapper>
  <i className="mdi mdi-spin mdi-loading mdi-48px" />
</StyledLoaderWrapper>);

export default Spinner;
