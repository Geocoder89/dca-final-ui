<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: hidden;">

      <Header></Header>
      <Sidebar></Sidebar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row pb-0">
            <div class="content-header-left col-md-12 col-12 mb-2">
              <div class="row breadcrumbs-top justify-content-center">
                <div class="col-12 col-lg-6 col-md-6">
                  <h4 class="content-header-title float-left mb-0">
                    Hi, {{user.first_name | capitalize}}
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
              <!-- <div class="row justify-content-center mt-2">
                  <div class="col-12 col-md-12 col-lg-12 justify-content-center text-center">
                  <nuxt-link
                    class="btn-icon btn-lg btn btn-primary btn-round btn-sm align-self-center" style="font-size:16px;"
                    to="/patients/waiting"><i class="fa fa-phone"></i>  Talk to a Doctor</nuxt-link>
                </div>
              </div> -->
            </div>
          </div>
          <div class="content-body">
            <section id="data-list-view" class="data-list-view-header">
              <div class="row justify-content-md-center">
                
                <div class="col-md-6 col-lg-6">
                  
                  <!-- DataTable starts -->
                  <div class="card">
                      <div class="row justify-content-center mt-2">
                  <div class="col-12 col-md-12 col-lg-12 justify-content-center text-center">
                  <nuxt-link
                    class="btn-icon btn-lg btn btn-primary btn-round btn-sm align-self-center" style="font-size:16px;"
                    to="/patients/waiting"><i class="fa fa-phone"></i>  Talk to a Doctor</nuxt-link>
                </div>
              </div>
            <section id="dashboard-analytics" class="mb-0">
              <div class="row justify-content-center">
                <div class="col-lg-5 col-md-4 col-6 pb-0">
                  <sup class=""
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >1</span
                    ></sup
                  >
                  <nuxt-link to="medicalhistory" class="">
                    <div
                      class="card d-flex flex-column justify-content-center mb-0"
                      style="border-radius: 33px;background: #F8F8F8;box-shadow: none;background:#fff;"
                    >
                      <div class="card-content align-self-center">
                        <div
                          class="avatar p-50 mt-2"
                          style="width: 140px;height:140px;border-radius: 40px; background: #fff;box-shadow: 0px 0px 5px #eee;"
                        >
                          <div
                            class="avatar-content"
                            style="width: 130px;height:130px;font-size: 124px;"
                          >
                            <div style="background:#43D9FF;display:flex;padding:20px;border-radius:50%;">
                            <ion-icon
                              name="fitness"
                              size="large"
                              style="width: 65px;height:65px;color:#814BAA;color:red !important;"
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
                          Medical <br />History
                        </h3>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div class="col-lg-5 col-md-4 col-6 pb-0">
                  <sup
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >4</span
                    ></sup
                  >
                  <nuxt-link to="consult" class="a-card">
                    <div
                      class="card d-flex flex-column justify-content-center mb-0"
                      style="border-radius: 33px;background: #F8F8F8;box-shadow: none;background:#fff;"
                    >
                      <div class="card-content align-self-center">
                        <div
                          class="avatar p-50 mt-2"
                          style="width: 140px;height:140px;border-radius: 40px;background: #fff;box-shadow: 0px 0px 5px #eee;"
                        >
                          <div
                            class="avatar-content"
                            style="width: 130px;height:130px;font-size: 124px;"
                          >
                            <div style="background:#43D9FF;display:flex;padding:20px;border-radius:50%;">
                            <ion-icon
                              name="chatbubbles"
                              size="large"
                              color="light"
                              style="width: 65px;height:65px;color:#814BAA;"
                            ></ion-icon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-start pb-0">
                        <h3
                          class="text-muted text-center align-self-center mb-1"
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
                <div class="col-lg-5 col-md-4 col-6">
                  <sup
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >4</span
                    ></sup
                  >
                  <nuxt-link to="consult" class="a-card">
                    <div
                      class="card d-flex flex-column justify-content-center"
                      style="border-radius: 33px;background: #F8F8F8;box-shadow: none;background:#fff;"
                    >
                      <div class="card-content align-self-center">
                        <div
                          class="avatar p-50 mt-2"
                          style="width: 140px;height:140px;border-radius: 40px;background: #fff;box-shadow: 0px 0px 5px #eee;"
                        >
                          <div
                            class="avatar-content"
                            style="width: 130px;height:130px;font-size: 124px;"
                          >
                            <div style="background:#43D9FF;display:flex;padding:20px;border-radius:50%;">
                            <ion-icon
                              name="mail-unread"
                              size="large"
                              style="width: 65px;height:65px;color:#814BAA;"
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
                          Message
                        </h3>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div class="col-lg-5 col-md-4 col-6">
                  <sup
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >7</span
                    ></sup
                  >
                  <nuxt-link to="consult" class="a-card">
                    <div
                      class="card d-flex flex-column justify-content-center"
                      style="border-radius: 33px;background: #F8F8F8;box-shadow: none;background:#fff;"
                    >
                      <div class="card-content align-self-center">
                        <div
                          class="avatar p-50 mt-2"
                          style="width: 140px;height:140px;border-radius: 40px;background: #fff;box-shadow: 0px 0px 5px #eee;"
                        >
                          <div
                            class="avatar-content"
                            style="width: 130px;height:130px;font-size: 124px;"
                          >
                            <div style="background:#43D9FF;display:flex;padding:20px;border-radius:50%;">
                            <ion-icon
                              name="receipt"
                              size="large"
                              style="width: 65px;height:65px;color:#814BAA;"
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
import Sidebar from '~/components/customer/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    Sidebar
  },
  filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  middleware:['auth','patient']
}
</script>
<style scoped>

  .csup {
      width: 40px;
      height: 40px;
      top: 50px;
      left:150px;
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
            .content{
              margin-left:0;
            }
            
        }
</style>
