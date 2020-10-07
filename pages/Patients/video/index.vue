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
            <div class="content-header-left col-md-6 col-lg-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Video Call
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <!-- Description -->
            <div class="row justify-content-center"> 
              <div class="col-lg-6 col-md-6 col-12">
                <section
                  id="description"
                  class="card d-flex justify-content-end pb-3 pr-2 pl-2 pt-2 align-items-center text-center"
                  style="height:67vh;"
                >
                <div class="top-icons">
                  <i class="fa fa-user-plus"></i>
                  <i class="fa fa-envelope-o"></i>
                </div>
                  
                    <div class="inner d-flex justify-content-center align-items-end" style="width:100%;">
                      <div class="user mr-2"></div>
                      <div class="button-groups">
                          <div class="button-circle"><i class="fa fa-file-text-o"></i></div>
                          <div class="button-circle"><i class="fa fa-video-camera"></i></div>
                          <div class="button-circle"><i class="fa fa-microphone-slash"></i></div>
                      </div>
                      <div class="button-circle close-call ml-2" style="background:#814BAA;color:#fff;"><i class="fa fa-tty"></i></div>
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
<style scoped>
  .card{
    background:url('~assets/img/portrait/small/avatar-s-11.jpg');
    background-size:cover;
    background-position: center;
    color:#fff;
  }
  .close-call{
    margin-bottom:10px;
  }
  .user{
    width:70px;
    height: 90px;
    border:1px solid #fff;
    border-radius:10px;
    align-self: start;
    background:url('~assets/img/pages/black.jpg');
    background-position: center;
    background-size:cover;
  }
  .button-groups {
      width: 25%;
      height: 50px;
      border-radius: 28px;
      line-height: 25px;
      background: transparent;
      display: flex;
      justify-content:space-around;
      align-items: center;
      box-shadow : 0 0 3px 0 rgb(230, 230, 230);
  }
  .top-icons{
    width: 100%;
    position:absolute;
    top:0;
    z-index: 1;
    font-size:14px;
    color:#fff;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-right:15px;
    padding-left:15px;
  }
  
  .button-circle{
    width: 35px;
    height: 35px;
    font-size: 18px;
    /* line-height: 45px;
     */
     display: flex;
     justify-content: center;
     align-items: center;
    background: #fff;
    color:#814BAA;
    border-radius: 50%;
    box-shadow : 0 0 3px 0 rgb(236, 236, 236);
  }

  @media only screen and (max-width: 768px) {
          /* For mobile phones: */
         
            .inner {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            .button-groups {
                width: 50%;
            }
            .content{
                margin-left:0;
            }
            
        }
</style>
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
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  middleware:['auth','patient']
}
</script>

