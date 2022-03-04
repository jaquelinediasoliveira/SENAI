const cliente = (id, nome, valor, status) => {
    let json ={
        "id": id,
        "nome": nome,
        "valor": valor,
        "status": status
    }
    return json
}

module.exports = {
    cliente
}