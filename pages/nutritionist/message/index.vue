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
            <div class="content-header-left col-md-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h3 class="content-header-title float-left mb-0">Messages</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section class="page-users-view">
              <div class="row justify-content-center">
                <!-- account start -->
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="card justify-content-center">
                    <div class="card-header">
                      <h4 class="font-weight-light">Inbox(18)</h4>
                      <hr />
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <ul class="list-group list-group-flush">
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <nuxt-link to="#"
                                >Pharmarcy</nuxt-link
                              >
                              <span class="badge badge-warning badge-pill"
                                >2</span
                              >
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <nuxt-link to="#">nutritionist</nuxt-link>
                              <span class="badge badge-warning badge-pill"
                                >1</span
                              >
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <nuxt-link to="#">Ambulance</nuxt-link>
                              <span class="badge badge-warning badge-pill"
                                >3</span
                              >
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <nuxt-link to="#">nutritionist Center</nuxt-link>
                              <span class="badge badge-warning badge-pill"
                                >4</span
                              >
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <nuxt-link to="#">Delivery Operators</nuxt-link>
                              <span class="badge badge-warning badge-pill"
                                >2</span
                              >
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <nuxt-link to="#">Nutritionist/Wellness Company</nuxt-link>
                              <span class="badge badge-warning badge-pill"
                                >2</span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
import Header from '~/components/nutritionist/header'
import Footer from '~/components/nutritionist/footer'
import Sidebar from '~/components/nutritionist/sidebar'

export default {
  name: 'Message',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
