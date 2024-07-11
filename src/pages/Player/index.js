import styles from "./Player.module.css"
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Player (){
    const [video, setVideo] = useState([])
    const parametros = useParams(); 
    
    useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/SarahLuthien/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados) 
        }) 
    }, [parametros])

    if (!video) {
        <PaginaNaoEncontrada/>
    }

    return(
        <>
        <Banner imagem="player"/>
        <Titulo >
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
        <iframe 
        width="1236" 
        height="695" 
        src={video.link}
        title={video.titulo}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </section>
        </>
    )

}


export default  Player;
