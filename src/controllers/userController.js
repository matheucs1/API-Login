const { 
    createUser,
    getUsers,
    getById, 
    updateUser, 
    removeUser 
} = require("../repositories/user");

const bcrypt = require("bcrypt");
const { userValidation } = require("../validations/user");

exports.create = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const data = userValidation.parse(req.body)
        const user = await createUser(data);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.get = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getId = async (req, res) => {
    try {
        const user = await getById(Number(req.params.id));
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.update = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const users = await updateUser(Number(req.params.id), req.body);
        res.status(200).send("Usúario atualizado com sucesso!")
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.remove = async (req, res) => {
    try {
        await removeUser(Number(req.params.id));
        res.status(200).send("Usúario deletado com sucesso!");
    } catch (e) {
        res.status(400).send(e);
    }
};