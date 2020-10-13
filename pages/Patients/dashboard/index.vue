<template>
  <div>
    <body
      class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide"
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="2-columns"
      style="overflow: hidden;"
    >
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
                  <div
                    class="alert alert-warning"
                    role="alert"
                    v-if="!user.verified"
                  >
                    You are getting this notice because you are yet to verify
                    your email address, which may in one way or the other affect
                    how you use this app. kindly
                    <a href="/auth/resend" class="text-primary"
                      >request for a new verification link</a
                    >
                    to get rid of this notice.
                  </div>
                  <h4 class="content-header-title float-left mb-1 text-center">
                    Hi, {{ user.first_name | capitalize }}
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
            <div class="container-sm">
              <div class="row">

                 <div class="col-12 col-md-12 col-lg-12 justify-content-center text-center">
                  <nuxt-link
                    class="btn-icon btn-lg btn btn-primary btn-round btn-sm align-self-center" style="font-size:16px;"
                    to="/patients/waiting"><i class="fa fa-phone"></i>  Talk to a Doctor</nuxt-link>
                </div>
                <div class="col-md-6 pad my-2">
                  <div class="card h-100" style="max-width: 400px;">
                    <!-- Body -->
                    <div class="card-body text-center bg1">
                      <!-- Avatar -->
                      <div class="single-features red ">
                        <div class="signle-icon red">
                          <i class="icofont-paper"></i>
                        </div>
                        <nuxt-link to="medicalhistory">
                          <p class="text-white">Medical History</p>
                        </nuxt-link>
                      </div>
                    </div>
                    <!-- End Body -->

                    <!-- Footer -->

                    <!-- End Footer -->
                  </div>
                </div>

                <div class="col-md-6 pad my-2">
                  <div class="card h-100" style="max-width: 400px">
                    <!-- Body -->
                    <div class="card-body text-center bg2">
                      <!-- Avatar -->
                      <div class="single-features">
                        <div class="signle-icon">
                        <i class="icofont-stethoscope-alt"></i>
                        </div>
                        <nuxt-link to="consult">
                          <p class="text-white">Consulting Room</p>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 pad my-2">
                  <div class="card h-100" style="max-width: 400px;">
                    <!-- Body -->
                    <div class="card-body text-center bg3">
                      <!-- Avatar -->
                      <div class="single-features">
                        <div class="signle-icon">
                        <i class="icofont-ui-message"></i>
                        </div>
                        <nuxt-link to="consult">
                          <p class="text-white">Message</p>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 pad my-2">
                  <div class="card h-100" style="max-width: 400px">
                    <!-- Body -->
                    <div class="card-body text-center bg4">
                      <!-- Avatar -->
                      <div class="single-features">
                        <div class="signle-icon">
                        <i class="icofont-ui-file"></i>
                        </div>
                        <nuxt-link to="consult">
                          <p class="text-white">My Case File</p>
                        </nuxt-link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card -->

            <!-- End Card -->
            <!-- <section id="data-list-view" class="data-list-view-header">
              <div class="row justify-content-md-center">

                <div class="col-md-6 col-lg-6">


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
                      class="card d-flex flex-column justify-content-center"
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

            </div>
          </div>
          </div>
          </section> -->
          </div>
        </div>
      </div>
      <!-- END: Content-->

      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <!-- <Footer></Footer> -->
    </body>
  </div>
</template>
<script>
import Header from '~/components/customer/header'
import Footer from '~/components/customer/footer'
import Sidebar from '~/components/customer/sidebar'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    Sidebar
  },
  computed: {
    ...mapGetters(['user'])
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  middleware: ['auth', 'patient']
}
</script>
<style scoped>
.csup {
  width: 40px;
  height: 40px;
  top: 50px;
  left: 150px;
  z-index: 1;
  position: relative;
  font-size: 12px;
  border-radius: 50%;
  line-height: 25px;
  background: #ffa34b;
}
.a-card:hover .card {
  box-shadow: 0 5px 35px 0 rgba(204, 204, 204, 0.1);
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .dashboard-content {
    padding-top: 50px;
    padding-left: 0;
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
    background: #ffa34b;
    padding: 5px;
  }
  .content {
    margin-left: 0;
  }
}

.pad {
  padding-left: 50px;
}

.single-features {
  text-align: center;
  position: relative;
  margin: 0;
  padding: 0px 20px;
}
.single-features .signle-icon {
  position: relative;
}
/* .single-features .single-icon:hover {
  position: relative;
} */

.single-features .signle-icon i {
  font-size: 30px;
  color: white;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  margin-top: 20px;
  top: 0;
  height: 100px;
  width: 100px;
  line-height: 100px;
  text-align: center;
  border: 3px solid #dddddd;
  border-radius: 100%;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.single-icon i {
  font-size: 20px;
  color: #a048a6;
  width: 100px;
  height: 100px;
  border: 1px solid #dddddd;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  padding: 20px;
}

.single-features p {
  padding-top: 128px;
  color: #333;
  font-weight: 400;
  font-size: 20px;
}

.bg1 {
  background: rgb(138, 40, 143);
  background: linear-gradient(
    90deg,
    rgba(138, 40, 143, 1) 0%,
    rgba(78, 7, 82, 1) 100%
  );
}

.bg2 {
 background: rgb(247,82,98);
background: linear-gradient(90deg, rgba(247,82,98,1) 0%, rgba(244,94,140,1) 100%);
}

.bg3 {
  background: rgb(99, 225, 150);
  background: linear-gradient(
    90deg,
    rgba(99, 225, 150, 1) 0%,
    rgba(59, 182, 178, 1) 100%
  );
}

.bg4 {
  background: rgb(255, 217, 71);
  background: linear-gradient(
    90deg,
    rgba(255, 217, 71, 1) 0%,
    rgba(252, 137, 84, 1) 100%
  );
}

/* hover effect */

.bg1 .single-features .signle-icon i:hover {
  color: #fff;
  background: rgb(138, 40, 143);
  background: linear-gradient(
    90deg,
    rgba(138, 40, 143, 1) 0%,
    rgba(78, 7, 82, 1) 100%
  );
}
.bg2 .single-features .signle-icon i:hover {
  color: #fff;
 background: rgb(247,82,98);
 background: linear-gradient(90deg, rgba(244,94,140,1)  0%,  rgba(247,82,98,1) 100%);
}

.bg3 .single-features .signle-icon i:hover {
  color: #fff;
  background: rgb(99, 225, 150);
  background: linear-gradient(
    90deg,
    rgba(99, 225, 150, 1) 0%,
    rgba(59, 182, 178, 1) 100%
  );
}

.bg4 .single-features .signle-icon i:hover {
  color: #fff;
  background: rgb(255, 217, 71);
  background: linear-gradient(
    90deg,
    rgba(255, 217, 71, 1) 0%,
    rgba(252, 137, 84, 1) 100%
  );
}
</style>
