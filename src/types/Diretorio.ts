import { SubDiretorio } from "./SubDiretorio";
import { Arquivo } from "./Arquivo";

export type Diretorio = {
    id?: number | null,
    nome?: string,
    diretorioPai?: Diretorio | null,
    subDiretorios?: Array<SubDiretorio>,
    arquivos?: Array<Arquivo>,
    dataCadastro?: string,
    dataAtualizacao?: string
}
