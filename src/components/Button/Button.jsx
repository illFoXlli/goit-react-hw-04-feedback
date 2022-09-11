import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledButton = styled.button`
  /* color: ${p => p.theme.colors.white};
  background-color: #4caf50; 
  border: none;
  padding: ${p => p.theme.space[4]}px ${p =>
    p.theme.space[5]}px;*/

  *,
  :after,
  :before,
  :after,
  :before {
    border: 0 solid;
    box-sizing: border-box;
  }

  width: 200px;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  line-height: 1.5;
  margin: 0;
  padding: 0;

  :disabled {
    cursor: default;
  }
  :-moz-focusring {
    outline: auto;
  }
  svg {
    display: block;
    vertical-align: middle;
  }
  [hidden] {
    display: none;
  }

  background: #fff;
  border: 1px solid;
  border-radius: 999px;
  box-sizing: border-box;
  color: #000;
  display: block;
  font-weight: 900;
  overflow: hidden;
  padding: 1.2rem 3rem;
  position: relative;
  text-transform: uppercase;
  transition: 0.2s;
  box-shadow: 0 6px 0 -4px #fff, 0 9px 0 -4px #aaa,
    0 12px 0 -4px #000;
  transform: translateY(-5px);

  :hover {
    background-color: gray;
    /* transform: translateY(0px);
    box-shadow: none; */
  }
`;

export function Button(props) {
  const {
    children,
    onIncrementGood,
    onIncrementNeutral,
    onIncrementBad,
    style,
    noStyle,
    clickStyleGood,
    clickStyleNeutral,
    clickStyleBad,
  } = props;
  return (
    <StyledButton
      style={
        clickStyleGood || clickStyleNeutral || clickStyleBad
          ? style
          : noStyle
      }
      onClick={
        onIncrementGood ||
        onIncrementNeutral ||
        onIncrementBad
      }
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  name: PropTypes.objectOf(PropTypes.number.isRequired),
  children: PropTypes.string.isRequired,
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNeutral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
  noStyle: PropTypes.object.isRequired,
  // clickStyleGood: PropTypes.bool.isRequired,
  // clickStyleNeutral: PropTypes.bool.isRequired,
  // clickStyleBad: PropTypes.bool.isRequired,
};
