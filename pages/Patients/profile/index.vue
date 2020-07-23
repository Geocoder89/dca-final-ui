<template>
  <div>
    <body
      class="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="2-columns"
    >
      <Header></Header>
      <side-bar></side-bar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">Profile</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section class="page-users-view">
              <div class="row justify-content-center">
                <!-- account start -->
                <div class="col-md-6 col-md-6 col-12">
                  <div class="card">
                    <div class="card-header">
                      <div class="card-title">Profile</div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="users-view-image">
                          <img
                            src="~assets/img/portrait/small/avatar-s-11.jpg"
                            class="users-avatar-shadow w-100 rounded mb-2 pr-2 ml-1"
                            alt="avatar"
                          />
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <form action="#">
                            <h6>Personal Info</h6>
                            <fieldset>
                              <div class="row">
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Address:</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="basicInput"
                                      placeholder="Enter Your Address"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-1">
                                  <div class="text-bold-100 font-small-2">
                                    Country:
                                  </div>
                                  <fieldset class="form-group">
                                    <select
                                      class="custom-select"
                                      id="customSelect"
                                    >
                                      <option selected>Choose country..</option>
                                      <option value="IT">Nigeria</option>
                                      <option value="Blade Runner">Usa</option>
                                      <option value="Thor Ragnarok"
                                        >Turkey</option
                                      >
                                    </select>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <div class="text-bold-100 font-small-2">
                                    State:
                                  </div>
                                  <fieldset class="form-group">
                                    <select
                                      class="custom-select"
                                      id="customSelect"
                                    >
                                      <option selected>Choose state..</option>
                                      <option value="IT">Lagos</option>
                                      <option value="Blade Runner">Oyo</option>
                                      <option value="Thor Ragnarok"
                                        >Benue</option
                                      >
                                    </select>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <div class="text-bold-100 font-small-2">
                                    City:
                                  </div>
                                  <fieldset class="form-group">
                                    <select
                                      class="custom-select"
                                      id="customSelect"
                                    >
                                      <option selected>Choose city..</option>
                                      <option value="IT">Yaba</option>
                                      <option value="Blade Runner"
                                        >Lekki</option
                                      >
                                      <option value="Thor Ragnarok"
                                        >Ikeja</option
                                      >
                                    </select>
                                  </fieldset>
                                </div>
                              </div>
                            </fieldset>
                          </form>
                        </div>

                        <div class="col-12">
                          <button class="btn btn-primary mr-1">
                            <i class="feather icon-save"></i> Save
                          </button>
                          <button class="btn btn-outline-danger">
                            <i class="feather icon-"></i> Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <Footer></Footer>
    </body>
  </div>
</template>
<script>
import Header from '~/components/customer/header'
import Footer from '~/components/customer/footer'
import SideBar from '~/components/customer/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
  }
}
</script>


