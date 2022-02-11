import React from 'react';

function index() {
    return(
      // <!-- Right side columns -->
      <aside className="col-lg-3 right-sidebar">
        <div class="card">
            <img src="assets/img/card.jpg" className="card-img-top" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card with an image overlay</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        {/* <!-- News & Updates Traffic --> */}
        <div className="card">
          <div className="filter">
            <a className="icon" href="..." data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li><a className="dropdown-item" href="...">Today</a></li>
              <li><a className="dropdown-item" href="...">This Month</a></li>
              <li><a className="dropdown-item" href="...">This Year</a></li>
            </ul>
          </div>

          <div className="card-body pb-0">
            <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>

            <div className="news">
              <div className="post-item clearfix">
                <img src="assets/img/news-1.jpg" alt="" />
                <h4><a href="...">Nihil blanditiis at in nihil autem</a></h4>
                <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
              </div>

              <div className="post-item clearfix">
                <img src="assets/img/news-2.jpg" alt="" />
                <h4><a href="...">Quidem autem et impedit</a></h4>
                <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
              </div>
              <span className="view-more">View more</span><br/>
            </div>
           </div>
        </div>
        {/* <!-- End News & Updates --> */}
        {/* Pals online */}
        {/* <div className="card"> */}
          <div className="filter">
            <a className="icon" href="..." data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li><a className="dropdown-item" href="...">Today</a></li>
              <li><a className="dropdown-item" href="...">This Month</a></li>
              <li><a className="dropdown-item" href="...">This Year</a></li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">Recent Activity <span>| Today</span></h5>

            <div className="activity">

              <span className="rightbar-profile d-flex align-items-center pe-0">
                <div className="rightbar-item">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rightbar-img rounded-circle" />
                <i className='bi bi-circle-fill activity-badge rightbar-status text-success'></i>
                </div>
                <span className="d-md-block ps-2">K. Anderson</span>
              </span>
              {/* <!-- End activity item--> */}

              <span className="rightbar-profile d-flex align-items-center pe-0">
                <div className="rightbar-item">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rightbar-img rounded-circle" />
                <i className='bi bi-circle-fill activity-badge rightbar-status text-success'></i>
                </div>
                <span className="d-md-block ps-2">K. Anderson</span>
              </span>

              <span className="rightbar-profile d-flex align-items-center pe-0">
                <div className="rightbar-item">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rightbar-img rounded-circle" />
                <i className='bi bi-circle-fill activity-badge rightbar-status text-success'></i>
                </div>
                <span className="d-md-block ps-2">K. Anderson</span>
              </span>

              <span className="rightbar-profile d-flex align-items-center pe-0">
                <div className="rightbar-item">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rightbar-img rounded-circle" />
                <i className='bi bi-circle-fill activity-badge rightbar-status text-success'></i>
                </div>
                <span className="d-md-block ps-2">K. Anderson</span>
              </span>

              <span className="rightbar-profile d-flex align-items-center pe-0">
                <div className="rightbar-item">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rightbar-img rounded-circle" />
                <i className='bi bi-circle-fill activity-badge rightbar-status text-success'></i>
                </div>
                <span className="d-md-block ps-2">K. Anderson</span>
              </span>

              <span className="rightbar-profile d-flex align-items-center pe-0">
                <div className="rightbar-item">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rightbar-img rounded-circle" />
                <i className='bi bi-circle-fill activity-badge rightbar-status text-success'></i>
                </div>
                <span className="d-md-block ps-2">K. Anderson</span>
              </span>

              <span className="rightbar-profile d-flex align-items-center pe-0">
                <div className="rightbar-item">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rightbar-img rounded-circle" />
                <i className='bi bi-circle-fill activity-badge rightbar-status text-success'></i>
                </div>
                <span className="d-md-block ps-2">K. Anderson</span>
              </span>
            </div>

          </div>
        {/* </div> */}
        {/* <!-- End Recent Activity --> */}

      </aside>
      /* <!-- End Right side columns --> */
    /* //   <!-- End right-Sidebar--> */
    )
}

export default index;