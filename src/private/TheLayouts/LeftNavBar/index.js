import React from 'react';

function index() {
    return(
        <aside id="left-sidebar" className="left-sidebar">

        <ul className="left-sidebar-nav" id="left-sidebar-nav">
    
          <li className="nav-item">
            <a className="nav-link nav-profile" href="index.html">
            <img src="assets/img/profile-img.jpg" alt="Profile" className="leftbar-img rounded-circle" />
              <span className="nav-link-text">My Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="leftbar-bi ri-file-word-2-fill"></i>
              <span className="nav-link-text">My Office</span>
            </a>
          </li>
          {/* <!-- End Dashboard Nav --> */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="...">
            <i className=" leftbar-bi ri-parent-fill"></i><span className="nav-link-text">Pals</span><span className="badge bg-primary badge-number">4</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#left-sidebar-nav">
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i><span>Alerts</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i><span>Accordion</span>
                </a>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle"></i><span>Badges</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a href="components-buttons.html">
                  <i className="bi bi-circle"></i><span>Buttons</span>
                </a>
              </li>
              <li>
                <a href="components-cards.html">
                  <i className="bi bi-circle"></i><span>Cards</span>
                </a>
              </li>
              <li>
                <a href="components-carousel.html">
                  <i className="bi bi-circle"></i><span>Carousel</span>
                </a>
              </li>
              <li>
                <a href="components-list-group.html">
                  <i className="bi bi-circle"></i><span>List group</span>
                </a>
              </li>
              <li>
                <a href="components-modal.html">
                  <i className="bi bi-circle"></i><span>Modal</span>
                </a>
              </li>
              <li>
                <a href="components-tabs.html">
                  <i className="bi bi-circle"></i><span>Tabs</span>
                </a>
              </li>
              <li>
                <a href="components-pagination.html">
                  <i className="bi bi-circle"></i><span>Pagination</span>
                </a>
              </li>
              <li>
                <a href="components-progress.html">
                  <i className="bi bi-circle"></i><span>Progress</span>
                </a>
              </li>
              <li>
                <a href="components-spinners.html">
                  <i className="bi bi-circle"></i><span>Spinners</span>
                </a>
              </li>
              <li>
                <a href="components-tooltips.html">
                  <i className="bi bi-circle"></i><span>Tooltips</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="leftbar-bi ri-apps-fill"></i>
              <span className="nav-link-text">BootCamps</span>
            </a>
          </li>
          {/*---------------------------
          <!-- End Components Nav --> 
          ------------------------------*/}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="...">
              <i className="leftbar-bi ri-contacts-fill"></i><span className="nav-link-text">Contacts</span><span className="badge bg-primary badge-number">4</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#left-sidebar-nav">
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i><span>Form Elements</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle"></i><span>Form Layouts</span>
                </a>
              </li>
              <li>
                <a href="forms-editors.html">
                  <i className="bi bi-circle"></i><span>Form Editors</span>
                </a>
              </li>
              <li>
                <a href="forms-validation.html">
                  <i className="bi bi-circle"></i><span>Form Validation</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Forms Nav --> */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="...">
              <i className="leftbar-bi ri-store-2-fill"></i><span className="nav-link-text">Marketplace</span><span className="badge bg-primary badge-number">4</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#left-sidebar-nav">
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle"></i><span>Gigs</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i className="bi bi-circle"></i><span>Buy/ Sell</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Tables Nav --> */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="...">
              <i className="bi leftbar-bi bi-bar-chart"></i><span className="nav-link-text">Followers</span><span className="badge bg-primary badge-number">400000</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#left-sidebar-nav">
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle"></i><span>Chart.js</span>
                </a>
              </li>
              <li>
                <a href="charts-apexcharts.html">
                  <i className="bi bi-circle"></i><span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a href="charts-echarts.html">
                  <i className="bi bi-circle"></i><span>ECharts</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Charts Nav --> */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="...">
              <i className="bi leftbar-bi bi-gem"></i><span className="nav-link-text">Jobs</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#left-sidebar-nav">
              <li>
                <a href="icons-bootstrap.html">
                  <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-remix.html">
                  <i className="bi bi-circle"></i><span>Remix Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-boxicons.html">
                  <i className="bi bi-circle"></i><span>Boxicons</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Icons Nav --> */}
        <hr className="hr-line"/>
        <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi leftbar-bi bi-file-earmark"></i>
              <span className="nav-link-text">Payments</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <i className="bi leftbar-bi bi-dash-circle"></i>
              <span className="nav-link-text">Fundraiser</span>
            </a>
          </li>
          {/* <!-- End Profile Page Nav --> */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi leftbar-bi bi-question-circle"></i>
              <span className="nav-link-text">Groups</span>
            </a>
          </li>
          {/* <!-- End F.A.Q Page Nav --> */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi leftbar-bi bi-envelope"></i>
              <span className="nav-link-text">Pages</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi leftbar-bi bi-file-earmark"></i>
              <span className="nav-link-text">Courses</span>
            </a>
          </li>
          {/* <!-- End Contact Page Nav --> */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <i className="bi leftbar-bi bi-card-list"></i>
              <span className="nav-link-text">News</span>
            </a>
          </li>
          {/* <!-- End Register Page Nav --> */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <i className="bi leftbar-bi bi-box-arrow-in-right"></i>
              <span className="nav-link-text">Events</span>
            </a>
          </li>
          
        </ul>
    
      </aside>
    //   <!-- End left-Sidebar-->
    )
}

export default index;