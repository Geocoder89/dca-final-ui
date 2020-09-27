<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: hidden;">

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
                  <h4 class="content-header-title float-left mb-0">
                    Pending Prescription
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-md-center">
              <div class="col-lg-6">
                <section class="card">
                  <div class="row ">
                    <!-- account start -->
                    <div class="col-12 col-md-12 col-lg-12 pb-0">
                      <div class="card">
                        <div class="card-header">
                          <!-- <div class="card-title">Case File</div> -->
                        </div>
                        <div class="card-body pb-0">
                          <div class="row pb-0">
                            <div
                              class="col-12 col-sm-12 col-md-12 col-lg-12 pb-0"
                            ></div>
                          </div>
                          <ul
                            id="myTab2"
                            class="nav nav-tabs nav-justified"
                            role="tablist"
                          >
                            <li class="nav-item">
                              <a
                                id="home-tab-justified"
                                class="nav-link active"
                                data-toggle="tab"
                                href="#"
                                role="tab"
                                aria-controls="home-just"
                                aria-selected="true"
                                style="font-size: 16px;"
                                >Prescription for Adewale Ayuba</a
                              >
                            </li>
                            <li class="nav-item">
                              
                              
                            </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="mt-2 ml-1">
                              <h6>Referred by Dr Ahmed Haruna</h6>
                          </div>
                          <div class="tab-content pt-1">
                            <div
                              id="home-just"
                              class="tab-pane active"
                              role="tabpanel"
                              aria-labelledby="home-tab-justified"
                            >
                              <div class="col-lg-12 col-md-12 col-12">
                                <section class="mb-50">
                                    <div class="card">
                                  <div class="card-header pl-0 mb-1">
                                    <h6 class="card-title">Diagnosis</h6>
                                  </div>
                                  
                                    <div class="card-body" style="background:#F8F8F8;border-radius:20px;">
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 
                                            15th century who is thought to have.
                                        </p>
                                    </div>
                                  </div>
                                </section>
                              </div>
                              
                              <div class="col-lg-12 col-md-12 col-12">
                                <section class="mb-50">
                                    <div class="card">
                                  <div class="card-header pl-0 mb-1">
                                    <h6 class="card-title">Prescription</h6>
                                  </div>
                                  
                                    <div class="card-body" style="background:#F8F8F8;border-radius:20px;">
                                        <table class="table data-list-view">
                                    <tbody>
                                      <tr>
                                        <td class="product-name">Lipium</td>
                                        <td class="product-name">Nexium</td>
                                      </tr>
                                      <tr>
                                        <td class="product-name">Epogen</td>
                                        <td class="product-name">Actos</td>
                                      </tr>
                                      <tr>
                                        <td class="product-name">Lipium</td>
                                        <td class="product-name">Nexium</td>
                                      </tr>
                                      <tr>
                                        <td class="product-name">Lipium</td>
                                        <td class="product-name">Nexium</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                    </div>
                                  </div>
                                </section>
                              </div>
                              <div class="col-12 d-flex justify-content-center">
                                  <h3><strong>COMPLETED</strong></h3>
                              </div>
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
import Sidebar from '~/components/pharmacy/sidebar'

export default {
  name: 'Singlefile',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
<style scoped>
.va-btn{
  font-size:16px;
}
@media only screen and (max-width: 768px) {
    .va-btn {
      width: 120px;
      height: auto;
      font-size: 11px;
      line-height: 15px;
    }
    
}
</style>
