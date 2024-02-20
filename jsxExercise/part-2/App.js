const App = () => {
    return (
        <div>
            <Tweet name="Lionel Messi" username="leoMessi10" date="02/20/2024" tweet="I am the greatest player of all time" />
            <Tweet name="Lionel Messi" username="leoMessi10" date="02/20/2024" tweet="I am bettern than C. Ronaldo" />
            <Tweet name="Lionel Messi" username="leoMessi10" date="02/20/2024" tweet="I won World Cup. C. Ronaldo has not!!!" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))