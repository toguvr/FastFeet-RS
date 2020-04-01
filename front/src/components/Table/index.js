import React from 'react';
import PropTypes from 'prop-types';
import { TableContainer, TableOverFlow } from './styles';

export default function Table({ fixed, children }) {
  return (
    <TableOverFlow>
      <TableContainer fixed={fixed}>{children}</TableContainer>
    </TableOverFlow>
  );
}

Table.propTypes = {
  fixed: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Table.defaultProps = {
  fixed: false,
};
