const Tweet = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.username}</h3>
            <p>Tweeted on {props.date}</p>
            <p><b>Tweet: </b>{props.tweet}</p>
        </div>
    )
}