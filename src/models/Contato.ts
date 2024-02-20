import * as enums from '../utils/enums/Contato'

class Contato { 
    nome: string
    favoritos: enums.ListaFavorito
    telefone: number
    email: string   
    id: number

    constructor(
        nome: string,
        telefone: number,
        favoritos: enums.ListaFavorito,
        email: string,
        id: number
    ) {
        this.nome = nome
        this.telefone = telefone
        this.favoritos = favoritos
        this.email = email
        this.id = id
    }
}

export default Contato