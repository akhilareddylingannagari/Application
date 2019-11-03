import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';

import MainNavbar from '../components/layout/Navbar/MainNavbar';
import MainFooter from '../components/layout/Footer/Footer';

const DefaultLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row className='header-row'>
      <Col lg={{ size: 12 }} md={{ size: 12 }} sm='12'>
        {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
