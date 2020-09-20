<template>
  <div>
    <body
      class="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="2-columns"
    >
      <Header></Header>
      <SideBar></SideBar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <!-- <div class="header-navbar-shadow"></div> -->
        <div class="content-wrapper">
          <div class="content-header row">
            <div class="content-header-left col-md-12 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Hi, Alpha Pharmacy & Stores
                  </h4>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            
            <!-- Dashboard Analytics end -->
            <section id="dashboard-analytics" class="mt-0">
              <div class="row justify-content-center">
                <div class="col-lg-2 col-md-4 col-12">
                  <sup
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >4+</span
                    ></sup
                  >
                  <nuxt-link to="#" class="a-card">
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
                            <div style="background:#43D9FF;display:flex;padding:20px;border-radius:50%;">
                            <ion-icon
                              name="bandage"
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
                          class="text-bold-300 text-center align-self-center mb-1"
                        >
                          Pending Prescribe <br>
                          Drugs
                        </h3>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div class="col-lg-2 col-md-4 col-12">
                  <sup
                    ><span
                      class="badge badge-danger csup"
                      style="font-size: 19px;"
                      >4+</span
                    ></sup
                  >
                  <nuxt-link to="#" class="a-card">
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
                            <div style="background:#43D9FF;display:flex;padding:20px;border-radius:50%;">
                            <ion-icon
                              name="bandage"
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
                          class="text-bold-300 text-center align-self-center mb-1"
                        >
                         Completed Prescribe <br>
                          Drugs
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
import Header from '~/components/pharmacy/header'
import Footer from '~/components/pharmacy/footer'
import SideBar from '~/components/pharmacy/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
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