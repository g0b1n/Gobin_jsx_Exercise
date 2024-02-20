const App = () => {
    return (
        <div>
            <FirstComponent />
            <SecondComponent name="Lionel Messi"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))