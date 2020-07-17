import React from "react";
import { Link } from "react-router-dom";
import Main from "../../components/main";
import styled from "styled-components";

let Admin = () => {
  return (
    <Main>
      <h1>List of Actions</h1>
      <StyledButton>
        <Link to={`/admin/scheduleForToday`}>Check who is working today</Link>
      </StyledButton>
      <StyledButton>
        <Link to={`/admin/scheduleForWeek`}>
          Check who is working this week
        </Link>
      </StyledButton>
    </Main>
  );
};

const StyledButton = styled.button`
  display: block;
  margin-bottom: 20px;
`;

export default Admin;
