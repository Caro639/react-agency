import PropTypes from "prop-types";
import { validateProps } from "../../utils/propValidation";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useState } from "react";
import { useTheme } from "../../utils/hooks";

const CardLabel = styled.span`
  color: ${({ theme }) =>
    theme === "light"
      ? colors.primary
      : "#ffffff"};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardTitle = styled.span`
  color: ${({ theme }) =>
    theme === "light" ? "#000000" : "#ffffff"};
  font-size: 22px;
  font-weight: normal;
  margin-top: 10px;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === "light"
      ? colors.backgroundLight
      : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const cardPropTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

function Card({ label, title, picture }) {
  // Validation automatique de toutes les props
  validateProps(
    { label, title, picture },
    cardPropTypes,
    "Card"
  );

  const { theme } = useTheme();
  const [isFavorite, setIsFavorite] =
    useState(false);
  const star = isFavorite ? "⭐️" : "";

  return (
    <CardWrapper
      data-testid="card-wrapper"
      theme={theme}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle theme={theme}>
        {star} {title} {star}
      </CardTitle>
    </CardWrapper>
  );
}

Card.propTypes = cardPropTypes;

export default Card;
