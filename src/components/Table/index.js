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

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 13px 16px #e4e5e629;
  border: 1px solid #e4ecf4;
  border-radius: 10px;
  opacity: 1;
`;

const StyledHeaderCell = styled.th`
  text-align: ${props => (props.align ? props.align : "left")};
  font: 18px Lato;
  letter-spacing: 0.75px;
  color: #6e8188;
  text-transform: uppercase;
  opacity: 1;
  padding: 1rem 2rem 1rem 2rem;
  border-bottom: 1px solid #e4ecf4;
  border-radius: 10px 10px 0px 0px;
  opacity: 1;
  ${props => props.css && css(...props.css)};
`;

const StyledCell = styled.td`
  text-align: ${props => (props.align ? props.align : "left")};
  ${props => props.css && css(...props.css)};
  padding: 0 2rem;
  font: Medium 17px;
  letter-spacing: 0.85px;
  color: #1c1e29;
  opacity: 1;
`;

const StyledRow = styled.tr`
  border-bottom: 1px solid #e4ecf4;
  ${props => props.css && css(...props.css)};
`;

function TableColumns({ columns }) {
  return (
    <tr>
      {Object.keys(columns).map(key => (
        <StyledHeaderCell
          key={key}
          align={columns[key].align}
          width={columns[key].width}
          css={columns[key].cssHeader}
        >
          {columns[key].label ? columns[key].label : ""}
        </StyledHeaderCell>
      ))}
    </tr>
  );
}
function Cell({ align, width, css, content }) {
  return (
    <StyledCell align={align} width={width} css={css}>
      {content}
    </StyledCell>
  );
}
function Row({ item, onClick, css, columns }) {
  return (
    <StyledRow
      css={css}
      onClick={onClick ? (e: Event) => onClick(e, item) : null}
    >
      {Object.keys(columns).map(key => (
        <Cell
          key={key}
          css={columns[key].css}
          align={columns[key].align}
          content={
            columns[key].content ? columns[key].content(item) : item[key]
          }
        />
      ))}
    </StyledRow>
  );
}
function Body({ data, rowKeyFiled, onRowClick, rowCss, columns }) {
  return (
    <tbody>
      {data.map(row => (
        <Row
          item={row}
          key={row[rowKeyFiled]}
          onClick={onRowClick}
          css={rowCss}
          columns={columns}
        />
      ))}
    </tbody>
  );
}
const Table = ({
  columns,
  data = [],
  rowConfig: { uniqueKey = "id", css, onClick } = {},
  currentPage,
  totalPages,
  basePageLink
}: Props) => {
  return (
    <Main>
      <StyledTable>
        <thead>
          <TableColumns columns={columns} />
        </thead>
        <Body
          columns={columns}
          data={data}
          rowKeyFiled={uniqueKey}
          onRowClick={onClick}
          rowCss={css}
        />
      </StyledTable>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePageLink={basePageLink}
      />
    </Main>
  );
};
export default Table;
