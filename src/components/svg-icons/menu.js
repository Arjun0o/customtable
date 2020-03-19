// @flow

import React from "react";
import SvgIcon from "../SvgIcon";

type Props = {};

const Menu = ({ ...others }: props) => (
  <SvgIcon {...others}>
    <g transform="translate(-192)">
      <g transform="translate(192)">
        <path
          class="a"
          d="M194.094,192a2.094,2.094,0,1,0,2.094,2.094A2.1,2.1,0,0,0,194.094,192Zm0,3.49a1.4,1.4,0,1,1,1.4-1.4A1.4,1.4,0,0,1,194.094,195.49Z"
          transform="translate(-192 -185.718)"
        />
        <path
          class="a"
          d="M194.094,384a2.094,2.094,0,1,0,2.094,2.094A2.1,2.1,0,0,0,194.094,384Zm0,3.49a1.4,1.4,0,1,1,1.4-1.4A1.4,1.4,0,0,1,194.094,387.49Z"
          transform="translate(-192 -371.436)"
        />
        <path
          class="a"
          d="M194.094,4.188A2.094,2.094,0,1,0,192,2.094,2.1,2.1,0,0,0,194.094,4.188Zm0-3.49a1.4,1.4,0,1,1-1.4,1.4A1.4,1.4,0,0,1,194.094.7Z"
          transform="translate(-192)"
        />
      </g>
    </g>
  </SvgIcon>
);

export default Menu;
