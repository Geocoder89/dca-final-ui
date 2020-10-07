<template>
  <div>
    <!-- BEGIN: header-->
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <nav
      class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow"
    >
      <div class="navbar-wrapper">
        <div class="navbar-container content">
          <div class="navbar-collapse" id="navbar-mobile">
            <div
              class="mr-auto float-left bookmark-wrapper d-flex align-items-center"
            >
              <ul class="nav navbar-nav">
                <li class="nav-item mobile-menu d-xl-none mr-auto">
                  <nuxt-link
                    class="nav-link nav-menu-main menu-toggle hidden-xs"
                    to="#"
                    ><i class="ficon feather icon-menu"></i
                  ></nuxt-link>
                </li>
              </ul>
              <ul class="nav navbar-nav bookmark-icons"></ul>
            </div>
            <ul class="nav navbar-nav float-right">
              <li class="nav-item">
                <nuxt-link class="nav-link nav-link-label" to="/doctor/message"
                  ><i class="ficon feather icon-mail"></i
                ></nuxt-link>
              </li>
              <li class="dropdown dropdown-notification nav-item">
                <nuxt-link
                  class="nav-link nav-link-label"
                  to="#"
                  data-toggle="dropdown"
                  ><i class="ficon feather icon-bell"></i
                  ><span class="badge badge-pill badge-primary badge-up"
                    >5</span
                  ></nuxt-link
                >
                <ul
                  class="dropdown-menu dropdown-menu-media dropdown-menu-right"
                >
                  <li class="dropdown-menu-header">
                    <div class="dropdown-header m-0 p-2">
                      <h3 class="white">5 New</h3>
                      <span class="grey darken-2"> Notifications</span>
                    </div>
                  </li>
                  <li class="scrollable-container media-list">
                    <a
                      class="d-flex justify-content-between"
                      href="javascript:void(0)"
                    >
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i
                            class="feather icon-plus-square font-medium-5 primary"
                          ></i>
                        </div>
                        <div class="media-body">
                          <h6 class="primary media-heading">Pharmacy</h6>
                          <small class="notification-text">
                            Your drug is ready for pickup.</small
                          >
                        </div>
                        <small>
                          <time
                            class="media-meta"
                            datetime="2015-06-11T18:29:20+08:00"
                            >9 hours ago</time
                          ></small
                        >
                      </div> </a
                    ><a
                      class="d-flex justify-content-between"
                      href="javascript:void(0)"
                    >
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i
                            class="feather icon-calendar font-medium-5 success"
                          ></i>
                        </div>
                        <div class="media-body">
                          <h6 class="success media-heading red darken-1">
                            Appointment - Eko Hospital
                          </h6>
                          <small class="notification-text"
                            >Your appointment is now confirmed.</small
                          >
                        </div>
                        <small>
                          <time
                            class="media-meta"
                            datetime="2015-06-11T18:29:20+08:00"
                            >5 hour ago</time
                          ></small
                        >
                      </div> </a
                    ><a
                      class="d-flex justify-content-between"
                      href="javascript:void(0)"
                    >
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i
                            class="feather icon-alert-triangle font-medium-5 danger"
                          ></i>
                        </div>
                        <div class="media-body">
                          <h6 class="danger media-heading yellow darken-3">
                            Subscription Expires
                          </h6>
                          <small class="notification-text"
                            >Please renew your subscription.</small
                          >
                        </div>
                        <small>
                          <time
                            class="media-meta"
                            datetime="2015-06-11T18:29:20+08:00"
                            >Today</time
                          ></small
                        >
                      </div> </a
                    ><a
                      class="d-flex justify-content-between"
                      href="javascript:void(0)"
                    >
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i
                            class="feather icon-check-circle font-medium-5 info"
                          ></i>
                        </div>
                        <div class="media-body">
                          <h6 class="info media-heading">Complete task</h6>
                          <small class="notification-text"
                            >Your Laboratory test result is ready.</small
                          >
                        </div>
                        <small>
                          <time
                            class="media-meta"
                            datetime="2015-06-11T18:29:20+08:00"
                            >Last week</time
                          ></small
                        >
                      </div> </a
                    ><a
                      class="d-flex justify-content-between"
                      href="javascript:void(0)"
                    >
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i
                            class="feather icon-file font-medium-5 warning"
                          ></i>
                        </div>
                        <div class="media-body">
                          <h6 class="warning media-heading">
                            Home Service request
                          </h6>
                          <small class="notification-text"
                            >Please,your attention is needed.</small
                          >
                        </div>
                        <small>
                          <time
                            class="media-meta"
                            datetime="2015-06-11T18:29:20+08:00"
                            >Last month</time
                          ></small
                        >
                      </div>
                    </a>
                  </li>
                  <li class="dropdown-menu-footer">
                    <nuxt-link
                      class="dropdown-item p-1 text-center"
                      to="#"
                      >Read all notifications
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="dropdown dropdown-user nav-item">
                <nuxt-link
                  class="dropdown-toggle nav-link dropdown-user-link"
                  to="#"
                  data-toggle="dropdown"
                >
                  <div class="user-nav d-sm-flex d-none">
                    <span class="user-name text-bold-600">{{user.first_name}} {{user.last_name}}</span
                    ><span class="user-status">Available</span>
                  </div>
                  <span
                    ><img
                      class="round"
                      src="~assets/img/portrait/small/avatar-s-5.jpg"
                      alt="avatar"
                      height="40"
                      width="40"
                  /></span>
                </nuxt-link>
                <div class="dropdown-menu dropdown-menu-right">
                  <nuxt-link class="dropdown-item" to="/doctor/editprofile"
                    ><i class="feather icon-user"></i> Edit Profile</nuxt-link
                  >
                  <nuxt-link class="dropdown-item" to="/doctor/message"
                    ><i class="feather icon-mail"></i> My Inbox
                  </nuxt-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <ul class="main-search-list-defaultlist d-none">
      <li class="d-flex align-items-center">
        <nuxt-link class="pb-25" to="#">
          <h6 class="text-primary mb-0">Files</h6>
        </nuxt-link>
      </li>
      <li class="auto-suggestion d-flex align-items-center cursor-pointer">
        <nuxt-link
          class="d-flex align-items-center justify-content-between w-100"
          to="#"
        >
          <div class="d-flex">
            <div class="mr-50">
              <img src="~assets/img/icons/xls.png" alt="png" height="32" />
            </div>
            <div class="search-data">
              <p class="search-data-title mb-0">Two new item submitted</p>
              <small class="text-muted">Marketing Manager</small>
            </div>
          </div>
          <small class="search-data-size mr-50 text-muted">&apos;17kb</small>
        </nuxt-link>
      </li>
      <li class="auto-suggestion d-flex align-items-center cursor-pointer">
        <nuxt-link
          class="d-flex align-items-center justify-content-between w-100"
          to="#"
        >
          <div class="d-flex">
            <div class="mr-50">
              <img src="~assets/img/icons/jpg.png" alt="png" height="32" />
            </div>
            <div class="search-data">
              <p class="search-data-title mb-0">52 JPG file Generated</p>
              <small class="text-muted">FontEnd Developer</small>
            </div>
          </div>
          <small class="search-data-size mr-50 text-muted">&apos;11kb</small>
        </nuxt-link>
      </li>
      <li class="auto-suggestion d-flex align-items-center cursor-pointer">
        <nuxt-link
          class="d-flex align-items-center justify-content-between w-100"
          to="#"
        >
          <div class="d-flex">
            <div class="mr-50">
              <img src="~assets/img/icons/pdf.png" alt="png" height="32" />
            </div>
            <div class="search-data">
              <p class="search-data-title mb-0">25 PDF File Uploaded</p>
              <small class="text-muted">Digital Marketing Manager</small>
            </div>
          </div>
          <small class="search-data-size mr-50 text-muted">&apos;150kb</small>
        </nuxt-link>
      </li>
      <li class="auto-suggestion d-flex align-items-center cursor-pointer">
        <nuxt-link
          class="d-flex align-items-center justify-content-between w-100"
          to="#"
        >
          <div class="d-flex">
            <div class="mr-50">
              <img src="~assets/img/icons/doc.png" alt="png" height="32" />
            </div>
            <div class="search-data">
              <p class="search-data-title mb-0">Anna_Strong.doc</p>
              <small class="text-muted">Web Designer</small>
            </div>
          </div>
          <small class="search-data-size mr-50 text-muted">&apos;256kb</small>
        </nuxt-link>
      </li>
      <li class="d-flex align-items-center">
        <nuxt-link class="pb-25" to="#">
          <h6 class="text-primary mb-0">Members</h6>
        </nuxt-link>
      </li>
      <li class="auto-suggestion d-flex align-items-center cursor-pointer">
        <nuxt-link
          class="d-flex align-items-center justify-content-between py-50 w-100"
          to="#"
        >
          <div class="d-flex align-items-center">
            <div class="avatar mr-50">
              <img
                src="~assets/img/portrait/small/avatar-s-8.jpg"
                alt="png"
                height="32"
              />
            </div>
            <div class="search-data">
              <p class="search-data-title mb-0">John Doe</p>
              <small class="text-muted">UI designer</small>
            </div>
          </div>
        </nuxt-link>
      </li>
      <li class="auto-suggestion d-flex align-items-center cursor-pointer">
        <nuxt-link
          class="d-flex align-items-center justify-content-between py-50 w-100"
          to="#"
        >
          <div class="d-flex align-items-center">
            <div class="avatar mr-50">
              <img
                src="~assets/img/portrait/small/avatar-s-1.jpg"
                alt="png"
                height="32"
              />
            </div>
            <div class="search-data">
              <p class="search-data-title mb-0">Michal Clark</p>
              <small class="text-muted">FontEnd Developer</small>
            </div>
          </div>
        </nuxt-link>
      </li>
      <li class="auto-suggestion d-flex align-items-center cursor-pointer">
        <nuxt-link
          class="d-flex align-items-center justify-content-between py-50 w-100"
          to="#"
        >
          <div class="d-flex align-items-center">
            <div class="avatar mr-50">
              <img
                src="~assets/img/portrait/small/avatar-s-14.jpg"
                alt="png"
                height="32"
              />
            </div>
            <div class="search-data">
              <p class="search-data-title mb-0">Milena Gibson</p>
              <small class="text-muted">Digital Marketing Manager</small>
            </div>
          </div>
        </nuxt-link>
      </li>
      <li class="auto-suggestion d-flex align-items-center cursor-pointer">
        <nuxt-link
          class="d-flex align-items-center justify-content-between py-50 w-100"
          to="#"
        >
          <div class="d-flex align-items-center">
            <div class="avatar mr-50">
              <img
                src="~assets/img/portrait/small/avatar-s-6.jpg"
                alt="png"
                height="32"
              />
            </div>
            <div class="search-data">
              <p class="search-data-title mb-0">Anna Strong</p>
              <small class="text-muted">Web Designer</small>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <ul class="main-search-list-defaultlist-other-list d-none">
      <li
        class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer"
      >
        <a
          class="d-flex align-items-center justify-content-between w-100 py-50"
        >
          <div class="d-flex justify-content-start">
            <span class="mr-75 feather icon-alert-circle"></span>
            <span>No results found.</span>
          </div>
        </a>
      </li>
    </ul>
    <!-- END: header-->
  </div>
</template>

<script>
export default {
  name:"Header"
}
</script>
<style scoped>
.csup {
  width: 40px;
  height: 40px;
  top: 50px;
  left: 110px;
  z-index: 1;
  position: relative;
  font-size: 12px;
  border-radius: 50%;
  line-height: 25px;
}
.other-link {
  position: fixed;
  bottom: 0;
  left: 0;
}
.a-card:hover .card {
  box-shadow: 0 5px 35px 0 rgba(204, 204, 204, 0.1);
}
@media only screen and (max-width: 768px) {
  .csup {
    width: 40px;
    height: 40px;
    top: 12px;
    left: 150px;
    z-index: 1;
    position: absolute;
    font-size: 12px;
    border-radius: 50%;
    line-height: 25px;
  }
}
</style>
