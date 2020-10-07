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
                  <h4 class="content-header-title float-left mb-0">
                    Notifications
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <!-- Data list view starts -->
            <section id="data-list-view" class="data-list-view-header">
              <!-- DataTable starts -->
              <div class="table-responsive">
                <table class="table data-list-view" style="width: 100%;">
                  <tbody>
                    <tr>
                      <td>
                        <!-- <div style="font-size: xx-large;"> -->
                        <i class="ficon feather icon-bell"></i>
                        <!-- </div>  -->
                      </td>
                      <td class="product-name">Apple Watch series 4 GPS</td>
                      <td>
                        <div class="chip chip-default">
                          <div class="chip-body">
                            <div class="chip-text">read</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="ficon feather icon-bell"></i></td>
                      <td class="product-name">Beats HeadPhones</td>
                      <td>
                        <div class="chip chip-primary">
                          <div class="chip-body">
                            <div class="chip-text">unread</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="ficon feather icon-bell"></i></td>
                      <td class="product-name">
                        Altec Lansing - Bluetooth Speaker
                      </td>
                      <td>
                        <div class="chip chip-primary">
                          <div class="chip-body">
                            <div class="chip-text">unread</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="ficon feather icon-bell"></i></td>
                      <td class="product-name">
                        Aluratek - Bluetooth Audio Receiver
                      </td>
                      <td>
                        <div class="chip chip-default">
                          <div class="chip-body">
                            <div class="chip-text">read</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="ficon feather icon-bell"></i></td>
                      <td class="product-name">
                        Aluratek - Bluetooth Audio Transmitter
                      </td>
                      <td>
                        <div class="chip chip-primary">
                          <div class="chip-body">
                            <div class="chip-text">unread</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="ficon feather icon-bell"></i></td>
                      <td class="product-name">
                        Basis - Peak Fitness and Sleep Tracker
                      </td>
                      <td>
                        <div class="chip chip-default">
                          <div class="chip-body">
                            <div class="chip-text">read</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="ficon feather icon-bell"></i></td>
                      <td class="product-name">
                        Antec - Nano Diamond Thermal Compound
                      </td>
                      <td>
                        <div class="chip chip-default">
                          <div class="chip-body">
                            <div class="chip-text">read</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="ficon feather icon-bell"></i></td>
                      <td class="product-name">
                        Antec - SmartBean Bluetooth Adapter
                      </td>
                      <td>
                        <div class="chip chip-primary">
                          <div class="chip-body">
                            <div class="chip-text">unread</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="ficon feather icon-bell"></i></td>
                      <td class="product-name">
                        Beats by Dr. Dre - 3' USB-to-Micro USB Cable
                      </td>
                      <td>
                        <div class="chip chip-primary">
                          <div class="chip-body">
                            <div class="chip-text">unread</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- DataTable ends -->

              <!-- add new sidebar starts -->
              <div class="add-new-data-sidebar">
                <div class="overlay-bg"></div>
                <div class="add-new-data">
                  <div
                    class="div mt-2 px-2 d-flex new-data-title justify-content-between"
                  >
                    <div>
                      <h4 class="text-uppercase">List View Data</h4>
                    </div>
                    <div class="hide-data-sidebar">
                      <i class="feather icon-x"></i>
                    </div>
                  </div>
                  <div class="data-items pb-3">
                    <div class="data-fields px-2 mt-3">
                      <div class="row">
                        <div class="col-sm-12 data-field-col">
                          <label for="data-name">Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="data-name"
                          />
                        </div>
                        <div class="col-sm-12 data-field-col">
                          <label for="data-category"> Category </label>
                          <select class="form-control" id="data-category">
                            <option>Audio</option>
                            <option>Computers</option>
                            <option>Fitness</option>
                            <option>Appliance</option>
                          </select>
                        </div>
                        <div class="col-sm-12 data-field-col">
                          <label for="data-status">Order Status</label>
                          <select class="form-control" id="data-status">
                            <option>Pending</option>
                            <option>Canceled</option>
                            <option>unread</option>
                            <option>On Hold</option>
                          </select>
                        </div>
                        <div class="col-sm-12 data-field-col">
                          <label for="data-price">Price</label>
                          <input
                            type="text"
                            class="form-control"
                            id="data-price"
                          />
                        </div>
                        <div class="col-sm-12 data-field-col data-list-upload">
                          <form
                            action="#"
                            class="dropzone dropzone-area"
                            id="dataListUpload"
                          >
                            <div class="dz-message">Upload Image</div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="add-data-footer d-flex justify-content-around px-3 mt-2"
                  >
                    <div class="add-data-btn">
                      <button class="btn btn-primary">Add Data</button>
                    </div>
                    <div class="cancel-data-btn">
                      <button class="btn btn-outline-danger">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- add new sidebar ends -->
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
  middleware:['auth','patient']
}
</script>
<style scoped>
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    
    .content{
        margin-left:0;
    }
      
  }
</style>
