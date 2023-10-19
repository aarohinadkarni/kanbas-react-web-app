import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import '../index.css'
import '../../../index.css'


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="wd-home-flex-column-container flex-grow-1 assignment-options">
      <div className="d-flex justify-content-end course-buttons published" style={{marginTop: 20}}>
            <FaCheckCircle/>
            <b>Published</b>
        <span>
        <label for="ellipsis-button"></label>
        <button type="submit" className="btn btn-secondary btn-sm regular py-2" id="ellipsis-button">
        <FaEllipsisV style={{color:"black"}}/>
        </button>
        </span>
      </div>
      <hr/>
      <label for="assignment-name">Assignment Name</label><br/>
      <input id="assignment-name" className="form-control" value={assignment.title} /><br />
      <label for="assignment-description-textarea"></label><br />
      <textarea className="form-control" cols="120" rows="2" id="assignment-description-textarea">This is the assignment description.
      </textarea><br /><br />
      <div className="assignment-inputs">
        <div className="row edit">
            <div className="col-md-3">
                <label for="points" class="float-end">Points</label>
            </div>
            <div className="col-md-9">
                <input
                        type="text"
                        id="points"
                        value="100"
                        class="form-control"
                />
            </div>
        </div>
        <div className="row edit">
            <div className="col-md-3">
                <label for="assignment-group" class="float-end">Assignment Group</label>
            </div>
            <div className="col-md-9 mb-3">
                <select id="assignment-group" class="form-select">
                    <option>ASSIGNMENTS</option>
                </select>
            </div>
        </div>
        <div className="row edit">
            <div className="col-md-3">
                <label for="display-grade" class="float-end">Display Grade as</label>
            </div>
            <div className="col-md-9">
                <select className="form-select" id="display-grade">
                    <option>Percentage</option>
                </select>
            </div>
        </div>
        <div className="row edit">
            <div className="col-md-3">
            </div>
            <div class="col-md-9">
                <input className="form-check-input" type="checkbox" value="Not counted towards final grade" name="count-towards-final-grades" id="chkbox-not-counter"></input>
                <label className="form-check-label" for="chkbox-not-counter" style={{marginLeft: 5}}>
                    Do not count this assignment towards final grade
                </label>
            </div>
        </div>
        <div className="row edit">
            <div className="col-md-3">
                <label for="submission-type" class="float-end">Submission Type</label>
            </div>
            <div className="col-md-9">
                <div className="border rounded edit">
                    <select id="submission-type" class="form-select" style={{width:"40%"}}>
                        <option>Online</option>
                    </select><br />
                    <label><b>Online Entry Options</b></label>
                    <br />
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" value="Text Entry" name="check-online-entry-options" id="chkbox-text-entry"></input>
                        <label className="form-check-label" for="chkbox-text-entry">
                            Text Entry
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""Website URL name="check-online-entry-options" id="chkbox-website-url"></input>
                        <label className="form-check-label" for="chkbox-website-url">
                            Website URL
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Media Recordings" name="check-online-entry-options" id="chkbox-media-recordings"></input>
                        <label className="form-check-label" for="chkbox-media-recordings">
                            Media Recordings
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Student Annotation" name="check-online-entry-options" id="chkbox-student-annotation"></input>
                        <label className="form-check-label" for="chkbox-student-annotation">
                            Student Annotation
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="File Uploads" name="check-online-entry-options" id="chkbox-file-uploads"></input>
                        <label className="form-check-label" for="chkbox-file-uploads">
                            File Uploads
                        </label>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
          <div className="row" style={{marginTop: 30}}>
        <div className="col-md-3">
            <div className="float-end">Assign</div>
        </div>
        <div className="col-md-9">
            <div className="border rounded edit">
                <label for="assign-to"><b>Assign to</b></label>
                <input className="form-control" id="assign-to" value="Everyone" /><br/>
                <label for="due-by"><b>Due</b></label>
                <input className="form-control" type="date" id="due-by" value="2023-09-18" /><br/>
                <div className="row override">
                    <div className="col">
                        <label for="available-from"><b>Available from</b></label>
                        <input className="form-control" type="date" id="available-from" value="2023-09-06" />
                    </div>
                    <div className="col">
                        <label for="until"><b>Until</b></label>
                        <input className="form-control"  type="date" id="until" />
                    </div>
                </div>
        </div>
    </div>
        </div>
        </div>
      </div>
      <hr/>
      <div className="form-check" style={{ display: 'inline', marginRight: '10px' }}>
    <input className="form-check-input" type="checkbox" value="Not counted towards final grade" name="notify-content-changed" id="chkbox-content-changed"></input>
            <label className="form-check-label" for="chkbox-content-changed" style={{marginLeft: 5}}>
                Notify users that this content has changed
            </label>
    
    <form id="save-button" action="index.html" style={{display: "inline"}}>
        <label for="save-button"></label>
        <button onClick={handleSave} className="btn btn-danger btn-sm float-end" id="save-button">Save</button>
    </form>        
    <form id="cancel-button" action="index.html" style={{display: "inline"}}>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary btn-sm regular float-end" id="cancel-button">Cancel</Link>
        <label for="cancel-button"></label>
    </form>
    </div>
    </div>
  );
}


export default AssignmentEditor;