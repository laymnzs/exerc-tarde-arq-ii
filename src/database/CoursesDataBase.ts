import { CoursesDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

//POO
export class CoursesDatabase extends BaseDatabase {
    public static TABLE_Courses = "courses" //abstrata: criará outras class


    public async findCourses(q: string | undefined) {
        let CoursesDB //função


        if (q) {
            const result: CoursesDB[] = await BaseDatabase
                .connection(CoursesDatabase.TABLE_Courses)
                .where("name", "LIKE", `%${q}%`)

            CoursesDB = result
        } else {
            const result: CoursesDB[] = await BaseDatabase
                .connection(CoursesDatabase.TABLE_Courses)

            CoursesDB = result
        }

        return CoursesDB
    }
}
