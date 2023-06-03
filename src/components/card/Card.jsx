export default function Card(props){

    return(
        <>
            <h1>Cancion</h1>
            <div>
                <h4>{props.artista}</h4>
                <h4>{props.cancion}</h4>
                <h4>{props.album}</h4>
            </div>
        </>
    )
}