import { Diretorio } from "@/types/Diretorio";

export const list: Diretorio = 
{
    "id": 1,
    "nome": "DIRETORIO RAIZ",
    "diretorioPai": null,
    "subDiretorios": [
        {
            "id": 2,
            "nome": "Documentos",
            "subDiretorios": [
                {
                    "id": 5,
                    "nome": "Documentos variados",
                    "subDiretorios": [],
                    "arquivos": [
                        {
                            "id": 1,
                            "nome": "documento.pdf",
                            "dataCadastro": "2024-09-24T23:37:48Z",
                            "dataAtualizacao": "2024-09-24T23:37:48Z"
                        },
                        {
                            "id": 2,
                            "nome": "algum documento.txt",
                            "dataCadastro": "2024-09-24T23:38:33Z",
                            "dataAtualizacao": "2024-09-24T23:38:33Z"
                        }
                    ],
                    "dataCadastro": "2024-09-24T23:36:36Z",
                    "dataAtualizacao": "2024-09-24T23:36:36Z"
                },
                {
                    "id": 6,
                    "nome": "Certidões",
                    "subDiretorios": [],
                    "arquivos": [],
                    "dataCadastro": "2024-09-24T23:36:47Z",
                    "dataAtualizacao": "2024-09-24T23:36:47Z"
                }
            ],
            "arquivos": [],
            "dataCadastro": "2024-09-24T23:34:47Z",
            "dataAtualizacao": "2024-09-24T23:34:47Z"
        },
        {
            "id": 3,
            "nome": "Musica",
            "subDiretorios": [],
            "arquivos": [
                {
                    "id": 3,
                    "nome": "minha musica.mp3",
                    "dataCadastro": "2024-09-24T23:39:35Z",
                    "dataAtualizacao": "2024-09-24T23:39:35Z"
                }
            ],
            "dataCadastro": "2024-09-24T23:34:58Z",
            "dataAtualizacao": "2024-09-24T23:34:58Z"
        },
        {
            "id": 4,
            "nome": "Videos",
            "subDiretorios": [],
            "arquivos": [],
            "dataCadastro": "2024-09-24T23:35:08Z",
            "dataAtualizacao": "2024-09-24T23:35:08Z"
        }
    ],
    "arquivos": [],
    "dataCadastro": "2024-09-24T23:33:08Z",
    "dataAtualizacao": "2024-09-24T23:33:08Z"
};