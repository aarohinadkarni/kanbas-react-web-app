import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '../../index.css'
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";



function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="module-content">
      <div class="row" style={{ marginLeft:20}}>
        <div class="col-auto">
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
        </div>
        <div class="col-auto">
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-secondary btn-sm regular" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-secondary btn-sm regular" onClick={() => dispatch(updateModule(module))}>Update</button>
        </div>
      </div>
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
                  <button class = "btn btn-secondary btn-sm regular float-end" onClick={() => dispatch(setModule(module))} style={{marginRight:10}}> Edit</button>
                  <button class = "btn btn-secondary btn-sm regular float-end" onClick={() => dispatch(deleteModule(module._id))} style={{marginRight:10}}> Delete</button>
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