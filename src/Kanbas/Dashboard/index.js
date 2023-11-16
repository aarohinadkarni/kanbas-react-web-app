import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import forest_green from './forest_green.png';
import gray from './grey.png';
import musty_green from './musty_green.png';
import sage_green from './sage_green.png';
import "./index.css"
import { FaEllipsisV, FaFileAlt } from "react-icons/fa";


function Dashboard(
{ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }  
) {
  let images = {"Rocket Propulsion" : forest_green, "Aerodynamics": gray , "Spacecraft Design":musty_green, "Flight Mechanics":sage_green, "Fluid Dynamics":sage_green, "Space Mechanics":musty_green, "Astronautics":gray, "Design Optimization":forest_green};
  console.log(images)
  const colors = {"Rocket Propulsion" : "forest_green", "Aerodynamics": "gray" , "Spacecraft Design":"musty_green", "Flight Mechanics":"sage_green", "Fluid Dynamics":"sage_green", "Space Mechanics":"musty_green", "Astronautics":"gray", "Design Optimization":"forest_green"};
  const addImage = (courseName) => {
    images = {...images, courseName: forest_green};
    console.log(images)
    // images.add({key: courseName, value: forest_green});
  };
  return (
    <div>
      <div className="dashboard-banner">
          <br/>
          <h1>Dashboard</h1>
          <hr/>
          <div className="published-courses-banner">
              <h4>Published Courses (7)</h4>
              <hr/>
          </div>
      </div>
      <div class="row" style={{ marginLeft:20}}>
        <div class="col-auto">
            <input className="form-control" value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value }) } style={{ display:"inline"}}/>
        </div>
        <div class="col-auto">
            <input className="form-control" value={course.number} onChange={(e) => setCourse({ ...course, number: e.target.value }) } style={{ display:"inline"}}/>
        </div>
        <div class="col-auto">
            <input className="form-control" value={course.startDate} onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } type="date" style={{ display:"inline"}}/>
        </div>
        <div class="col-auto">
            <input className="form-control" value={course.endDate} onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } type="date" style={{ display:"inline"}}/>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-secondary btn-sm regular" onClick={() => { addNewCourse(); addImage(course.name);}}>
            Add
            </button>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-secondary btn-sm regular float-right" onClick={() => {updateCourse(course)}}>
            Update
            </button>
        </div>
      </div>
      
      <div className="d-flex flex-row flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap flex-wrap p-2 wd-dashboard-card">
      {courses.map((course) => (
        <div className="card override-bs" style={{width: 260}}>
          <img src={course.name in images ? images[course.name] : forest_green}
              className="card-img-top" alt="..."/>
          <div className="card-img-overlay">
              <FaEllipsisV/>
          </div> 
          <div className="card-body">
              <div className={`course-title ${colors[course.name]}`} style={{ display: 'flex', alignItems: 'center' }}>
                  <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item stretched-link override">
                    {course.number} {course._id} {course.name}
                  </Link>
                  <span className="ellipsis">
                    ...
                  </span>
              </div>
              <div className="course-section">{course.number}.{course._id}</div>
              <div className="course-term">{course.startDate}-{course.endDate}</div>
              <br/>
              <div class="row">
                <div class="col-2">
                    <FaFileAlt size = {20}/>
                </div>
                <div class="col-10" style={{textAlign:"right"}}>
                    <button type="submit" class="btn btn-secondary btn-sm regular stretched-link" style={{position: "relative"}} onClick={(event) => {
                                                                                                                                    event.preventDefault();
                                                                                                                                    setCourse(course);
                                                                                                                                }}>
                    Edit
                    </button>
                    <button type="submit" class="btn btn-secondary btn-sm regular stretched-link" style={{position: "relative"}} onClick={(event) => {
                                                                                                                                    event.preventDefault();
                                                                                                                                    deleteCourse(course._id);
                                                                                                                                }}>
                    Delete
                    </button>
                </div>
             </div>
          </div>
        </div>
        ))}
    </div>
    </div>
  );
}
export default Dashboard;