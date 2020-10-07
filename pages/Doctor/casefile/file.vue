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
                                >Idowu Philips</a
                              >
                            </li>
                            <li class="nav-item">
                              
                            </li>
                          </ul>
                          <!-- Tab panes -->
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
                                  <div class="card-header  pl-0 mb-1">
                                    <h4 class="font-weight-light">X-Ray Scan Result</h4>
                                  </div>
                                  
                                    <div class="card-body" style="background:#F8F8F8;border-radius:20px;">
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 
                                            15th century who is thought to have.
                                        </p>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 
                                            15th century who is thought to have.
                                        </p>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 
                                            15th century who is thought to have.
                                        </p>
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 
                                            15th century who is thought to have.
                                        </p>
                                    </div>
                                  </div>
                                </section>
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
import Header from '~/components/doctor/header'
import Footer from '~/components/doctor/footer'
import Sidebar from '~/components/doctor/sidebar'

export default {
  name: 'File',
  components: {
    Header,
    Footer,
    Sidebar
  },
  middleware:['auth','doctor']
}
</script>
