import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '../../index.css'
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";



function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="module-content">
      <ul className="list-group">
        {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <>
            <li key={index} className="list-group-item list-group-item-secondary" style={{paddingLeft: 0, paddingBottom: 0, paddingRight: 0}}>
              <div style={{paddingLeft: 10}}>{module.name}</div>
              <div className="d-flex justify-content-end align-items-center" style={{marginTop: -20, marginBottom: 10}}>
                <FaEllipsisV  className="me-3" style={{color:"grey"}}/>
                <FaPlus className="me-3" style={{color:"grey"}}/>
                <FaCheckCircle className="me-3" style={{color:"green"}}/>
              </div>
              <div className = "list-group">
                <li key={index} className="list-group-item green-list" >
                  {module.description}
                  <FaEllipsisV className="float-end" style={{color:"grey"}}/>
                  <FaCheckCircle className="float-end" style={{color:"green"}}/>
                 </li>
              </div>
            </li>
            <br/>
            </>
        ))
        }
      </ul>
    </div>
  );
}
export default ModuleList;