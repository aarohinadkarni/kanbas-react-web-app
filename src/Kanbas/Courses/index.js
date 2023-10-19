import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaBars, FaGlasses } from "react-icons/fa";
import '../index.css'


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  return (
    <div>
      <div class="banner d-none d-md-block">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href=""><FaBars/> {course.number}.{course._id}</a></li>
              <li className="breadcrumb-item active" aria-current="page">{pathname.slice(pathname.lastIndexOf("/"), pathname.length).substring(1,pathname.length)}</li>
          </ol>
        </nav>
        <label for="student-view-button"></label>
        <button type="submit" className="btn btn-secondary btn-sm regular float-end" id="student-view-button">
            <FaGlasses/>
            &nbsp;
            Student View
        </button>
        <hr style={{width: "100%"}}></hr>
      </div>
      <div class="wd-home-flex-row-container">
        <CourseNavigation />
        <div>
          <div
            // style={{
            //   left: "320px",
            //   top: "200px",
            // }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
              />
              <Route path="Grades" element={<Grades/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;