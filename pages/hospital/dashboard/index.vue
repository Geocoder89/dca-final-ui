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
          <div class="content-header row pb-0">
            <div class="content-header-left col-md-12 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Welcome, Bay hills Hospital
                  </h4>
                  
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
                  <nuxt-link to="/hospital/referrals" class="">
                    <div
                      class="card d-flex flex-column justify-content-center mb-0"
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
                            <div style="background:#43D9FF;display:flex;padding:20px;border-radius:50%;">
                            <ion-icon
                              name="people"
                              size="large"
                              style="width: 65px;height:65px;"
                              color="light"
                            ></ion-icon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-start pb-0">
                        <h3
                          class="text-muted text-center align-self-center mb-1"
                        >
                          Referrals
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
                      >4</span
                    ></sup
                  >
                  <nuxt-link to="/hospital/appointments" class="a-card">
                    <div
                      class="card d-flex flex-column justify-content-center mb-0"
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
                            <div style="background:#43D9FF;display:flex;padding:20px;border-radius:50%;">
                            <ion-icon
                              name="calendar"
                              size="large"
                              color="light"
                              style="width: 65px;height:65px;"
                            ></ion-icon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-start pb-0">
                        <h3
                          class="text-muted text-center align-self-center mb-1"
                        >
                          Appointments
                        </h3>
                      </div>
                    </div>
                  </nuxt-link>
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
import Header from '~/components/hospital/header'
import Footer from '~/components/hospital/footer'
import Sidebar from '~/components/hospital/sidebar'

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
      background: #FFA34B;
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
                width: 50px;
                height: 50px;
                top: 7px;
                left: 110px;
                z-index: 1;
                position: absolute;
                font-size: 18px !important;
                border-radius: 50%;
                line-height: 38px;
                text-align: center;
                background: #FFA34B;
                padding: 5px;
            }
            
        }
</style>
