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

            
            <section id="data-list-view" class="data-list-view-header">
              <div class="row ">
                <div class="col-md-12 col-lg-12">
                  <div class="card">
                    <p class=" mb-2 ml-2 mt-2"> You have an emergency to pick up </p>
                  </div>
                </div>
                <div class="col-md-12 col-lg-12">
                  <!-- DataTable starts -->
                  <div class="card">
                    <table class="table data-list-view">
                      <tbody>
                        <tr>
                            <td class="product-name" style="font-weight:bolder">Patient</td>
                            <td class="product-name" style="text-align:left">Nnamdi Obinna</td>
                        </tr>
                        <tr>
                            <td class="product-name" style="font-weight:bolder">Location</td>
                            <td class="product-name" style="text-align:left">54, Iweka Road, Onitsha, Anambra State, Nigeria</td>
                        </tr>
                        <tr>
                            <td class="product-name" style="font-weight:bolder">Phone</td>
                            <td class="product-name" style="text-align:left">+2349087098908</td>
                        </tr>
                        <tr>
                            <td class="product-name " colspan="3" style="align:center">
                              <nuxt-link
                              to="#"
                              class="btn btn-sm btn-primary "
                              >Dispatch Ambulance</nuxt-link>
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

      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <Footer></Footer>
    </body>
  </div>
</template>
<script>
import Header from '~/components/ambulance/header'
import Footer from '~/components/ambulance/footer'
import SideBar from '~/components/ambulance/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
  }
}
</script>


