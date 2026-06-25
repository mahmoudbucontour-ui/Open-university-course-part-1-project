

function App() {
  return (
    <div>
      <h1>Give Feedback</h1>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>All</button>
      <button>Average</button>
      <button>Positive</button>
      <h2>Feedback Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>1</td>
          </tr>
           <tr>
            <td>All</td>
            <td>8</td>
          </tr>
           <tr>
            <td>Positive</td>
            <td>62.5%</td>
          </tr>
           <tr>
            <td>Average</td>
            <td>0.5%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
