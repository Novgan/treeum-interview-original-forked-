import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: inline-flex;
  gap: 24px;
`;

function Menu({ items }) {
  return (
      <Container>
        {items.map(({ id, to, label }) => (
          <Link key={id} to={to}>
            {label}
          </Link>
        ))}
      </Container>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default Menu;
