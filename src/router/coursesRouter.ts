import express from "express";
import { CoursesController } from "../controller/CoursesController";

export const coursesRouter = express.Router();

const coursesController = new CoursesController() // instancieiou p/ ter acesso aos métodos

coursesRouter.get("/", coursesController.getCourses) // próximo caminho dps do (get: /courses), virá a barra
//coursesRouter.post("/", coursesController.createCourses)
