// @flow

import React from "react";
import SvgIcon from "../SvgIcon";

type Props = {};

const RightArrow = ({ ...others }: props) => (
  <SvgIcon {...others}>
    <g transform="translate(-33.4 16.887) rotate(-90)">
      <path
        class="a"
        d="M16.78,33.508a.371.371,0,0,0-.524,0l-4.607,4.616L7.032,33.508a.37.37,0,1,0-.524.524L11.378,38.9a.362.362,0,0,0,.262.108A.377.377,0,0,0,11.9,38.9l4.869-4.869a.363.363,0,0,0,.009-.524Z"
        transform="translate(0 0)"
      />
    </g>
  </SvgIcon>
);

export default RightArrow;
