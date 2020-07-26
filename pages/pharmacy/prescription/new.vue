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
          <div class="content-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">New Prescriptions</h4>
                  </div>
                  <div class="card-content">
                    <div class="card-body">
                      <ul class="list-group" id="basic-list-group">
                        <li class="list-group-item">
                          <div class="media">
                            <div class="media-body">
                              <b> 1.   </b> Chupa chups tiramisu apple pie biscuit sweet roll
                              bonbon macaroon toffee icing.
                              <nuxt-link
                              to="details"
                              class="btn btn-sm btn-primary float-right"
                              >View</nuxt-link
                            >
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="media">
                            <div class="media-body">
                              <b> 2.   </b> Chupa chups tiramisu apple pie biscuit sweet roll
                              bonbon macaroon toffee icing.
                              <nuxt-link
                              to="details"
                              class="btn btn-sm btn-primary float-right"
                              >View</nuxt-link
                            >
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="media">
                            <div class="media-body">
                              <b> 3.   </b> Chupa chups tiramisu apple pie biscuit sweet roll
                              bonbon macaroon toffee icing.
                              <nuxt-link
                              to="details"
                              class="btn btn-sm btn-primary float-right"
                              >View</nuxt-link
                            >
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <Footer></Footer>
    </body>
  </div>
</template>
<script>
import Header from '~/components/pharmacy/header'
import Footer from '~/components/pharmacy/footer'
import SideBar from '~/components/pharmacy/sideBar'

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
