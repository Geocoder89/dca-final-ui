<template>
  <div>
    <body
      class="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="2-columns"
    >
      <Header></Header>
      <side-bar></side-bar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-5 col-lg-5 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Waiting Room
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <!-- Description -->
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-5 col-12">
                <section
                  id="description"
                  class="card d-flex pb-1 justify-content-center align-items-center text-center"
                  style=""
                >
                  <div class="card-header">
                    <!-- <h4 class="card-title">Description</h4> -->
                  </div>
                  <div class="card-content">
                    <div class="card-body">
                      <div class="card-text">
                        <!-- <h3>Welcome back,</h3> -->

                        <p id="title" v-html="title"></p>
                        <input
                            id="basicInput"
                            type="text"
                            class="form-control mb-1"
                            style="border-radius:40px;"
                            placeholder="briefly tell us what went wrong..."
                          />
                        <button
                          id="talkingbtn"
                          class="btn btn-outline-primary btn-inline"
                          style="border-radius:40px;"
                          @click="loader"
                        >
                          Talk to a Doctor</button
                        ><br />
                        <img
                          v-if="showLoader"
                          id="loader"
                          src="~assets/img/portrait/small/30.gif"
                        />
                      </div>
                    </div>
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
      title: 'Your doctor is just a click away.',
      showLoader: false
    }
  },
  methods: {
    loader() {
      this.title = 'Your doctor will be with you shortly...'
      this.showLoader = true
      setTimeout(() => {
        this.$router.push('chats')
      }, 5000)
    }
  }
}
</script>
