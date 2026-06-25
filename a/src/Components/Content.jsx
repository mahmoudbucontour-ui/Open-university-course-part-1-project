
import '../index.css'
function Content() {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  return (
    <div>
     <div className="content">{part1} <br />
        {part2} <br />
          {part3} <br />
          </div>
    </div>
  )
}

export default Content
