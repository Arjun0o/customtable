// @flow

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RightArrow from "../svg-icons/right-arrow";
import LeftArrow from "../svg-icons/left-arrow";

const Main = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  align-items: center;
`;

const PageLink = styled(Link)`
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  margin: 0 4px;
  text-decoration: underline;
  font: Regular 13px/16px Lato;
  letter-spacing: 0.13px;
  opacity: 1;
  ${props => (props.selected ? `color:#000000` : `color:#bcbcbc`)};
`;

const ArrowLink = styled(Link)`
  font-size: 17px;
  margin: 0px 6px;
  color: #000000;
  display: flex;
  text-decoration: none;
  align-items: center;
  ${props =>
    props.disabled &&
    `
    opacity:0.5s;
    pointer-events:none;
    cursor:default
  `};
`;

const PaginationInfo = styled.p`
  color: #676767;
  font: Regular 13px/16px Lato;
  letter-spacing: 0.91px;
`;

const HighlightedText = styled.span`
  color: #000000;
`;

type Props = {
  currentPage: Number,
  totalPages: Number,
  basePageLink: Number
};

const TablePagination = ({ currentPage, totalPages, basePageLink }: Props) => {
  if (totalPages <= 1) {
    return null;
  }
  const elements = [];
  if (currentPage > 5) {
    elements.push(
      <ArrowLink
        key="back"
        to={`${basePageLink}?page=${currentPage - 1}`}
        disabled={currentPage === 1}
      >
        <LeftArrow />
      </ArrowLink>
    );
  }
  for (let i = 1; i <= totalPages / 2; i++) {
    elements.push(
      <PageLink
        key={i}
        selected={currentPage === 1}
        to={`${basePageLink}?page=${1}`}
      >
        {i}
      </PageLink>
    );
  }
  if (totalPages > 3) {
    elements.push(
      <ArrowLink
        key="next"
        to={`${basePageLink}?page=${currentPage + 1}`}
        disabled={currentPage === totalPages}
      >
        <RightArrow />
      </ArrowLink>
    );
  }
  return (
    <Main>
      <PaginationInfo>
        Showing <HighlightedText>{currentPage}</HighlightedText> of{" "}
        <HighlightedText>6</HighlightedText> of{" "}
        <HighlightedText>{totalPages}</HighlightedText> entries
      </PaginationInfo>
      <div style={{ display: "flex" }}>{elements}</div>
    </Main>
  );
};

export default TablePagination;
