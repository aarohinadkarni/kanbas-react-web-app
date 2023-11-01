import ModuleList from "./ModuleList";
import '../../index.css'
import { FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
function Modules() {
  return (
    <div>
      <div className="d-flex justify-content-end course-buttons">
            <label for="collapse-button" ></label>
            <button type="submit" className="btn btn-secondary btn-sm regular" id="collapse-button">Collapse All</button>

            <label for="progress-button"></label>
            <button type="submit" className="btn btn-secondary btn-sm regular" id="progress-button">View Progress</button>

            <div className="dropdown">
                <button className="btn btn-light dropdown-toggle regular" type="button" data-bs-toggle="dropdown"aria-expanded="false">
                    <FaCheckCircle/> 
                    &nbsp;
                    Publish All
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Publish All modules and items</a></li>
                  <li><a className="dropdown-item" href="#">Publish modules only</a></li>
                  <li><a className="dropdown-item" href="#">Unpublish All</a></li>
                </ul>
            </div>
            
            
            <label for="module-button"></label>
            <button type="submit" className="btn btn-danger btn-sm" id="module-button">
            {/* <span class="fa fa-plus" aria-hidden="true"></span> */}
            <FaPlus style={{color:"white"}}/>
            &nbsp;
            Module
            </button>
            <label for="ellipsis-button"></label>
            <button type="submit" className="btn btn-secondary btn-sm regular py-2" id="ellipsis-button">
            {/* <span class="fa fa-ellipsis-v" aria-hidden="true"></span> */}
            <span><FaEllipsisV  style={{color:"black"}}/></span>
            </button>
            <hr/>
            <span/>
        </div>
        <hr/>
      <ModuleList />
    </div>
  );
}

export default Modules;
