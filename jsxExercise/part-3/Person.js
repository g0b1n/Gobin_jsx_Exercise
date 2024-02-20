
const Person = (props) => {
    let msg;

    if (props.age < 18){
        msg = "MUST BE 18 TO VOTE"
    } 
    else {
        msg = "PLEASE GO VOTE"
    };

    // name length check
    let PersonName = props.name.length > 8 ? props.name.substring(0, 6) : props.name

    return (
        <div>
            <h3><b>Name: </b>{PersonName}</h3>
            <h3><b>Age: </b>{props.age}</h3>
            <ul>
                {props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
            </ul>
            <h1>{msg}</h1>

        </div>
    )
}