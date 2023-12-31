import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";

import Menu from "./Menu";

const menu = [
  {
    id: "home",
    to: "/",
    label: "Головна",
  },
  {
    id: "task1",
    to: "/task1",
    label: "Завдання 1",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function Layout({ children }) {
  return (
    <Container>
      <div>
        <Menu items={menu} />
      </div>
      <div>{children}</div>
    </Container>
  );
}

Layout.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default Layout;
