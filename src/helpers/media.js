import { css } from 'styled-components';

// Breakpoints: http://getbootstrap.com/docs/4.0/layout/grid/#grid-options
export const screenSizes = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 0,
};

const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screenSizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
