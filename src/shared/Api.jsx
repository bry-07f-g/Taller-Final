import { useEffect, useState } from "react"
import axios from "axios"

import {  Card, CardContent, Typography, Box, Button } from "@mui/material"
import { Height, Margin } from "@mui/icons-material"

export const Api = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [info, setInfo] = useState({})
    const [query, setQuery] = useState('')

    useEffect(() => {
        const source = axios.CancelToken.source()

        axios
            .get("https://rickandmortyapi.com/api/character", { params: { page, name: query }, cancelToken: source.token})
            .then(({ data }) => {
                setCharacters(data.results || [])
                setInfo(data.info || {})
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                if (err.response?.status === 404) {
                    setCharacters([])
                    setInfo({})
                    return
                }
                console.error(err)
            })
        return () => source.cancel();

    }, [page, query])
    return (
        <Box sx={Box1style}>
            <Typography sx={tituloStyle}>Api</Typography>

            <input style={inputSyle} className="form-control" placeholder="Buscar personaje" value={query} onChange={(e) =>
                (setQuery(e.target.value.trim()), setPage(1))}/>

                

                <Box sx={Box2style}>

                {characters.map((char) => (
                        <Card sx={Cardstyle} key={char.id} >
                        {char.name}

                    <img src={char.image} alt={char.name} />
                    
                        <p>{char.status} - {char.species}</p>
                        </Card>

                ))}

                </Box>

                <Button sx={Buttonstyle} onClick={() =>setPage(page - 1)} disabled={!info.prev}>Anterior</Button>
                <Button sx={Buttonstyle} onClick={() =>setPage(page + 1)} disabled={!info.next}>Siguiente</Button>
        </Box>
    )
}

const Box1style = {
    width: "100%",
    height: "2400px",
    padding: "20px",
    textAlign: "center"
}

const Box2style = {
    display: "grid",
    gridTemplateColumns: {
    xs: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)"
    },
    gap: "20px",
    margin: "20px"
}

const Cardstyle = {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    borderRadius: "15px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
    transition: "0.3s",

    "&:hover": {
    transform: "scale(1.05)"
    }
}

const tituloStyle = {
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    marginBottom: "10px",
    color: "#000000"
}

const inputSyle = {
    width: "80%",
    height: "1.2%",
    textAlign: "center",
    borderRadius: "15px",
    border: "none"
}

const Buttonstyle = {
    width: "30%",
    backgroundColor: "#ffffff",
    color: "#52616B",
    borderRadius: "18px",
    boxShadow: "2px 4px 6px rgba(0,0,0,0.25)",
    cursor: "pointer",
    transition: "background-color 0.4s ease",
    margin: "20px",

    "&:hover": {
        backgroundColor: "#52616B",
        color: "#C9D6DF"
        },
    
    Height: {
        xs: "22px",
        sm: "26px",
        md: "30px"
    },

    fontSize: {
        xs: "0.7rem",
        sm: "0.8rem",
        md: "0.9rem"
    },

}