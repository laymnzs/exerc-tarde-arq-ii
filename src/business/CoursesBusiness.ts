import { Request, Response } from "express"
import { CoursesDatabase } from "../database/CoursesDatabase"
import { Courses } from "../models/Courses"
import { CoursesDB } from "../types"


export class CoursesBusiness {
    public getCourses = async (q: string | undefined) => {
        const coursesDatabase = new CoursesDatabase()
        const CoursesDB = await coursesDatabase.findCourses(q) //find vindo do coursesDataBase 

        const courses: Courses[] = CoursesDB.map((CoursesDB) => new Courses(
            CoursesDB.id,
            CoursesDB.name,
            CoursesDB.lessons

        ))

        return courses
    }}