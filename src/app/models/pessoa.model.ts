export interface Pessoa {
  id: number;
  nome: string;
  nomeCompleto: string;
  idade: number;
  dataBatismo: string;
  privilegios: string[];
  contato: string;
  endereco: string;
  contatoEmergencia: {
    nome: string;
    parentesco: string;
    telefone: string;
  };
}