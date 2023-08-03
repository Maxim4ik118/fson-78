import React from 'react';

import PropTypes from 'prop-types';

import { StyledSection } from './Styled';

function Section({ title, children }) {
  return (
    <StyledSection>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
