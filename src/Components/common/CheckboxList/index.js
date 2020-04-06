import React from "react";

import PropTypes from "prop-types";

const CheckboxList = ({
  type = "checkbox",

  name,

  checked = false,

  onChange
}) => <input type={type} name={name} checked={checked} onChange={onChange} />;

CheckboxList.propTypes = {
  type: PropTypes.string,

  name: PropTypes.string.isRequired,

  checked: PropTypes.bool,

  onChange: PropTypes.func.isRequired
};

export default CheckboxList;
