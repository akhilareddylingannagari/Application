import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, Navbar } from 'shards-react';

import UserActions from './Navbar';
import LifepowrLogo from './LifepowrLogo';

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    'main-navbar',
    'bg-white',
    stickyTop && 'sticky-top'
  );

  return (
    <div className={classes}>
      <Container className='p-0'>
        <Navbar type='light' className='align-items-stretch flex-md-nowrap p-0'>
          <LifepowrLogo id='navbarLifepowrLogo' width={60} height={60} />
          <UserActions />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
