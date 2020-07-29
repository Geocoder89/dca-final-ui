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
                  <!-- <h4 class="content-header-title float-left mb-0">Patients List</h4> -->
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section class="page-users-view">
              <div class="row justify-content-center">
                <!-- account start -->
                <div class="col-12 col-md-5 col-lg-5">
                  <div class="card justify-content-center">
                    <div class="card-header">
                      <div class="card-title">Reviews</div>
                      <hr />
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <ul class="list-group list-group-flush">
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                            <nuxt-link
                                class="d-flex justify-content-between"
                                to="#"
                                data-toggle="dropdown"
                                style="width:35%;"
                                >
                                <span
                                    ><img
                                    class="round"
                                    src="~assets/img/portrait/small/avatar-s-5.jpg"
                                    alt="avatar"
                                    height="40"
                                    width="40"
                                /></span>
                                <div class="d-flex justify-content-end align-items-center">
                                 <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                </div>
                                </nuxt-link>
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                            <nuxt-link
                                class="d-flex justify-content-between"
                                to="#"
                                data-toggle="dropdown"
                                style="width:35%;"
                                >
                                <span
                                    ><img
                                    class="round"
                                    src="~assets/img/portrait/small/avatar-s-9.jpg"
                                    alt="avatar"
                                    height="40"
                                    width="40"
                                /></span>
                                <div class="d-flex justify-content-end align-items-center">
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                </div>
                                </nuxt-link>
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                            <nuxt-link
                                class="d-flex justify-content-between"
                                to="#"
                                data-toggle="dropdown"
                                style="width:35%;"
                                >
                                <span
                                    ><img
                                    class="round"
                                    src="~assets/img/portrait/small/avatar-s-5.jpg"
                                    alt="avatar"
                                    height="40"
                                    width="40"
                                /></span>
                                <div class="d-flex justify-content-end align-items-center">
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                </div>
                                </nuxt-link>
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center"
                            >
                            <nuxt-link
                                class="d-flex justify-content-between"
                                to="#"
                                data-toggle="dropdown"
                                style="width:35%;"
                                >
                                <span
                                    ><img
                                    class="round"
                                    src="~assets/img/portrait/small/avatar-s-6.jpg"
                                    alt="avatar"
                                    height="40"
                                    width="40"
                                /></span>
                                <div class="d-flex justify-content-end align-items-center">
                                 <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                  <ion-icon name="star-sharp"></ion-icon>
                                </div>
                                </nuxt-link>
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
import Header from '~/components/nurse/header'
import Footer from '~/components/nurse/footer'
import Sidebar from '~/components/nurse/sidebar'

export default {
  name: 'Message',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
