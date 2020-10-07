<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: auto;">
      <Header></Header>
      <Sidebar></Sidebar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h3 class="content-header-title float-left mb-0">
                    Edit Profile
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <section class="card px-2 pb-2 pt-1">
                  <div class="card-header pb-2">
                    <h4 class="font-weight-light">Personal Info</h4>
                  </div>
                  <div class="card-content">
                    <div class="card-body pt-0">
                      <form action="#">
                        <div class="row">
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">First Name:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder=""
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Last Name:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder=""
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Phone:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder=""
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-12 col-md-12 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Address:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder=""
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Medical School Attended:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder=""
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Medical Council No:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder=""
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Year:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder=""
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-6 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">GP:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder=""
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-6 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Specialty:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder="if any..."
                                style="border-radius:40px;"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <div class="text-bold-100 font-small-2">
                              City:
                            </div>
                            <fieldset class="form-group">
                              <select id="customSelect" class="custom-select" style="border-radius:40px;">
                                <option selected>Choose city..</option>
                                <option value="IT">Yaba</option>
                                <option value="Blade Runner">Lekki</option>
                                <option value="Thor Ragnarok">Ikeja</option>
                              </select>
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <div class="text-bold-100 font-small-2">
                              State:
                            </div>
                            <fieldset class="form-group">
                              <select id="customSelect" class="custom-select" style="border-radius:40px;">
                                <option selected>Choose state..</option>
                                <option value="IT">Lagos</option>
                                <option value="Blade Runner">Oyo</option>
                                <option value="Thor Ragnarok">Benue</option>
                              </select>
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-1">
                            <div class="text-bold-100 font-small-2">
                              Country:
                            </div>
                            <fieldset class="form-group">
                              <select id="customSelect" class="custom-select" style="border-radius:40px;">
                                <option selected>Choose country..</option>
                                <option value="IT">Nigeria</option>
                                <option value="Blade Runner">Usa</option>
                                <option value="Thor Ragnarok">Turkey</option>
                              </select>
                            </fieldset>
                          </div>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary float-right btn-inline mb-50"
                          style="border-radius:40px;"
                        >
                          Save Changes
                        </button>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 col-12">
                <section class="card px-2 pb-2 pt-1">
                  <div class="card-header">
                    <!-- <h5>Hospital Information</h5> -->
                  </div>
                  <div class="card-content">
                    <div class="card-body pt-0">
                      <h6><nuxt-link to="#"><i class="fa fa-money"></i> Update Account Details</nuxt-link></h6>
                    </div>
                  </div>
                </section>

              </div>
          </div>
          </div>
        </div>
      </div>
      <!-- END: Content-->

      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <Footer></Footer>
    </body>
  </div>
</template>
<script>
import Header from '~/components/doctor/header'
import Footer from '~/components/doctor/footer'
import Sidebar from '~/components/doctor/sidebar'

export default {
  name: 'editprofile',
  components: {
    Header,
    Footer,
    Sidebar
  },
  middleware:['auth','doctor']
}
</script>
<style scoped>
.other-link {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
