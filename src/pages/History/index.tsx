import { HistoryContainer, TasksTable, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <TasksTable>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Projeto 1</td>
              <td>10 minutos</td>
              <td>Há cerca de um meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 2</td>
              <td>20 minutos</td>
              <td>Há cerca de dois meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 3</td>
              <td>30 minutos</td>
              <td>Há cerca de três meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 4</td>
              <td>40 minutos</td>
              <td>Há cerca de quatro meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
          </tbody>
        </TasksTable>
      </HistoryList>
    </HistoryContainer>
  )
}
