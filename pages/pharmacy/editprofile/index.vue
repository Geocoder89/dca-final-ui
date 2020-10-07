<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: hidden;">

      <Header></Header>
      <SideBar></SideBar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Edit Profile
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <section class="card">
                  <div class="card-header">
                    <h5>Pharmacy Information</h5>
                  </div>
                  <div class="card-content">
                    <div class="card-body pt-0">
                      <form action="index.html">
                        <div class="row">
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Registered Name:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder="Enter Registered Name"
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
                                placeholder="Enter Phone"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">License:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder="Enter License"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-12 col-md-12 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Pharmacy Description:</label>
                              <textarea
                                id="basicInput"
                                style="resize:none;"
                                class="form-control">
                              </textarea>
                            </fieldset>
                          </div>
                          <div class="col-xl-12 col-md-12 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Address:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder="Enter Your Address"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <div class="text-bold-100 font-small-2">
                              City:
                            </div>
                            <fieldset class="form-group">
                              <select id="customSelect" class="custom-select">
                                <option selected>Choose..</option>
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
                              <select id="customSelect" class="custom-select">
                                <option selected>Choose..</option>
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
                              <select id="customSelect" class="custom-select">
                                <option selected>Choose..</option>
                                <option value="IT">Nigeria</option>
                                <option value="Blade Runner">Usa</option>
                                <option value="Thor Ragnarok">Turkey</option>
                              </select>
                            </fieldset>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <p>Contact Person #1 Details</p>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Name:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder="Enter Name"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Email:</label>
                              <input
                                id="basicInput"
                                type="email"
                                class="form-control"
                                placeholder="Enter Email"
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
                                placeholder="Edit Phone"
                              />
                            </fieldset>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <p>Contact Person #2 Details</p>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Name:</label>
                              <input
                                id="basicInput"
                                type="text"
                                class="form-control"
                                placeholder="Enter Name"
                              />
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput">Email:</label>
                              <input
                                id="basicInput"
                                type="email"
                                class="form-control"
                                placeholder="Enter Email"
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
                                placeholder="Edit Phone"
                              />
                            </fieldset>
                          </div>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-inline mb-50"
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
                <section class="card">
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
import Header from '~/components/pharmacy/header'
import Footer from '~/components/pharmacy/footer'
import SideBar from '~/components/pharmacy/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
  }
}
</script>
<style scoped>
.other-link {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
