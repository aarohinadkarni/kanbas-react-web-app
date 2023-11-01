import ModuleList from "../Modules/ModuleList";
import '../../index.css'
import { FaCheckCircle, FaPlus, FaEllipsisV, FaBell, FaChartBar, FaBullhorn, FaBullseye, FaUpload, FaFileImport, FaBan, FaCircle, FaTimes, FaCalendarCheck } from "react-icons/fa";

function Home() {
    return (
      <div className="wd-home-flex-row-container">
      <div className="wd-home-flex-column-container">
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
      <div className="wd-home-flex-column-container d-none d-xl-block" style={{marginTop: "40px", marginRight: "10px"}}>
          <div className="course-status-buttons">
            <h5>Course Status</h5>
                <label for="unpublish-button"></label>
                <button type="submit" className="btn btn-secondary btn-sm regular" id="unpublish-button">
                    <FaBan/>
                    &nbsp;
                    Unpublish
                </button>
                &nbsp;
                &nbsp;
                <label for="published-button"></label>
                <button type="submit" className="btn btn-secondary btn-sm published" id="published-button">
                    <FaCheckCircle/>
                    &nbsp;
                    Published
                </button>
            <br/><br/>
            <div className="d-grid gap-1">
              <label for="import-existing-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="import-existing-button">
                  <FaFileImport/>
                  &nbsp;
                  Import Existing Content
              </button>
              <label for="import-commons-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="import-commons-button">
                  <FaUpload/>
                  &nbsp;
                  Import From Commons
              </button>
              <label for="choose-home-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="choose-home-button">
                  <FaBullseye/>
                  &nbsp;
                  Choose Home Page
              </button>
              <label for="course-stream-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="course-stream-button">
                  <FaChartBar/>
                  &nbsp;
                  View Course Stream
              </button>
              <label for="new-announcement-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="new-announcement-button">
                  <FaBullhorn/>
                  &nbsp;
                  New Announcement
              </button>
              <label for="new-analytics-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="new-analytics-button">
                  <FaChartBar/>
                  &nbsp;
                  New Analytics
              </button>
              <label for="course-notifs-button"></label>
              <button type="submit" className="btn btn-secondary btn-sm regular" id="course-notifs-button">
                  <FaBell/>
                  &nbsp;
                  View Course Notifications
              </button>
            </div>
            <br/>
            <h6>To Do</h6>
            <hr/>
            <div className="to-do">
                <div className="row">
                    <div className="col-auto" >
                        <FaCircle/>
                    </div>
                    <div className="col-auto">
                    <div className="to-do-grade">
                        <font size="2">Grade A1 - ENV + HTML</font>
                    </div>
                    <div className="to-do-details">
                        <font size="1">100 points • Sep 18 at 11:59pm</font>
                    </div>
                </div>
                <div className="col-auto">
                    <FaTimes className="times"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                  <h6>Coming Up</h6>
                </div>
                <div className="col">
                    <FaCalendarCheck className="times"/>
                    &nbsp;
                    <a href="#" style={{fontSize: "small"}}>View Calendar</a>
                </div>
            </div>
            <hr/>
            <div className="to-do">
                <div className="row">
                    <div className="col-auto" >
                    <FaCalendarCheck className="times"/>
                    </div>
                    <div className="col-auto">
                        <div className="to-do-grade" style={{paddingBottom:0}}>
                            <font size="2">Lecture</font>
                        </div>
                        <div className="to-do-details">
                            <font size="1">CS4550.12631.202410</font>
                        </div>
                        <div className="to-do-details">
                            <font size="1">Sep 7 at 11:45am</font>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="to-do">
                <div className="row">
                    <div className="col-auto" >
                    <FaCalendarCheck className="times"/>
                    </div>
                    <div className="col-auto">
                        <div className="to-do-grade">
                            <font size="2">CS5610 06 SP23 Lecture</font>
                        </div>
                        <div className="to-do-details">
                            <font size="1">CS4550.12631.202410</font>
                        </div>
                        <div className="to-do-details">
                            <font size="1">Sep 7 at 6pm</font>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="to-do">
                <div className="row">
                    <div className="col-auto" >
                    <FaCalendarCheck className="times"/>
                    </div>
                    <div className="col-auto">
                        <div className="to-do-grade">
                            <font size="2">Lecture CS4550.12631.202410</font>
                        </div>
                        <div className="to-do-details">
                            <font size="1">CS4550.12631.202410</font>
                        </div>
                        <div className="to-do-details">
                            <font size="1">Sep 11 at 7:00pm</font>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="to-do-details">
                <font size="1" style={{color: "red"}}>12 more in the next week...</font>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  export default Home;