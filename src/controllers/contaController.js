import Conta from "../models/Conta.js"

const get = async (req, res) => {
    try {
        const response = await Conta.findAll()
        return res.status(200).send({response})
    } catch (e) {
        console.log(e)
    }
}

export default {
    get
}