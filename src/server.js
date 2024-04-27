import Express from "express"
import Routes from "./routes/index.js"

const app = Express()
const port = 3030


Routes(app)
app.use((_, res) => {
    return res.status(404).send({message: "Nao foi possivel encontrar a pagina"})
})


app.listen(port, () => {
    console.log("App rodando na porta 3030")
})