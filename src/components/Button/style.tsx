import styled from "@emotion/styled";


export const Container = styled.button`
  background-color: ${( props )=> props.theme.COLORS.primary};
  color: ${( props )=> props.theme.COLORS.white};
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${( props )=> props.theme.FONT_SIZES.md};
`;