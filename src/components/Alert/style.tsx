import styled from "@emotion/styled";


interface Props {
  show: boolean,
  type?: 'error' |  'success'
}

export const Box = styled.div<Props>`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index:1;
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

export const Container = styled.div`
  position: relative;
  .conteudo{
    display: flex;
    gap: .8rem;
    padding: 1rem
  }
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  gap:10px;
  position: relative;
`;

export const Title = styled.span`
  color: ${props => props.theme.COLORS.white};
  font-size: ${props => props.theme.FONT_SIZES.sm};
  font-weight: 700;
  text-transform: capitalize;
`;

export const BarraTempo = styled.div<{w:number}>`
  width: ${props => props.w + '%'};
  height: 4px;
  background-color: #fddc47;
  transition: width 0.1s linear;
  border-radius: 0 0 4px 4px;
`;