export interface Pessoa {
  id: number;
  nome: string;
  genero: string;
  dataNascimento: string;
  telefone: string;
  email: string;

  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;

  batizado: boolean;
  dataBatismo: string;
  grupo: string;
  ungido: boolean;
  pioneiro: string;
  privilegio: string;
  
  emergNome: string;
  emergParentesco: string;
  emergTelefone: string;
  emergEmail: string;
}