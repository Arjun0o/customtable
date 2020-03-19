// @flow

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RightArrow from "../svg-icons/right-arrow";
import LeftArrow from "../svg-icons/left-arrow";

const Main = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-around;
  align-items: center;
`;

const PageLink = styled(Link)`
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  margin: 0 4px;
  text-decoration: underline;
  ${props => (props.selected ? `color:#20b2aa` : `color:#000000`)};
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

type Props = {
  currentPage: Number,
  totalPages: Number,
  basePageLink
};

const TablePagination = ({ currentPage, totalPages, basePageLink }: Props) => {
  if (totalPages <= 1) {
    return null;
  }
  const elements = [];
  if(totalPages > 4){
      elements.push(
          <PageLink
            key="back"
            to={`${basePageLink}?page=${currentPage -1}`}
            disabled={currentPage === 1}
          >
              <LeftArrow/>
          </PageLink>
      );
  }
  for (let i = 1; i <= totalPages; i++){
          elements.push(
              <pageLink
                key={1}
                selected={currentPage === 1}
                to={`${basePageLink}?page=${1}`}
              >
                  {i}
              </pageLink>
          ); 
  }
  if(totalPages >3){
    elements.push(
        <PageLink key="next" to={`${basePageLink}?page=${currentPage +1}`} disabled={currentPage === totalPages}>
            <RightArrow/>
        </PageLink>
       );
    }
  return <Main>{elements}</Main>
};

export default TablePagination;
