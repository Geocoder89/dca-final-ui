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
            <div class="content-header-left col-md-5 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Available Patients
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <!-- Data list view starts -->
            <section id="data-list-view" class="data-list-view-header">
              <div class="row justify-content-md-center">
                <div class="col-md-5 col-lg-5">
                  <!-- DataTable starts -->
                  <div class="card">
                    <table class="table data-list-view">
                      <tbody>
                        <tr>
                          <td class="product-name" style="font-size:0.9em;">1. Idowu Philips</td>
                          <td>
                            <nuxt-link
                              to="/Doctor/chats"
                              class="btn btn-sm btn-primary"
                              >Check In</nuxt-link
                            >
                          </td>
                          <td>
                            <nuxt-link
                              to="/Doctor/casefile"
                              style="font-size:0.7em;"
                              >Read Cases |</nuxt-link
                            >
                            <nuxt-link
                              to="/Doctor/medicals"
                              style="font-size:0.7em;"
                              >Medical History</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name">2. Abdul Aminu</td>
                          <td>
                            <nuxt-link
                              to="/Doctor/chats"
                              class="btn btn-sm btn-primary"
                              >Check In</nuxt-link
                            >
                          </td>
                          <td>
                            <nuxt-link
                              to="/Doctor/casefile"
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
                          <td class="product-name">3. Chioma Obi</td>
                          <td>
                            <nuxt-link
                              to="/Doctor/chats"
                              class="btn btn-sm btn-primary"
                              >Check In</nuxt-link
                            >
                          </td>
                          <td>
                            <nuxt-link
                              to="/Doctor/casefile"
                              style="font-size:0.7em;"
                              >Read Cases |</nuxt-link
                            >
                            <nuxt-link
                              to="/Doctor/medicals"
                              style="font-size:0.7em;"
                              >Medical History</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name">4. Graves James</td>
                          <td>
                            <nuxt-link
                              to="/Doctor/chats"
                              class="btn btn-sm btn-primary"
                              >Check In</nuxt-link
                            >
                          </td>
                          <td>
                            <nuxt-link
                              to="/Doctor/casefile"
                              style="font-size:0.7em;"
                              >Read Cases |</nuxt-link
                            >
                            <nuxt-link
                              to="/Doctor/medicals"
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
  name: 'Oatients',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
<style scoped>
.other-link {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
