const pesqueiro_model = (id, cidade, quantidade) => {
    let json = {
        "id": id,
        "cidade": cidade,
        "quantidade": quantidade
    }
    return json
}


module.exports = {
    pesqueiro_model
}