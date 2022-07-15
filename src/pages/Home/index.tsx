import { Play } from 'phosphor-react'
import {
  HomeContainer,
  TaskContainer,
  TimerContainer,
  Colon,
  Button,
} from './styles'

export function Home() {
  function handleSubmit() {}

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <TaskContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
          />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" placeholder="00" />

          <span>minutos</span>
        </TaskContainer>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <Colon>:</Colon>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <Button type="submit">
          <Play size={24} weight="bold" />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
