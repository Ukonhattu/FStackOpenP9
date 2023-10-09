import { CoursePart, CoursePartBasic, CoursePartBackground, CoursePartGroup } from "./types"
import { assertNever } from "../utils"

const Part = ({coursePart}: {coursePart: CoursePart}) => {
    switch (coursePart.kind) {
        case "basic":
            return <RenderCoursePartBasic coursePart={coursePart} />
        case "group":
            return <RenderCoursePartGroup coursePart={coursePart} />
        case "background":
            return <RenderCoursePartBackground coursePart={coursePart} />
        default:
            return assertNever(coursePart);
    }
}

const RenderCoursePartBasic = ({coursePart}: {coursePart: CoursePartBasic}) => {
    return (
        <div>
            <h3>
                {coursePart.name} {coursePart.exerciseCount}
            </h3>
            <p>
                {coursePart.description}
            </p>
        </div>
    )
}

const RenderCoursePartGroup = ({coursePart}: {coursePart: CoursePartGroup}) => {
    return (
        <div>
            <h3>
                {coursePart.name} {coursePart.exerciseCount}
            </h3>
            <p>
                project exercises {coursePart.groupProjectCount}
            </p>
        </div>
    )
}

const RenderCoursePartBackground = ({coursePart}: {coursePart: CoursePartBackground}) => {
    return (
        <div>
            <h3>
                {coursePart.name} {coursePart.exerciseCount}
            </h3>
            <p>
                {coursePart.description}
            </p>
            <p>
                {coursePart.backgroundMaterial}
            </p>
        </div>
    )
}

export default Part;