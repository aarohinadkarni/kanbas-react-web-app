import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaPlus, FaEllipsisV, FaFileAlt, FaCheckCircle} from "react-icons/fa";
import './index.css'
import '../../index.css'


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="d-flex justify-content-start float-start w-25 search-assignments">
          <label for="assignments-search"></label>
          <input className="form-control" type="text" id="assignments-search" placeholder="Search for Assignments"/>
      </div>
      <div className="d-flex justify-content-end course-buttons">
        <label for="group-button"></label>
        <button type="submit" className="btn btn-secondary btn-sm regular" id="group-button">
            <FaPlus style={{color:"black"}}/>
            &nbsp;
            Group</button>
        &nbsp;
        <label for="assignments-button"></label>
        <button type="submit" className="btn btn-danger btn-sm" id="assignments-button">
          <FaPlus style={{color:"white"}}/>
          &nbsp;
          Assignment
        </button>
        &nbsp;
        <label for="ellipsis-button"></label>
        <button type="submit" className="btn btn-secondary btn-sm regular py-2" id="ellipsis-button">
        <FaEllipsisV style={{color:"black"}}/>
        </button>
      </div>
      <div class="wd-home-flex-column-container">
        <div className="module-content list-group" style={{width:1100}}>
          <li className="list-group-item list-group-item-secondary align-items-center justify-content-end assignments-banner">
              Assignments
              <span className= "float-end"><FaEllipsisV  style={{color:"grey"}}/></span>
              <span className= "float-end"><FaPlus  style={{color:"grey"}}/></span>
              <span className="border rounded override float-end">40% of Total</span>
          </li>
          <ul className="list-group assignments-content">
            {courseAssignments.map((assignment) => (
            <li className="list-group-item list-group-item green-list">
                <div className="row">
                    <div className="col-md-1">
                        <FaFileAlt/>
                    </div>
                    <div className="col-md-10">
                      <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        <b>{assignment.title}</b>
                      </Link>
                      {/* <br/> */}
                      {/* <font size="2">Week 0 - SETUP - Week starting on Monday September 5th (9/5/2022) Module |</font>
                      <br/>
                      <font size="2"><b>Due</b> Sep 18, 2022 at 11:59pm | 100 pts</font> */}
                    </div>
                    <div className="col-md-1 align-items-center justify-content-en">
                        <FaCheckCircle/>
                        &nbsp;
                        <FaEllipsisV/>
                    </div>
                </div>
            </li>
             ))}
          </ul>
{/*           
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              {assignment.title}
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
}
export default Assignments;