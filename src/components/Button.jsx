import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

const Button = ({ children, onClick }) => (
  <StyledBtn type="button" onClick={onClick}>
    {children}
  </StyledBtn>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
