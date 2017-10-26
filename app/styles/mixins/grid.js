import theme from 'styles/theme';
import { css } from 'styled-components';


const sizesNames = ['xs', 'sm', 'md', 'lg', 'xl'];


const nextBreakpoint = (name) => {
  const nextIndex = sizesNames.indexOf(name) + 1;
  if (nextIndex < sizesNames.length) {
    return sizesNames[nextIndex];
  }

  return false;
};


const media = Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.breakpoints[label]}) {
      ${css([...args])}
    }
  `;

  return acc;
}, {});


const makeContainerWidths = (props) => (
  Object.keys(props.theme.containerMaxWidths).map((widthName) => {
    const containerWidth = theme.containerMaxWidths[widthName];
    const containerWidthStyle = css`width: ${containerWidth};`;
    const mediaQuery = media[widthName](containerWidthStyle);

    return mediaQuery;
  })
);


const makeContainer = (props) => css`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${(propsInner) =>
    (propsInner.gutterSize ? propsInner.gutterSize : propsInner.theme.gutterSize) / 2}px;
  padding-left: ${(propsInner) =>
    (propsInner.gutterSize ? propsInner.gutterSize : propsInner.theme.gutterSize) / 2}px;

  ${makeContainerWidths(props)}
`;


const makeRow = () => css`
  margin-right: ${(props) => -(props.gutterSize ? props.gutterSize : props.theme.gutterSize) / 2}px;
  margin-left: ${(props) => -(props.gutterSize ? props.gutterSize : props.theme.gutterSize) / 2}px;
  display: flex;
  flex-wrap: wrap;
`;


const makeColumnWidth = (columns) => css`
  flex: 0 0 ${() => (columns / 12) * 100}%;
  max-width: ${() => (columns / 12) * 100}%;
`;


const makeColumn = () => css`
  position: relative;
  width: 100%;
  min-height: 1px; // Prevent collapsing
  padding-right: ${(props) => (props.gutterSize ? props.gutterSize : props.theme.gutterSize) / 2}px;
  padding-left: ${(props) => (props.gutterSize ? props.gutterSize : props.theme.gutterSize) / 2}px;

  ${(props) => sizesNames.map((size) => {
    if (props[size]) {
      return media[size](makeColumnWidth(props[size]));
    } else if (name === 'xs') {
      return css`
        flex: 0 0 100%;
        max-width: 100%;
      `;
    }
    return css('');
  })}
`;


const makeColumnOffsetMargin = (columns) => css`
  margin-left: ${(columns / 12) * 100}%;
`;


const makeColumnOffset = (props) => sizesNames.map((size) => {
  if (props[`${size}Offset`]) {
    return media[size](makeColumnOffsetMargin(props[`${size}Offset`]));
  }
  return css('');
});


export { media, makeContainer, nextBreakpoint,
         makeRow, makeColumn, makeColumnOffset };
