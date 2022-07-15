import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin: 4.5rem auto;
`

export const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex;

  gap: 0.5rem;

  font-size: 1.125rem;

  flex-wrap: wrap;

  label,
  span {
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-800']};
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-size: 1.125rem;
  font-weight: 700;

  text-align: center;

  color: ${(props) => props.theme['gray-100']};

  padding: 0 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  /* &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  } */
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4.5rem;
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

export const StartCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  width: 100%;

  border: none;
  border-radius: 8px;

  padding: 1rem;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme['green-700']};
  }
`
