const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Welcome to {props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name={props.name} exercises={props.exercises}/>
      <Part name={props.name1} exercises={props.exercises1}/>
      <Part name={props.name2} exercises={props.exercises2}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [ 
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  
  {
    name: 'Using props to pass data',
    exercises: 7
  },

  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course={course}/>
      <Content name={parts[0].name} exercises={parts[0].exercises} name1={parts[1].name} exercises1={parts[1].exercises} name2={parts[2].name} exercises2={parts[2].exercises}/>
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}

export default App;
