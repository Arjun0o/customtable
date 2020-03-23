// @flow

import React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import DeleteIcon from "../components/svg-icons/delete";
import MenuIcon from "../components/svg-icons/menu";
import EditIcon from "../components/svg-icons/edit";

const Main = styled.div`
  padding: 10px 20px 0px 20px;
`;

const NameColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.span`
  margin-left: 8px;
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  cursor: pointer;
  background: transparent;
`;

const columns = {
  name: {
    key: "name",
    label: "Name",
    content: (item: Object) => (
      <NameColumn>
        <Name>{item.name}</Name>
      </NameColumn>
    )
  },
  email: {
    key: "email",
    label: "Email"
  },
  strength: {
    key: "strength",
    label: "Strength",
    align: "center",
    width: 100
  },
  joinDate: {
    key: "joinDate",
    label: "Join",
    align: "center"
  },
  operations: {
    key: "operations",
    align: "center",
    content: (item: Object) => (
      <>
        <Button>
          <EditIcon color="#000000" />
        </Button>
        <Button>
          <DeleteIcon color="#000000" />
        </Button>
        <Button>
          <MenuIcon color="#000000" />
        </Button>
      </>
    )
  }
};

const userData = [
  {
    id: 1,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 2,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 3,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 4,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 5,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 6,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 7,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 8,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 9,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  },
  {
    id: 10,
    name: "Batman",
    email: "Batman@batman.com",
    strength: 90,
    joinDate: "3 days ago"
  }
];

const rowConfig = {
  uniqueKey: "id",
  css: `
      height: 73px;
      &:hover {
        background-color: rgba(216, 216, 216, 0.2)};
      }
    `,
  onClick: (e, item) => {
    console.log("row was clicked", item);
  }
};

type Props = {
  location: Object
};

const Users = ({ location }: Props) => {
  const queries = new URLSearchParams(location.search);
  return (
    <Main>
      <Table
        rowConfig={rowConfig}
        columns={columns}
        data={userData}
        totalPages={10}
        currentPage={
          queries.has("page") ? parseInt(queries.get("page"), 10) : 1
        }
        basePageLink={""}
      />
    </Main>
  );
};

export default Users;
