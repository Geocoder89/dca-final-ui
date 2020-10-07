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
                  <h4 class="content-header-title float-left mb-0">
                    Medical History
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
                                >Clinicals</a
                              >
                            </li>
                            <li class="nav-item">
                              
                            </li>
                          </ul>
                          <!-- Tab panes -->
                          <!-- Dashboard Analytics end -->
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="row">
                     <div class="col-lg-7 col-md-7 col-5 justify-content-center">
                  <nuxt-link to="consult" class="a-card">
                        <div
                          class="avatar mt-2"
                          style="background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style=""
                          >
                            <img src="~assets/img/heartbeat.png"
                            class="cimg"
                            />
                          </div>
                        </div>
                  </nuxt-link>
                     </div>
                     <div class="col-lg-4 col-md-4 col-7 d-flex justify-content-center flex-column">
                       <h4 class="">56% <br>
                       </h4>
                       <small>Heart Rate</small>
                     </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                <div class="row">
                     <div class="col-lg-7 col-md-7 col-5 align-item-center">
                  <nuxt-link to="consult" class="a-card">
                        <div
                          class="avatar mt-2"
                          style="background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style=""
                          >
                            <!-- <i class="fa fa-heartbeat text-primary font-medium-5"></i> -->
                            <img src="~assets/img/stethoscope.png"
                            class="cimg"
                            />
                          </div>
                        </div>
                  </nuxt-link>
                     </div>
                     <div class="col-lg-4 col-md-4 col-7 d-flex justify-content-center flex-column">
                       <h4 class="">120/80 <br>
                       </h4>
                       <small>Blood Pressure</small>
                     </div>
                </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="row">
                     <div class="col-lg-7 col-md-7 col-5">
                  <nuxt-link to="consult" class="a-card">
                        <div
                          class="avatar mt-2"
                          style="background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style=""
                          >
                            <img src="~assets/img/health-report.png"
                            class="cimg"
                            />
                          </div>
                        </div>
                  </nuxt-link>
                     </div>
                     <div class="col-lg-4 col-md-4 col-7 d-flex justify-content-center flex-column">
                       <h4 class="">5.7'ft <br>
                       </h4>
                       <small>Hieght</small>
                     </div>
                     
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                <div class="row">
                     <div class="col-lg-7 col-md-7 col-5 align-item-center">
                  <nuxt-link to="consult" class="a-card">
                        <div
                          class="avatar mt-2"
                          style="background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style=""
                          >
                            <!-- <i class="fa fa-heartbeat text-primary font-medium-5"></i> -->
                            <img src="~assets/img/weight-scale.png"
                            class="cimg"
                            />
                          </div>
                        </div>
                  </nuxt-link>
                     </div>
                     <div class="col-lg-4 col-md-4 col-7 d-flex justify-content-center flex-column">
                       <h4 class="">135 <br>
                       </h4>
                       <small>Weight</small>
                     </div>
                </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="row justify-content-center">
                     <div class="col-lg-7 col-md-7 col-5">
                  <nuxt-link to="consult" class="a-card">
                        <div
                          class="avatar mt-2"
                          style="background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style=""
                          >
                            <img src="~assets/img/cd.png"
                            class="cimg"
                            />
                          </div>
                        </div>
                  </nuxt-link>
                     </div>
                     <div class="col-lg-4 col-md-4 col-7 d-flex justify-content-center flex-column">
                       <h4 class="">135 <br>
                       </h4>
                       <small>Pulse Rate</small>
                     </div>
                     
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                <div class="row justify-content-center">
                     <div class="col-lg-7 col-md-7 col-5 align-item-center">
                  <nuxt-link to="consult" class="a-card">
                        <div class="avatar mt-2" style="background: #fff;">
                          <div
                            class="avatar-content"
                            style=""
                          >
                            <!-- <i class="fa fa-heartbeat text-primary font-medium-5"></i> -->
                            <img src="~assets/img/handicap.png"
                            class="cimg"
                            />
                          </div>
                        </div>
                  </nuxt-link>
                     </div>
                     <div class="col-lg-4 col-md-4 col-7 d-flex justify-content-center flex-column">
                       <h4 class="">135 <br>
                       </h4>
                       <small>Calories</small>
                     </div>
                </div>
                </div>
              </div>
            <!-- Dashboard Analytics end -->
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
import Header from '~/components/doctor/header'
import Footer from '~/components/doctor/footer'
import Sidebar from '~/components/doctor/sidebar'

export default {
  name: 'Singlefile',
  components: {
    Header,
    Footer,
    Sidebar
  },
  middleware:['auth','doctor']
}
</script>
<style scoped>
.va-btn{
  font-size:16px;
}
.cimg{
  width:80px;
  height:80px;
  opacity:0.3;
  border-radius:0;
}
.avatar-content{
  width: 130px;
  height:130px;
  font-size: 124px;
}
.a-card:hover .card{
    box-shadow: 0 5px 35px 0 rgba(204, 204, 204, 0.1);
}
@media only screen and (max-width: 768px) {
    .va-btn {
      width: 120px;
      height: auto;
      font-size: 11px;
      line-height: 15px;
    }
    .cimg{
      width:60px;
      height:60px;
      opacity:0.3;
      border-radius:0;
      align-self: center;
    }
    
}

</style>
