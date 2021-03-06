import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Sidebar from '../common/sidebar/Sidebar';

const SidebarLayout = ({ children, industry }) => (
  <Container type="page">
    <div type="sm" className="grid grid-cols-1 lg:grid-cols-12  gap-x-24">
      <div className="lg:col-span-7">{children}</div>
      <div className="lg:col-span-5 lg:h-full">
        <Sidebar industry={industry} />
      </div>
    </div>
  </Container>
);

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;
