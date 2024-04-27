import contaController from "../controllers/contaController.js"


export function contaRouter(app){
    app.get("/contas", contaController.get)
}