"use client";

import Sistema from "@/components/Sistema";
import { Diretorio } from "@/types/Diretorio";
// import { list } from "@/data/dados";

import { useEffect, useState } from "react";

function Page() {

    const [carregando, setCarregando] = useState(true);
    const [diretorio, setDiretorio] = useState<Diretorio>();

    const getDados = async () => {
        setCarregando(true);
        try {
            const res = await fetch("http://localhost:8080/api/diretorios/raiz");
            const json = await res.json();
            setDiretorio(json);
        } catch (error) {
            console.log(`Erro ao buscar diretórios. ${error}`)
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        getDados();
    },[])

    const appStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: 18,
        padding: 25
    };

    return(
        <div style={appStyle}>
            <h1 className="App" style={titleStyle}>Explorador de Arquivos</h1>
            {carregando &&
                <h1 style={{ marginLeft: '40px' }}>Carregando…</h1>
            }
            {!carregando && diretorio && (
                <>
                    {diretorio &&(
                        <Sistema diretorio={diretorio}/>
                    )}
                </>
            )}
            {!carregando && diretorio === undefined && 
                <h1 style={{ marginLeft: '40px' }}>Erro ao carregar dados.</h1>
            }
        </div>
    );
}

export default Page;