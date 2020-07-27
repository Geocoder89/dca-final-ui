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
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Prescription
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
                  <div class="table-responsive">
                    <table class="table data-list-view">
                      <tbody>
                        <tr>
                          <td class="product-name">New Prescription (3) </td>
                          <td>
                            <nuxt-link
                              to="prescription/new"
                              class="btn btn-sm btn-primary float-right"
                              >View</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name">Pending Prescribed drugs (2)</td>
                          <td>
                            <nuxt-link
                              to="prescription/pending"
                              class="btn btn-sm btn-primary float-right"
                              >View</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="product-name">Completed Prescribed drugs (5)</td>
                          <td>
                            <nuxt-link
                              to="prescription/completed"
                              class="btn btn-sm btn-primary float-right"
                              >View</nuxt-link
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
.other-link {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
