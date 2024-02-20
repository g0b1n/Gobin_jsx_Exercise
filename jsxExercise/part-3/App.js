const App = () => {
    return (
        <div>
           <Person name="Lionel Messi" age={14} hobbies={["Football", "Music", "Gaming"]} />
           <Person name="Ronaldo" age={20} hobbies={["Cooking", "Dancing"]} />
           <Person name="Ramos" age={40} hobbies={["Playing football ⚽️", "Dreaming", "Walking", "Video Games"]} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))