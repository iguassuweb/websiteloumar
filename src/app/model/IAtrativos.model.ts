// interfaces trabalham como se fosse um contrato uma vez que dizemos que nossa varivel é do tipo desta interface o TS obrigado a passar todos os parametros
// interfaces tambem sao usadas para que o TS entenda que tipo o tipo de objeto que sera retornado para nos

/**
 * TODO: VERIFICAR QUAIS OS TIPOS DE DADOS QUE PODEMOS BUSCAR NA API PARA CRIAR AS INTERFACES
 */
export interface IAtrativos{
id: number;
titulo: string;
validade: Date;
preco: number;
}
