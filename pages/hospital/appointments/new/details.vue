<template>
  <div>
    <body
      class="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="2-columns"
    >
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
                  <h4 class="content-header-title float-left mb-0">
                    Appointments
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-md-center">
              <div class="col-lg-6">
                <section class="card">
                  <div class="row ">
                    <!-- account start -->
                    <div class="col-12 col-md-12 col-lg-12 pb-0">
                      <div class="card">
                        <div class="card-header">
                          <!-- <div class="card-title">Case File</div> -->
                        </div>
                        <div class="card-body pb-0">
                          <div class="row pb-0">
                            <div
                              class="col-12 col-sm-12 col-md-12 col-lg-12 pb-0"
                            ></div>
                          </div>
                          <ul
                            id="myTab2"
                            class="nav nav-tabs nav-justified"
                            role="tablist"
                          >
                            <li class="nav-item">
                              <a
                                id="home-tab-justified"
                                class="nav-link active"
                                data-toggle="tab"
                                href="#"
                                role="tab"
                                aria-controls="home-just"
                                aria-selected="true"
                                style="font-size: 16px;"
                                >New Appointment</a
                              >
                            </li>
                            <li class="nav-item">
                              
                              
                            </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="mt-2 ml-1">
                              <h6>Ahmed Haruna</h6>
                          </div>
                          <div class="tab-content pt-1">
                            <div
                              id="home-just"
                              class="tab-pane active"
                              role="tabpanel"
                              aria-labelledby="home-tab-justified"
                            >
                            <div class="col-lg-12 col-md-12 col-12">
                                <section class="mb-50">
                                    <div class="card">
                                      <div class="card-body" style="background:#F8F8F8;border-radius:20px;">
                                      <h6><strong>Tosin has booked an appointment with your hospital</strong></h6>
                                      <h6><strong>Date:</strong> 01-05-2020</h6>
                                      <h6><strong>Time:</strong> 01:30 PM</h6>
                                    </div>
                                  </div>
                                </section>
                              </div>
                              <div class="col-12 text-center mt-2">
                                   <nuxt-link to="#" class="btn btn-danger text-center" style="">Cancel</nuxt-link>
                                <nuxt-link to="#" class="btn btn-primary text-center">Send Result</nuxt-link>
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
import Header from '~/components/hospital/header'
import Footer from '~/components/hospital/footer'
import Sidebar from '~/components/hospital/sidebar'

export default {
  name: 'File',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
<style scoped>
.va-btn{
  font-size:16px;
}
@media only screen and (max-width: 768px) {
    .va-btn {
      width: 120px;
      height: auto;
      font-size: 11px;
      line-height: 15px;
    }
    
}
</style>
