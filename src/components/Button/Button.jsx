import styled from "styled-components";
import redArrow from "assets/red-arrow.svg";
import greenArrow from "assets/green-arrow.svg";

const StyledButton = styled.button`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  border-radius: ${(props) => `${props.radius}px`};
  background: ${(props) => props.bgColor};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => `${props.fontSize}px`};
  line-height: 21px;
  color: ${(props) => props.textColor};
  img {
    margin-right: 8px;
  }
  cursor: pointer;
`;

export const Button = ({
  width,
  height,
  textColor,
  bgColor,
  radius,
  borderColor,
  percent,
  fontSize,
  fontWeight,
  children,
  ...rest
}) => {
  // children để hiện những tag trong tag, rest để sử dụng các property
  return (
    <StyledButton
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      radius={radius}
      borderColor={borderColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {percent && (
        <img src={percent < 0 ? redArrow : greenArrow} alt="arr"></img>
      )}
      {children}
    </StyledButton>
  );
};
Button.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  radius: 40,
  width: 128,
  height: 46,
  fontSize: 16,
};
