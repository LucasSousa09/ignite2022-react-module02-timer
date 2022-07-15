import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  flex-direction: column;

  width: 90%;
  margin: 3rem auto;
`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  width: 100%;

  margin-top: 2rem;
`

export const TasksTable = styled.table`
  width: 100%;

  border-collapse: collapse;
  border-spacing: 0;

  min-width: 600px;

  th {
    background-color: ${(props) => props.theme['gray-600']};
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme['gray-100']};

    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme['gray-700']};
    border-top: 4px solid ${(props) => props.theme['gray-800']};

    padding: 1rem;
    text-align: left;

    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`
