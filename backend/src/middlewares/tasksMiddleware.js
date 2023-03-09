const validateTitle = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        return response.status(400).json({ message: "O titulo é obrigatório" });
    }

    if (body.title === "") {
        return response.status(400).json({ message: "O titulo não pode ser vazio." });
    }

    next();

};

const validateStatus = (request, response, next) => {
    const { body } = request;

    if (body.status != 0 && body.status != 1) {
        return response.status(400).json({ message: "O status deve ser 0 ou 1." });

    }
    next();
};


module.exports = {
    validateTitle,
    validateStatus
};