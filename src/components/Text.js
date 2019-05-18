import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.p`
  color: ${ ({ color, theme }) => theme.color[color] };
  font-weight: ${ ({ weight }) => weight };
  font-family: ${ ({ theme }) => theme.fontFamily }, sans-serif;
  font-size: ${ ({ size }) => size }px;
  opacity: ${ ({ faded }) => faded ? 0.56 : 1 };
  line-height: ${ ({ size, paragraph }) => paragraph ? size + 16 : size }px;
`;

StyledText.propTypes = {
  color: PropTypes.string,
  weight: PropTypes.oneOf([
    '250', // Extra-Light
    '300', // Light
    '400', // Regular
    '500', // Medium
    '600', // Semi-bold
    '700', // Bold
    '900', // Black
  ]),
  paragraph: PropTypes.any,
  size: PropTypes.number,
  faded: PropTypes.any,
}

StyledText.defaultProps = {
  color: 'text',
  faded: undefined,
  paragraph: undefined,
  weight: '500',
  size: 16,
}

export default StyledText
