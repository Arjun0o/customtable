// @flow

import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  display: inline-block;
  fill: ${props => props.color};
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`;

type Props = {
  children: React.Node,
  color?: String,
  size?: Number,
  viewBox?: string
};

const SvgIcon = ({
  children,
  color = "#000000",
  height = 22,
  width = 22,
  viewBox = "0 0 24 24",
  ...others
}: Props) => (
  <Svg
    color={color}
    height={height}
    width={width}
    viewBox={viewBox}
    {...others}
  >
    {children}
  </Svg>
);

export default SvgIcon;
