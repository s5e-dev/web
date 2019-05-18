import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const Icon = ({
  children,
  className,
  color,
  gradient,
  theme,
  viewBox,
  size,
  style,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      style={style}
      viewBox={viewBox}
    >
      { cloneElement(children, { fill: theme.color[color] }) }
    </svg>
  );
}

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};

Icon.defaultProps = {
  color: 'primary',
  size: 24,
  viewBox: "0 0 24 24"
}

export default withTheme(Icon);
