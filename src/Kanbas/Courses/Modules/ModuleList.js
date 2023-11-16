import React, { useEffect, useState } from "react";
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
  setModules,
} from "./modulesReducer";
import * as client from "./client";



function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const dispatch = useDispatch();
  return (
    <div className="module-content">
      <div class="row" style={{marginBottom:10}}>
        <div class="col-auto">
          <input class= "form-control" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} style={{marginLeft:0}}/>
        </div>
        <div class="col-auto">
          <textarea class= "form-control" value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} style={{height:30}}/>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-success btn-sm regular" onClick={handleAddModule}>Add</button>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-secondary btn-sm regular" onClick={handleUpdateModule}>Update</button>
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
              <button class = "btn btn-danger btn-sm regular float-end" onClick={() => handleDeleteModule(module._id)} style={{marginRight:10}}> Delete</button>
                <button class = "btn btn-success btn-sm regular float-end" onClick={() => dispatch(setModule(module))} style={{marginRight:10}}> Edit</button>
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