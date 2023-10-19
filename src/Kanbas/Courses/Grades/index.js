import db from "../../Database";
import { useParams } from "react-router-dom";
import '../../index.css'
import { FaFileExport, FaFileImport, FaCog, FaFilter } from "react-icons/fa";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="flex-column d-flex flex-grow-1" style={{width:1000}}>
      <div>
          <div className="d-flex justify-content-end grades-buttons">
              <label for="import-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="import-button">
                  <FaFileImport/>
                  Import</button>
              <div className="dropdown">
                  <button className="btn btn-light dropdown-toggle regular" type="button" data-bs-toggle="dropdown"aria-expanded="false">
                      <FaFileExport/>
                      Export
                  </button>
              </div>
              <label for="configure-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="configure-button"><FaCog/></button>
          </div>
          <br/>
          <div>
            <div className="row">
                <div className="col">
                    <label for="student-names" className="form-label"><b>Student Names</b></label><br/>
                    <input className="form-control" id="student-names" placeholder="Search Students" />
                </div>
                <div className="col">
                    <label for="assignment-names" claclassNamess="form-label"><b>Assignment Names</b></label><br/>
                    <input className="form-control" id="assignment-names" placeholder="Search Assignments" />
                </div>
            </div>
        </div>
        <div className="grades-buttons">
            <label for="apply-filters-button"></label>
            <button type="submit" className="btn btn-secondary btn-md regular" id="apply-filters-button"><FaFilter/>Apply Filters</button>
        </div>
        <br/>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered heading" width="100%">
          <thead>
          <tr>
            <th style={{textAlign: "left"}}>Student Name</th>
            {assignments.map((assignment) => (<th className="not-bold">{assignment.title}<br/><font size="2">Out of 100</font></th>))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td className="text-center align-middle">{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td className="text-center align-middle">{grade?.grade || ""}</td>);})}
                </tr>);
            })}
       </tbody></table>
      </div></div>);
}
export default Grades;

