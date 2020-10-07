<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: auto;">
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
                <section class="card px-2 py-2">
                  <div class="card-header pb-2">
                    <h4 class="font-weight-light">Basic Info</h4>
                  </div>
                  <div class="card-content">
                    <div class="card-body pt-0">
                      <form action="index.html">
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
                          class="btn btn-primary btn-inline mb-50"
                          style="border-radius:40px;"
                        >
                          Update
                        </button>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <section class="card card px-2 py-2">
                  <div class="card-header pb-2">
                    <h4 class="font-weight-light">Next of Kin</h4>
                  </div>
                  <div class="card-content">
                    <div class="card-body pt-0">
                      <form action="index.html">
                        <div class="row">
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <fieldset class="form-group">
                              <label for="basicInput"
                                >First Name:</label
                              >
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
                              <label for="basicInput"
                                >Last Name:</label
                              >
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
                              <label for="basicInput"
                                >Phone:</label
                              >
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
                              <label for="basicInput"
                                >Address:</label
                              >
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
                            <div class="text-bold-100 font-small-2">
                              City:
                            </div>
                            <fieldset class="form-group">
                              <select id="customSelect" class="custom-select" style="border-radius:40px;">
                                <option selected>Choose..</option>
                                <option value="IT">Yaba</option>
                                <option value="Blade Runner">Lekki</option>
                                <option value="Thor Ragnarok">Ikeja</option>
                              </select>
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-0">
                            <div class="text-bold-100 font-small-2">
                              State (next of kin):
                            </div>
                            <fieldset class="form-group">
                              <select id="customSelect" class="custom-select" style="border-radius:40px;">
                                <option selected>Choose..</option>
                                <option value="IT">Lagos</option>
                                <option value="Blade Runner">Oyo</option>
                                <option value="Thor Ragnarok">Benue</option>
                              </select>
                            </fieldset>
                          </div>
                          <div class="col-xl-4 col-md-6 col-12 mb-1">
                            <div class="text-bold-100 font-small-2">
                              Country (next of kin):
                            </div>
                            <fieldset class="form-group">
                              <select id="customSelect" class="custom-select" style="border-radius:40px;">
                                <option selected>Choose..</option>
                                <option value="IT">Nigeria</option>
                                <option value="Blade Runner">Usa</option>
                                <option value="Thor Ragnarok">Turkey</option>
                              </select>
                            </fieldset>
                          </div>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-inline mb-50"
                          style="border-radius:40px;"
                        >
                          Update
                          </button>
                      </form>
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
import Header from '~/components/customer/header'
import Footer from '~/components/customer/footer'
import SideBar from '~/components/customer/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
  },
  middleware:['auth','patient']
}
</script>
<style scoped>
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    
    .content{
        margin-left:0;
    }
      
  }
</style>

