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
            <div class="content-header-left col-md-5 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h3 class="content-header-title float-left mb-0">
                    Request a Nurse
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
                  <div class="card px-2 pb-1 justify-content-center">
                    <div class="card-header">
                      <!-- <div class="card-title">Help</div> -->
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 mb-1">
                          <h4  class="font-weight-light">
                            Instantly book a registered nurse for general
                            healthcare service.
                          </h4>
                          <small class="text-warning"
                            >Please note this service cost ₦5000 to connect you
                            with a nurse.</small
                          >
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <fieldset>
                            <div class="row">
                              <div class="col-xl-12 col-md-12 col-12 mb-0">
                                <fieldset class="form-group">
                                  <label for="basicInput"
                                    >Request Service Description:</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="basicInput"
                                    placeholder=""
                                    style="border-radius:40px;"
                                  />
                                </fieldset>
                              </div>
                              <div class="col-12">
                                <div class="form-group">
                                  <label for="accountTextarea"
                                    >Service Date:</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control pickadate"
                                    id="basicInput"
                                    placeholder=""
                                    style="border-radius:40px;"
                                  />
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="form-group">
                                  <label for="accountTextarea"
                                    >Service Hours:</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control pickatime-format"
                                    id="basicInput"
                                    placeholder=""
                                    style="border-radius:40px;"
                                  />
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="form-group">
                                  <label for="accountTextarea"
                                    >Other Comment:</label
                                  >
                                  <textarea
                                    class="form-control"
                                    id="accountTextarea"
                                    style="border-radius:40px;"
                                    rows="3"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>

                        <div class="col-12 d-flex justify-content-start">
                          <nuxt-link
                            to="schedulemessage"
                            class="btn btn-primary"
                            style="border-radius:40px;"
                            ><i class="feather"></i> Request
                          </nuxt-link>
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
import Header from '~/components/customer/header'
import Footer from '~/components/customer/footer'
import SideBar from '~/components/customer/sidebar'

export default {
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
