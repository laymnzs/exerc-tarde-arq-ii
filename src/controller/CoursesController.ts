import { Request, Response } from "express"
import { CoursesBusiness } from "../business/CoursesBusiness"
import { CoursesDatabase } from "../database/coursesDataBase"
import { coursesRouter } from "../router/coursesRouter"
import { BaseError } from "../erros/BaseError"

export class CoursesController {
    public getCourses = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string | undefined  //recebe algo do tipo string ou undefined

            /* comentado, pois já foi passado para O CoursesDataBase
    
    
            let courses
    
            if(q){
    
            const result: CoursesDB = await BaseDatabase("courses").where("name", "LIKE", `%${q}%`) // se existir o (q), retorna o courses pela primeira letra ou nome
        
            courses = result
    
        } else{
    
            const result: CoursesDB = await BaseDatabase("courses") 
            courses = result
    
        }*/


            const coursesBusiness = new CoursesBusiness()
            const output = await coursesBusiness.getCourses(q)

            res.status(200).send(output)
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
    }
}

/*public createCourses = async (req: Request, res: Response) => {
    try {
        const input = {
            id: req.body.id,
            name: req.body.name,
            lessons: req.body.lessons

        }

        const coursesBusiness = new CoursesBusiness()
        const output = await coursesBusiness.createCourses(input)

        res.status(201).send(output)
    } catch (error) {
        console.log(error)

        if (error instanceof BaseError) {//antes era Error, agora é BaseError
            res.status(error.statusCode).send(error.message) //o valor do erro e a mensagem do erro

        } else {
            res.status(500).send("BaseError - Erro inesperado")
        }
    }
}
}*/

