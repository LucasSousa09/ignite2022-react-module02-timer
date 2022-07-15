import { Play } from 'phosphor-react'
import {
  HomeContainer,
  TaskContainer,
  TimerContainer,
  Colon,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  function handleSubmit() {}

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <TaskContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos</span>
        </TaskContainer>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <Colon>:</Colon>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} weight="bold" />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
