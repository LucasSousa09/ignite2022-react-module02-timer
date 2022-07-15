import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 5rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    color: ${(props) => props.theme['gray-100']};

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
