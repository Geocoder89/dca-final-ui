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
                  <h3 class="content-header-title float-left mb-0">
                    Case File
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <!-- Data list view starts --> 
            <section id="data-list-view" class="data-list-view-header">
              <div class="row justify-content-md-center">
                <div class="col-md-6 col-lg-6">
                  <!-- DataTable starts -->
                  <div class="card px-2 pt-2 pb-1">
                    <table class="table data-list-view">
                      <tbody>
                        <tr>
                          <td class="product-name">Talk to a doctor</td>
                          <td>
                            <nuxt-link
                              to="/patients/waiting"
                              class="btn btn-primary float-right cbtn"
                              >Initiate</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name">Schedule Home Visit</td>
                          <td>
                            <nuxt-link
                              to="/patients/schedulehome"
                              class="btn btn-primary float-right cbtn"
                              >Schedule</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name">Case File</td>
                          <td>
                            <nuxt-link
                              to="/patients/casefile"
                              class="btn btn-primary float-right cbtn"
                              >View</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name">Request For a Nurse</td>
                          <td>
                            <nuxt-link
                              to="/patients/requestnurse"
                              class="btn btn-primary float-right cbtn"
                              >Book</nuxt-link
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
  name: 'consult',
  components: {
    Header,
    Footer,
    Sidebar
  },
  middleware:['auth','patient']
}
</script>
<style scoped>

  .cbtn {
      width:58%;
      height:35px;
      line-height:8px;
      text-align:center;
      border-radius:40px;
  }
        
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .cbtn {
        width:100%;
        height:35px;
        font-size:12px;
        line-height:8px;
        text-align:center;
        border-radius:40px;
    }
    .content{
        margin-left:0;
    }
      
  }
</style>
