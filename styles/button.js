import styled, { css } from "styled-components";

const Button = styled.button`
  width: 112px;
  height: 36px;
  color: #f2994a;
  background: transparent;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 3px;
  border: 1px solid #f2994a;
  cursor: pointer;

  ${(props) =>
    props.solid &&
    css`
      color: #ffffff;
      background: #f2994a;
      box-shadow: -11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.13);
    `}

  ${(props) =>
    props.navbtn &&
    css`
      margin-left: 20px;
    `}
`;

export default Button;
