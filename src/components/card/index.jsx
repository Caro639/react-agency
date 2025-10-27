import PropTypes from "prop-types";
import { validateProps } from "../../utils/propValidation";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const CardLabel = styled.span`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardTitle = styled.span`
  color: #333;
  font-size: 18px;
  font-weight: normal;
  margin-top: 10px;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
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

  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

Card.propTypes = cardPropTypes;

export default Card;
