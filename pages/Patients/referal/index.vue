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
                  <h4 class="content-header-title float-left mb-0">Referal</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section class="page-users-view">
              <div class="row justify-content-center">
                <!-- account start -->
                <div class="col-12 col-md-5 col-lg-5">
                  <div class="card px-2 pb-2 justify-content-center">
                    <div class="card-header">
                      <!-- <div class="card-title">Help</div> -->
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 pb-2">
                          <h4 class="font-weight-light">
                            Refer your family and freinds and enjoy Drcallaway
                            incentives.
                          </h4>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <fieldset>
                            <div class="row">
                              <div class="col-12">
                                <div class="form-group">
                                  <label for="accountTextarea"
                                  class="mb-1"
                                    >Family/Freind's Email:</label
                                  >
                                  <input
                                    id="basicInput"
                                    type="text"
                                    class="form-control"
                                    style="border-radius:40px;"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="form-group">
                                  <label for="accountTextarea" class="mb-1">Message:</label>
                                  <textarea
                                    id="accountTextarea"
                                    class="form-control"
                                    style="border-radius:20px;"
                                    rows="3"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>

                        <div class="col-12 d-flex justify-content-start">
                          <nuxt-link
                            to="/patients/referralmessage"
                            class="btn btn-primary"
                            style="border-radius:40px;"
                            ><i class="feather"></i> Send Invite</nuxt-link
                          >
                          <!--  <button class="btn btn-outline-danger"><i class="feather icon-"></i> Cancel</button> -->
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

