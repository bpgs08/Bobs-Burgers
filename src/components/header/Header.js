import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, media } from "../../utils/theme";

const Header = () => {
  return (
    <Flex>
      <LinkWrapper>
        <LiItem>
          <Link to={`/`}>Burgers</Link>
        </LiItem>
        <LiItem>
          <Link to={`/admin`}>Bob's Admin</Link>
        </LiItem>
      </LinkWrapper>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.black};
`;

const LinkWrapper = styled.ul`
  display: flex;
  padding-left: 0px;
  margin-left: auto;
  align-items: center;
  li {
    list-style: none;
  }
`;

const LiItem = styled.li`
  a,
  div {
    color: ${colors.white};
    text-decoration: none;
    padding: 0px 8px;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    ${media.tablet`
      padding: 20px 20px;
      font-size: 18px;
      letter-spacing: 5px;
    `}
  }
`;

export default Header;
