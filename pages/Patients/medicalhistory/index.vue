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
                  <h3 class="content-header-title float-left mb-0">
                    Medical History
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <!-- account setting page start -->
            <section id="page-account-settings">
              <div class="row justify-content-center">
                <!-- left menu section -->
                <!-- <div class="col-md-3 mb-2 mb-md-0">
                  <ul class="nav nav-pills flex-column mt-md-0 mt-1">
                    <li class="nav-item">
                      <a
                        id="account-pill-general"
                        class="nav-link d-flex py-75 active"
                        data-toggle="pill"
                        href="#account-vertical-general"
                        aria-expanded="true"
                      >
                        <i class="feather icon-globe mr-50 font-medium-3"></i>
                        General
                      </a>
                    </li>
                  </ul>
                </div> -->
                <!-- right content section -->
                <div class="col-md-6">
                  <div class="card px-2 pt-2 pb-0">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="tab-content">
                          <div
                            id="account-vertical-general"
                            role="tabpanel"
                            class="tab-pane active"
                            aria-labelledby="account-pill-general"
                            aria-expanded="true"
                          >
                            <h4 class="font-weight-light mb-2">Medical Information</h4>
                            <hr>
                            <form novalidate>
                              <div class="row">
                                <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                                  <div class="form-group">
                                    <div class="controls">
                                      <label for="account-name"
                                        >Heart Rate:</label
                                      >
                                      <input
                                        id="lastname"
                                        type="text"
                                        class="form-control"
                                        placeholder="80"
                                        style="border-radius:40px;"
                                        value=""
                                        required
                                        data-validation-required-message="This name field is required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                                  <div class="form-group">
                                    <div class="controls">
                                      <label for="account-username"
                                        >Weight:</label
                                      >
                                      <input
                                        id="firstname"
                                        type="text"
                                        class="form-control"
                                        placeholder="6.6"
                                        style="border-radius:40px;"
                                        value=""
                                        required
                                        data-validation-required-message="This username field is required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                                  <div class="form-group">
                                    <div class="controls">
                                      <label for="account-name">Height:</label>
                                      <input
                                        id="lastname"
                                        type="text"
                                        class="form-control"
                                        placeholder="66"
                                        style="border-radius:40px;"
                                        value=""
                                        required
                                        data-validation-required-message="This name field is required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                                  <div class="form-group">
                                    <div class="controls">
                                      <label for="account-name"
                                        >Sugar Level:</label
                                      >
                                      <input
                                        id="lastname"
                                        type="text"
                                        class="form-control"
                                        placeholder=""
                                        style="border-radius:40px;"
                                        value=""
                                        required
                                        data-validation-required-message="This name field is required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12 mb-1">
                                  <label for="account-name"
                                    ><strong
                                      >Some disease you had:</strong
                                    ></label
                                  >
                                </div>
                                <hr />
                                <div class="col-12 mb-1">
                                  <label for="account-name" style="width:100%;"
                                    >Cancer?</label
                                  >
                                  <select
                                    id="customSelect"
                                    class="custom-select"
                                    style="width:20%;border-radius:40px;"
                                    
                                  >
                                    <option selected>Yes</option>
                                    <option>No</option>
                                  </select>
                                </div>
                                <div class="col-12 mb-1">
                                  <label for="account-name" style="width:100%;"
                                    >Diabetes?</label
                                  >
                                  <select
                                    id="customSelect"
                                    class="custom-select"
                                    style="width:20%;border-radius:40px;"
                                  >
                                    <option selected>Yes</option>
                                    <option>No</option>
                                  </select>
                                </div>
                                <div class="col-12">
                                  <label for="account-name"
                                    >Current Medication?</label
                                  >
                                  <div class="d-inline-block mb-1">
                                    <div class="input-group">
                                      <input
                                        type="text"
                                        value=""
                                        class="form-control"
                                        placeholder="Name"
                                        style="width:60%;border-radius:40px;"
                                      />
                                      <input
                                        type="text"
                                        class="form-control ml-1"
                                        placeholder="Dose"
                                        style="width:30%;border-radius:40px;"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12 mb-1">
                                  <label for="account-name" style="width:100%;"
                                    >Alcohol Intake?</label
                                  >
                                  <select
                                    id="customSelect"
                                    class="custom-select"
                                    style="width:20%;border-radius:40px;"
                                  >
                                    <option selected>No</option>
                                    <option value="">Yes</option>
                                  </select>
                                </div>
                                <div class="col-12 mb-1">
                                  <label for="account-name"
                                    >If yes, how many per week:</label
                                  >
                                  <div class=" mb-1" style="width: 20%;">
                                    <div class="input-group">
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder="5"
                                        style="width:20%;border-radius:40px;"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div class="col-12 mb-1">
                                  <label for="account-name" style="width:100%;"
                                    >Smoking?</label
                                  >
                                  <select
                                    id="customSelect"
                                    class="custom-select"
                                    style="width:20%;border-radius:40px;"
                                  >
                                    <option selected>No</option>
                                    <option value="">Yes</option>
                                  </select>
                                </div>
                                <div class="col-12 mb-1">
                                  <label for="account-name"
                                    >If yes, how many per week:</label
                                  >
                                  <div class=" mb-1" style="width: 20%;">
                                    <div class="input-group">
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder="5"
                                        style="width:20%;border-radius:40px;"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="form-group">
                                    <label for="accountTextarea"
                                      >Please specify any additional
                                      info"?</label
                                    >
                                    <textarea
                                      id="accountTextarea"
                                      class="form-control"
                                      rows="3"
                                      placeholder="asthma, lung disease"
                                      style="border-radius:20px;"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 pl-0">
                                <nuxt-link
                                  to="#"
                                  class="btn btn-primary align-self-start"
                                  style="border-radius:40px;"
                                  ><i class="feather icon-save"></i> Save
                                </nuxt-link>
                              </div>
                            </form>
                          </div>
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

