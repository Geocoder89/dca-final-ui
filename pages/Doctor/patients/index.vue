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
            <div class="content-header-left col-md-6 col-12 mb-6">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-2">
                    Available patients
                  </h4>
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
                  <div class="card">
                    <table class="table data-list-view">
                      <tbody>
                        <tr>
                          <td class="product-name p-2" style="font-size:0.9em;">1. Idowu Philips</td>
                          <td>
                            <nuxt-link
                              to="/doctor/chats"
                              class="btn btn-sm btn-primary"
                              style="border-radius:40px;"
                              >Check In</nuxt-link
                            >
                          </td>
                          <td>
                            <nuxt-link
                              to="/doctor/casefile"
                              style="font-size:0.7em;"
                              >Read Cases |</nuxt-link
                            >
                            <nuxt-link
                              to="/doctor/medicals"
                              style="font-size:0.7em;"
                              >Medical History</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name p-2">2. Abdul Aminu</td>
                          <td>
                            <nuxt-link
                              to="/doctor/chats"
                              class="btn btn-sm btn-primary"
                              style="border-radius:40px;"
                              >Check In</nuxt-link
                            >
                          </td>
                          <td>
                            <nuxt-link
                              to="/doctor/casefile"
                              style="font-size:0.7em;"
                              >Read Cases |</nuxt-link
                            >
                            <nuxt-link
                              to="/doctor/medicals"
                              style="font-size:0.7em;"
                              >Medical History</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name p-2">3. Chioma Obi</td>
                          <td>
                            <nuxt-link
                              to="/doctor/chats"
                              class="btn btn-sm btn-primary"
                              style="border-radius:40px;"
                              >Check In</nuxt-link
                            >
                          </td>
                          <td>
                            <nuxt-link
                              to="/doctor/casefile"
                              style="font-size:0.7em;"
                              >Read Cases |</nuxt-link
                            >
                            <nuxt-link
                              to="/doctor/medicals"
                              style="font-size:0.7em;"
                              >Medical History</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name p-2">4. Graves James</td>
                          <td>
                            <nuxt-link
                              to="/doctor/chats"
                              class="btn btn-sm btn-primary"
                              style="border-radius:40px;"
                              >Check In</nuxt-link
                            >
                          </td>
                          <td>
                            <nuxt-link
                              to="/doctor/casefile"
                              style="font-size:0.7em;"
                              >Read Cases |</nuxt-link
                            >
                            <nuxt-link
                              to="/doctor/medicals"
                              style="font-size:0.7em;"
                              >Medical History</nuxt-link
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
import Header from '~/components/doctor/header'
import Footer from '~/components/doctor/footer'
import Sidebar from '~/components/doctor/sidebar'

export default {
  name: 'Patients',
  components: {
    Header,
    Footer,
    Sidebar
  }
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
      
  }
</style>
