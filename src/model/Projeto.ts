import Usuario from "./Usuario";

type Projeto = {
    id: string;
    idGep: number;
    tipo: string;
    pep: string;
    area: string;
    unidade: string;
    descricao: string;
    classificacao: string;
    fase: string;
    responsavel1: Usuario;
    responsavel2: Usuario;
    status: boolean;
    planejador?: Usuario;
    apoio: Usuario;
    jusInativacao?: string;
    idGecon?: string;
    prioridade?: string;
    etapa?: string;
    projetoBasico?: string;
    pbDetalhe?: string;
    iupa?: string;
    iupi?: string;
    objetivo?: string;
    justificativa?: string;
    escopo?: string;
    escopoImplementado?: string;
}

export default Projeto;