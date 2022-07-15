export function Home() {
  function handleSubmit() {}

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">Começar</button>
      </form>
    </main>
  )
}
