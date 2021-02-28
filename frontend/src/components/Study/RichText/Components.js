import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from '@emotion/css';

export const Button = React.forwardRef(
  ({ className, active, reversed, ...props}, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
      ? active
        ? 'white'
        : '#aaa'
      : active
        ? 'black'
        : '#ccc'};
        `
      )}
    />
  )
);

export const Icon = React.forwardRef(
  ({ className, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        'material-icons',
        className,
        css`
          font-size: 18px;
          vertical-align: text-bottom;
        `
      )}
    />
  )
);

export const Menu = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
            & > * {
              display: inline-block;
            }
            & > * + * {
              margin-left: 15px;
            }
          `
      )}
    />
  )
);

export const Toolbar = React.forwardRef(
  ({ className, ...props }, ref) => (
    <Menu
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        `
      )}
    />
  )
);

Button.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  reversed: PropTypes.bool
};

Icon.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.object,
};

Menu.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.object,
};

Toolbar.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.object,
};

Button.displayName = 'Button';
Icon.displayName = 'Icon';
Menu.displayName = 'Menu';
Toolbar.displayName = 'Toolbar';
