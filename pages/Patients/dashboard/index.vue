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
        <!-- <div class="header-navbar-shadow"></div> -->
        <div class="content-wrapper">
          <div class="content-header row">
            <div class="content-header-left col-md-12 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Hi, James
                  </h4>
                  <nuxt-link
                    class="btn-icon btn-lg float-right btn btn-danger btn-round btn-sm "
                    to="emergency"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><i class="fa fa-ambulance"></i
                  ></nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section id="dashboard-analytics" class="mb-0">
              <div class="row justify-content-center">
                <div class="col-lg-2 col-md-4 col-6 pb-0">
                  <sup class=""
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >1</span
                    ></sup
                  >
                  <nuxt-link to="medicalhistory" class="">
                    <div
                      class="card d-flex flex-column justify-content-center"
                      style="border-radius: 33px;background: #F8F8F8;box-shadow: none;"
                    >
                      <div class="card-content align-self-center">
                        <div
                          class="avatar p-50 mt-2"
                          style="width: 140px;height:140px;border-radius: 40px; background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style="width: 130px;height:130px;font-size: 124px; "
                          >
                            <!-- <i class="fa fa-heartbeat text-primary font-medium-5"></i> -->
                            <ion-icon
                              name="fitness-outline"
                              size="large"
                              style="width: 80px;height:80px;opacity:0.3"
                            ></ion-icon>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-start pb-0">
                        <h3
                          class="text-bold-300 text-center align-self-center mb-1"
                        >
                          Medical <br />History
                        </h3>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div class="col-lg-2 col-md-4 col-6 pb-0">
                  <sup
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >4+</span
                    ></sup
                  >
                  <nuxt-link to="consult" class="a-card">
                    <div
                      class="card d-flex flex-column justify-content-center"
                      style="border-radius: 33px;background: #F8F8F8;box-shadow: none;"
                    >
                      <div class="card-content align-self-center">
                        <div
                          class="avatar p-50 mt-2"
                          style="width: 140px;height:140px;border-radius: 40px;background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style="width: 130px;height:130px;font-size: 124px;"
                          >
                            <!-- <i class="fa fa-heartbeat text-primary font-medium-5"></i> -->
                            <ion-icon
                              name="chatbubbles-outline"
                              size="large"
                              style="width: 100px;height:100px;opacity:0.3"
                            ></ion-icon>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-start pb-0">
                        <h3
                          class="text-bold-300 text-center align-self-center mb-1"
                        >
                          Consulting <br />Room
                        </h3>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </section>
            <!-- Dashboard Analytics end -->
            <section id="dashboard-analytics" class="mt-0">
              <div class="row justify-content-center">
                <div class="col-lg-2 col-md-4 col-6">
                  <sup
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >4+</span
                    ></sup
                  >
                  <nuxt-link to="consult" class="a-card">
                    <div
                      class="card d-flex flex-column justify-content-center"
                      style="border-radius: 33px;background: #F8F8F8;box-shadow: none;"
                    >
                      <div class="card-content align-self-center">
                        <div
                          class="avatar p-50 mt-2"
                          style="width: 140px;height:140px;border-radius: 40px;background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style="width: 130px;height:130px;font-size: 124px;"
                          >
                            <!-- <i class="fa fa-heartbeat text-primary font-medium-5"></i> -->
                            <ion-icon
                              name="mail-unread-outline"
                              size="large"
                              style="width: 100px;height:100px;opacity:0.3"
                            ></ion-icon>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-start pb-0">
                        <h3
                          class="text-bold-300 text-center align-self-center mb-1"
                        >
                          Message
                        </h3>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                  <sup
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >4+</span
                    ></sup
                  >
                  <nuxt-link to="consult" class="a-card">
                    <div
                      class="card d-flex flex-column justify-content-center"
                      style="border-radius: 33px;background: #F8F8F8;box-shadow: none;"
                    >
                      <div class="card-content align-self-center">
                        <div
                          class="avatar p-50 mt-2"
                          style="width: 140px;height:140px;border-radius: 40px;background: #fff;"
                        >
                          <div
                            class="avatar-content"
                            style="width: 130px;height:130px;font-size: 124px;"
                          >
                            <!-- <i class="fa fa-heartbeat text-primary font-medium-5"></i> -->
                            <ion-icon
                              name="receipt-outline"
                              size="large"
                              style="width: 100px;height:100px;opacity:0.3"
                            ></ion-icon>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-start pb-0">
                        <h3
                          class="text-bold-300 text-center align-self-center mb-1"
                        >
                          My Case <br />File
                        </h3>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </section>
            <!-- Dashboard Analytics end -->
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
import Sidebar from '~/components/customer/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
<style scoped>

  .csup {
      width: 40px;
      height: 40px;
      top: 50px;
      left:110px;
      z-index:1;
      position: relative;
      font-size: 12px;
      border-radius: 50%;
      line-height: 25px;
      background: #814BAA;
  }
        .a-card:hover .card{
            box-shadow: 0 5px 35px 0 rgba(204, 204, 204, 0.1);
        }
        @media only screen and (max-width: 768px) {
          /* For mobile phones: */
         .dashboard-content{
           padding-top:50px;
           padding-left:0;
         }
            .csup {
                width: 30px;
                height: 30px;
                top: 20px;
                left: 120px;
                z-index: 1;
                position: absolute;
                font-size: 16px !important;
                border-radius: 50%;
                line-height: 23px;
                text-align: center;
                background: #814BAA;
                padding: 5px;
            }
            
        }
</style>
