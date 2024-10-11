import PropTypes from 'prop-types';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// Defines how tooltip text will appear
const TooltipOverlay = ({ tooltipText, children }) => (
  <OverlayTrigger placement="top" overlay={<Tooltip>{tooltipText}</Tooltip>}>
    {children}
  </OverlayTrigger>
);

TooltipOverlay.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TooltipOverlay;
