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
                  <h4 class="content-header-title float-left mb-0">
                    Case File
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
                                >Idowu Philips</a
                              >
                            </li>
                            <li class="nav-item">
                              
                              
                            </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="mt-2 ml-1">
                              <h6>Dr balogun Ahmed</h6>
                          </div>
                          <div class="tab-content pt-1">
                            <div
                              id="home-just"
                              class="tab-pane active"
                              role="tabpanel"
                              aria-labelledby="home-tab-justified"
                            >
                            <div class="col-lg-12 col-md-12 col-12 text-center">
                                <h6><strong>Treatment Information</strong></h6>
                            </div>
                        <div class="card-content">
                            <div class="card-body pt-0">
                                <div class="col-12 pl-0">
                                    <form action="">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-12 mb-0">
                                        <fieldset class="form-group">
                                            <label for="basicInput">What date was the patient first aware of the symptoms:</label>
                                            <input
                                            id="basicInput"
                                            type="text"
                                            class="form-control"
                                            />
                                        </fieldset>
                                        </div>
                                        <div class="col-xl-12 col-md-12 col-12 mb-0">
                                        <fieldset class="form-group">
                                            <label for="basicInput">Diagnosis:</label>
                                            <input
                                            id="basicInput"
                                            type="text"
                                            class="form-control"
                                            />
                                        </fieldset>
                                        </div>
                                        <div class="col-xl-12 col-md-12 col-12 mb-0">
                                        <fieldset class="form-group">
                                            <label for="basicInput">Brief description of treatments already given:</label>
                                            <textarea
                                            class="form-control">

                                            </textarea>
                                        </fieldset>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                        <div class="card-header mb-1">
                            <h6>In case of diagnostic admission:</h6>
                        </div>
                        <div class="card-content">
                            <div class="card-body pt-0">
                                <div class="col-12 pl-0">
                                    <form action="">
                                    <div class="row">
                                        <div class="col-xl-6 col-md-6 col-12 mb-0">
                                        <fieldset class="form-group">
                                            <label for="basicInput">Date of Admission:</label>
                                            <input
                                            id="basicInput"
                                            type="text"
                                            class="form-control pickadate"
                                            placeholder="dd/mm/yyyy"
                                            />
                                        </fieldset>
                                        </div>
                                        <div class="col-xl-6 col-md-6 col-12 mb-0">
                                        <fieldset class="form-group">
                                            <label for="basicInput">Date of Discharge:</label>
                                            <input
                                            id="basicInput"
                                            type="text"
                                            class="form-control pickadate"
                                            placeholder="dd/mm/yyyy"
                                            />
                                        </fieldset>
                                        </div>
                                        
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                            <div class="col-lg-12 col-md-12 col-12">
                              
                                <p>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                                    graphic or web designs.
                                </p>
                                    
                              </div>
                              <div class="col-12 text-center mt-2">
                                <nuxt-link to="#" class="btn btn-primary text-center">Admit</nuxt-link>
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
import Header from '~/components/diagnostic/header'
import Footer from '~/components/diagnostic/footer'
import Sidebar from '~/components/diagnostic/sidebar'

export default {
  name: 'Admission',
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
