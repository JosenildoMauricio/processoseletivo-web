import { Diretorio } from "./Diretorio";
import { Arquivo } from "./Arquivo";

export type SubDiretorio = {
    id?: number | null,
    nome?: string,
    diretorioPai?: Diretorio | null,
    subDiretorios?: Array<Diretorio>,
    arquivos?: Array<Arquivo>,
    dataCadastro?: string,
    dataAtualizacao?: string
}
