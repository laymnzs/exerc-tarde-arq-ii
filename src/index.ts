import express, {Request, Response} from 'express'
import cors from 'cors'
import { CoursesDB } from './types'
import { BaseDatabase } from './database/BaseDataBase'
import { CoursesDatabase } from './database/coursesDataBase'
import { CoursesController } from './controller/CoursesController'
import { coursesRouter } from './router/coursesRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

//TESTE

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

/*REFATORANDO - busca todos os courses -------------  comentado, pois já foi passado para O CoursesDataBase
app.get("/courses", async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string | undefined  //recebe algo do tipo string ou undefined

        comentado, pois já foi passado para O CoursesDataBase


        let courses

        if(q){

        const result: CoursesDB = await BaseDatabase("courses").where("name", "LIKE", `%${q}%`) // se existir o (q), retorna o courses pela primeira letra ou nome
    
        courses = result

    } else{

        const result: CoursesDB = await BaseDatabase("courses") 
        courses = result

    }


    const CoursesDataBase = new CoursesDatabase()

    const coursesDB = await CoursesDataBase.findCourses(q)

    res.status(200).send(coursesDB)
} catch (error) {
    console.log(error)

    if (req.statusCode === 200) {
        res.status(500)
    }
    if (error instanceof Error) {
        res.send(error.message)
    } else {
        res.send("Erro inesperado")
    }
}
})*/


const coursesController = new CoursesController()
//app.get("/courses", userController.createUser) //ctrl x - levar para a rota userRouter



app.use("/courses", coursesRouter)

