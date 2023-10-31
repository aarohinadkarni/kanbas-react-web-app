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
  const images = {"Rocket Propulsion" : forest_green, "Aerodynamics": gray , "Spacecraft Design":musty_green, "Flight Mechanics":sage_green, "Fluid Dynamics":sage_green, "Space Mechanics":musty_green, "Astronautics":gray, "Design Optimization":forest_green};
  const colors = {"Rocket Propulsion" : "forest_green", "Aerodynamics": "gray" , "Spacecraft Design":"musty_green", "Flight Mechanics":"sage_green", "Fluid Dynamics":"sage_green", "Space Mechanics":"musty_green", "Astronautics":"gray", "Design Optimization":"forest_green"};
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
            <button type="submit" class="btn btn-secondary btn-sm regular" onClick={addNewCourse}>
            Add
            </button>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-secondary btn-sm regular float-right" onClick={updateCourse}>
            Update
            </button>
        </div>
      </div>
      
      <div className="d-flex flex-row flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap flex-wrap p-2 wd-dashboard-card">
      {courses.map((course) => (
        <div className="card override-bs" style={{width: 260}}>
          <img src={images[course.name]}
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
            {/* <div className="card override-bs" style={{width: 260}}>
                <img src={forest_green}
                     className="card-img-top" alt="..."/>
                <div className="card-img-overlay">
                    <FaEllipsisV/>
                </div> 
                <div className="card-body">
                    <div className="course-title forest-green">
                        <a href="../home.html" class="stretched-link override forest-green">CS4550 12631 Web Development</a>
                        <span className="ellipsis">
                        ...
                        </span>
                    </div>
                    <div className="course-section">CS4550.12631.202410</div>
                    <div className="course-term">202410_1_Fall 2023 Semester Full Term</div>
                    <br/>
                    <FaFileAlt size = {20}/>
                </div>
             </div>

             <div class="card override-bs" style={{width: 260}}>
             <img src={gray}
                     class="card-img-top" alt="..."/>
                <div class="card-img-overlay">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div> 
                <div class="card-body">
                    <div class="course-title gray">
                        <a href="../home.html" class="stretched-link override gray">CS4550 12631 Web Development</a>
                        <span class="ellipsis">
                        ...
                        </span>
                    </div>
                    <div class="course-section">CS4550.12631.202410</div>
                    <div class="course-term">202410_1_Fall 2023 Semester Full Term</div>
                    <br/>
                    <i class="fa fa-file-alt fa-lg" aria-hidden="true"></i>
                </div>
             </div>

             <div class="card override-bs" style={{width: 260}}>
             <img src={musty_green}
                     class="card-img-top" alt="..."/>
                <div class="card-img-overlay">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div> 
                <div class="card-body">
                    <div class="course-title musty-green">
                        <a href="../home.html" class="stretched-link override musty-green">CS4550 12631 Web Development</a>
                        <span class="ellipsis">
                        ...
                        </span>
                    </div>
                    <div class="course-section">CS4550.12631.202410</div>
                    <div class="course-term">202410_1_Fall 2023 Semester Full Term</div>
                    <br/>
                    <i class="fa fa-file-alt fa-lg" aria-hidden="true"></i>
                </div>
             </div>

             <div class="card override-bs" style={{width: 260}}>
                <img src={sage_green}
                     class="card-img-top" alt="..."/>
                <div class="card-img-overlay">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
                <div class="card-body">
                    <div class="course-title sage-green">
                        <a href="../home.html" class="stretched-link override sage-green">CS4550 12631 Web Development</a>
                        <span class="ellipsis">
                        ...
                        </span>
                    </div>
                    <div class="course-section">CS4550.12631.202410</div>
                    <div class="course-term">202410_1_Fall 2023 Semester Full Term
                        <span class="ellipsis">
                        ...
                        </span>
                    </div>
                    <br/>
                    <i class="fa fa-file-alt fa-lg" aria-hidden="true"></i>
                </div>
             </div>
            <div class="card override-bs" style={{width: 260}}>
                <img src={sage_green}
                     class="card-img-top" alt="..."/>
                <div class="card-img-overlay">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
                <div class="card-body">
                    <div class="course-title sage-green">
                        <a href="../home.html" class="stretched-link override sage-green">CS4550 12631 Web Development</a>
                        <span class="ellipsis">
                        ...
                        </span>
                    </div>
                    <div class="course-section">CS4550.12631.202410</div>
                    <div class="course-term">202410_1_Fall 2023 Semester Full Term</div>
                    <br/>
                    <i class="fa fa-file-alt fa-lg" aria-hidden="true"></i>
                </div>
             </div>

             <div class="card override-bs" style={{width: 260}}>
                <img src={musty_green}
                     class="card-img-top" alt="..."/>
                <div class="card-img-overlay">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
                <div class="card-body">
                    <div class="course-title musty-green">
                        <a href="../home.html" class="stretched-link override musty-green">CS4550 12631 Web Development</a>
                        <span class="ellipsis">
                        ...
                        </span>
                    </div>
                    <div class="course-section">CS4550.12631.202410</div>
                    <div class="course-term">202410_1_Fall 2023 Semester Full Term</div>
                    <br/>
                    <i class="fa fa-file-alt fa-lg" aria-hidden="true"></i>
                </div>
             </div>

             <div class="card override-bs" style={{width: 260}}>
                <img src={gray}
                     class="card-img-top" alt="..."/>
                <div class="card-img-overlay">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
                <div class="card-body">
                    <div class="course-title gray">
                        <a href="../home.html" class="stretched-link override gray">CS4550 12631 Web Development</a>
                        <span class="ellipsis">
                        ...
                        </span>
                    </div>
                    <div class="course-section">CS4550.12631.202410</div>
                    <div class="course-term">202410_1_Fall 2023 Semester Full Term</div>
                    <br/>
                    <i class="fa fa-file-alt fa-lg" aria-hidden="true"></i>
                </div>
             </div>

             <div class="card override-bs" style={{width: 260}}>
                <img src={forest_green}
                     class="card-img-top" alt="..."/>
                <div class="card-img-overlay">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
                <div class="card-body">
                    <div class="course-title forest-green">
                        <a href="../home.html" class="stretched-link override forest-green">CS4550 12631 Web Development</a>
                        <span class="ellipsis">
                        ...
                        </span>
                    </div>
                    <div class="course-section">CS4550.12631.202410</div>
                    <div class="course-term">202410_1_Fall 2023 Semester Full Term</div>
                    <br/>
                    <i class="fa fa-file-alt fa-lg" aria-hidden="true"></i> 
                </div>
             </div> */}
      {/* <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            {course.name}
          </Link>
        ))}
      </div> */}
    </div>
    </div>
  );
}
export default Dashboard;