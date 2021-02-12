import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button as MuiButton } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    borderRadius: '50%',
    maxWidth: '75px',
    maxHeight: '75px',
    minHeight: '75px',
    minWidth: '75px',
    margin: '4px',
    fontSize: '1.8rem',
  },
  zeroButton: {
    width: '158px',
    borderRadius: '65px',
    maxWidth: '158px',
    '& .MuiButton-label': {
      justifyContent: 'left',
      marginLeft: '15px',
    },
  },
  topPanel: {
    backgroundColor: '#a5a5a5',
  },
});

const Button = ({
  name,
  zeroButton,
  topPanel,
  rightPanel,
  clickHandler,
}) => {
  const classes = useStyles();

  const isItZero = (zeroBtn, topPanel) => {
    if (zeroBtn === 'true') {
      return `${classes.root} ${classes.zeroButton}`;
    }
    if (topPanel === 'true') {
      return `${classes.root} ${classes.topPanel}`;
    }
    return `${classes.root}`;
  };

  const primaryOrSecondary = rightPanel => {
    if (rightPanel === 'true') {
      return 'secondary';
    }
    return 'primary';
  };

  const handleClick = btnName => {
    clickHandler(btnName);
  };

  return (
    <MuiButton
      className={isItZero(zeroButton, topPanel)}
      color={primaryOrSecondary(rightPanel)}
      variant="contained"
      name={name}
      onClick={handleClick}
    >
      {name}
    </MuiButton>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  zeroButton: PropTypes.string,
  topPanel: PropTypes.string,
  rightPanel: PropTypes.string,
};

Button.defaultProps = {
  zeroButton: 'false',
  topPanel: 'false',
  rightPanel: 'false',
};

export default Button;
