import styled from "@emotion/styled";


interface Props {
  show: boolean,
  type?: 'error' |  'success'
}

export const Box = styled.div<Props>`
  display: flex;
  gap: .8rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index:1;
  padding: 1rem;
  background-color: ${props => props.type === 'error'? props.theme.COLORS.danger: props.theme.COLORS.success};
  border-radius: 4px;
  transition: transform .6s, opacity .3s ;
  opacity: ${props => props.show? 1: 0};
  transform: ${props => props.show? 'translatex(0)':'translatex(20%)'};
  pointer-events: ${props => props.show? 'all':'none'};

  .icon{
    color: ${props => props.theme.COLORS.white};
    font-size: ${props => props.theme.FONT_SIZES.lg}
  }
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  gap:10px;
`;

export const Title = styled.span`
  color: ${props => props.theme.COLORS.white};
  font-size: ${props => props.theme.FONT_SIZES.sm};
  font-weight: 700;
  text-transform: capitalize;
`;