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
            <div class="content-header-left col-md-5 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h3 class="content-header-title float-left mb-0">
                    Check In
                  </h3>
                </div>
              </div>
            </div>

          </div>
          <div class="content-body">
            <section class="page-users-view">
              <div class="row justify-content-center">
                <!-- account start -->
                <div class="col-12 col-md-5 col-lg-5">
                  <div class="card px-1 justify-content-center">
                    <div class="card-header">
                      <!-- <div class="card-title">Help</div> -->
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <form action="#">
                            <fieldset>
                              <div class="row">
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">New Case:</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="basicInput"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                 <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Complaint:</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="basicInput"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                 <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Diagnosis:</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="basicInput"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                 <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Prescription:</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="basicInput"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Prescription:</label>
                                    <select
                                      type="text"
                                      class="form-control"
                                      id="basicInput"
                                      style="border-radius:40px;"
                                    >
                                    <option value="">Choose</option>
                                    </select>
                                  </fieldset>
                                </div>

                              </div>
                            </fieldset>
                          </form>
                        </div>
                        <div class="col-12 d-flex justify-content-start">
                          <nuxt-link to="../editprofile" class="btn btn-primary my-2"
                          style="border-radius:40px;"
                            ><i class="feather"></i> Submit</nuxt-link
                          >
                        </div>
                      </div>
                      <div class="row">
                    <div class="col-md-12">

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <nuxt-link to="/doctor/medicals">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                    View Idowu Philips Medical History
                                </nuxt-link>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <nuxt-link to="/doctor/casefile">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                    View Idowu Philips Recent Cases
                                </nuxt-link>
                            </li>
                        </ul>
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
  name: 'Patient',
  components: {
    Header,
    Footer,
    Sidebar
  },
  middleware:['auth','doctor']
}
</script>

