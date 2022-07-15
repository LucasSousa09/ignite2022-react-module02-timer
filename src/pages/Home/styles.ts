import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin: 4.5rem auto;
`

export const TaskContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 0.5rem;

  font-size: 1.125rem;

  flex-wrap: wrap;

  label,
  span {
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }

  input {
    background: ${(props) => props.theme['gray-800']};
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid ${(props) => props.theme['gray-500']};

    font-weight: 700;

    text-align: center;

    color: ${(props) => props.theme['gray-100']};

    &:first-of-type {
      width: 15.5rem;
    }

    &:last-of-type {
      width: 4.5rem;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const TimerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  margin: 3.6rem 0;

  font-family: 'Roboto Mono';
  font-size: 10rem;
  line-height: 8rem;

  text-align: center;

  span {
    padding: 2rem 1rem;

    border-radius: 8px;
    background: ${(props) => props.theme['gray-700']};
  }
`

export const Colon = styled.p`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  width: 100%;

  border: none;
  border-radius: 4px;

  padding: 1rem;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
`
