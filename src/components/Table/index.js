// @flow

import React from "react";
import styled, { css } from "styled-components";
import TablePagination from "../TablePagination";

type Props = {
  columns: {
    [key: String]: {
      key: String,
      label?: String,
      align?: "center" | "left" | "right",
      width?: Number,
      content?: Function,
      css?: String,
      cssHeader?: String
    }
  },
  data?: Array<Object>,
  rowConfig?: {
    uniqueKey?: String,
    onClick?: Function,
    css?: String
  },
  currentPage: Number,
  totalPages: Number,
  basePageLink: String
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const T = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody:before {
    content: "-";
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

const Th = styled.th`
  text-align: ${props => (props.align ? props.align : "left")};
  font-size: 18px;
  font-weight: 700;
  opacity: 0.65;
  ${props => props.css && css(...props.css)};
`;

const Td = styled.td`
  text-align: ${props => (props.align ? props.align : "left")};
  ${props => props.css && css(...props.css)};
`;

const Tr = styled.tr`
  border-bottom: 2px solid #000000;
  ${props => props.css && css(...props.css)};
`;

const Table = ({
  columns,
  data = [],
  rowConfig: { uniqueKey = "id", css, onClick } = {},
  currentPage,
  totalPages,
  basePageLink
}: Props) => {
  const headerColumns = () =>
    Object.keys(columns).map(key => (
      <Th
        key={key}
        align={columns[key].align}
        width={columns[key].width}
        css={columns[key].cssHeader}
      >
        {columns[key].label ? columns[key].label : ""}
      </Th>
    ));

  const cell = (key, item) => (
    <Td
      key={key}
      align={columns[key].align}
      width={columns[key].width}
      css={columns[key].css}
    >
      {columns[key].content ? columns[key].content(item) : item[key]}
    </Td>
  );
  const row = (item: Object) => (
    <Tr
      key={item[uniqueKey]}
      css={css}
      onClick={onClick ? (e: Event) => onClick(e, item) : null}
    >
      {Object.keys(columns).map(key => cell(key, item))}
    </Tr>
  );
  return (
    <Main>
      <T>
        <thead>
          <tr>{headerColumns()}</tr>
        </thead>
        <tbody>{data.map(i => row(i))}</tbody>
      </T>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePageLink={basePageLink}
      />
    </Main>
  );
};

export default Table;
