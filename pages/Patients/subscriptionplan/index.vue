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
            <div class="content-header-left col-md-6 col-lg-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Manage Subscription
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-6 col-12">
                <section class="card">
                  <div class="row">
                    <!-- account start -->
                    <div class="col-12 col-md-12 col-lg-12 pb-0">
                      <div class="card">
                        <div class="card-header">
                          <div class="card-title">Status</div>
                        </div>
                        <div class="card-body pb-0">
                          <div class="row pb-0">
                            <div
                              class="col-12 col-sm-12 col-md-12 col-lg-12 pb-0"
                            >
                              <div class="badge badge-pill badge-secondary">
                                Expired
                              </div>
                              <div class="badge badge-pill badge-success">
                                Active
                              </div>
                              <div class="badge badge-pill badge-secondary">
                                Not-Active
                              </div>
                              <p class="mt-2">
                                <strong>Expiry Date:</strong
                                ><span> 23/04/2021</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-6 col-12">
                <section class="card">
                  <div class="row">
                    <!-- account start -->
                    <div class="col-12 col-md-12 col-lg-12 pb-0">
                      <div class="card">
                        <div class="card-header">
                          <div class="card-title">Upgrade my plan</div>
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
                                href="#home-just"
                                role="tab"
                                aria-controls="home-just"
                                aria-selected="true"
                                style="font-size: 16px;"
                                >Basic</a
                              >
                            </li>
                            <li class="nav-item">
                              <a
                                id="profile-tab-justified"
                                class="nav-link"
                                data-toggle="tab"
                                href="#profile-just"
                                role="tab"
                                aria-controls="profile-just"
                                aria-selected="true"
                                style="font-size: 16px;"
                                >Standard</a
                              >
                            </li>
                            <li class="nav-item">
                              <a
                                id="messages-tab-justified"
                                class="nav-link"
                                data-toggle="tab"
                                href="#messages-just"
                                role="tab"
                                aria-controls="messages-just"
                                aria-selected="false"
                                style="font-size: 16px;"
                                >Premium</a
                              >
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
                              <div class="col-lg-12 col-md-6 col-12">
                                <section class="mb-50">
                                  <div class="card-header">
                                    <!-- <h4 class="card-title">Description</h4> -->
                                  </div>
                                  <div class="card-content">
                                    <div
                                      class="row justify-content-center mb-1"
                                    >
                                      <div
                                        class="col-md-3 col-sm-3 text-center"
                                      >
                                        <span class="text-center">
                                          <strong>₦500 </strong>
                                          <small>Monthly</small>
                                        </span>
                                      </div>
                                      <div
                                        class="col-md-3 col-sm-3 text-center"
                                      >
                                        <span class="text-center">
                                          <strong>₦1500 </strong>
                                          <small class="text-center"
                                            >Quaterly</small
                                          >
                                        </span>
                                      </div>
                                      <div
                                        class="col-md-3 col-sm-3 text-center"
                                      >
                                        <span class="text-center">
                                          <strong>₦5,500 </strong>
                                          <small class="text-center"
                                            >Annually</small
                                          >
                                        </span>
                                      </div>
                                    </div>

                                    <ul class="list-group list-group-flush">
                                      <li
                                        class="list-group-item d-flex justify-content-between align-items-center"
                                      >
                                        Medical Questions and Answer online.
                                        <ion-icon
                                          name="checkmark-done-outline"
                                          size="small"
                                        ></ion-icon>
                                      </li>
                                      <li
                                        class="list-group-item d-flex justify-content-between align-items-center"
                                      >
                                        Call Doctor/Get prescription.
                                        <ion-icon
                                          name="checkmark-done-outline"
                                          size="small"
                                        ></ion-icon>
                                      </li>
                                      <li
                                        class="list-group-item d-flex justify-content-between align-items-center"
                                      >
                                        Drugs upto prescribed limit per quarter,
                                        say N3,000.
                                        <ion-icon
                                          name="checkmark-done-outline"
                                          size="small"
                                        ></ion-icon>
                                      </li>
                                    </ul>
                                    <div class="d-flex justify-content-center">
                                      <button
                                        role="button"
                                        class="btn btn-primary mt-5 justify-content-center"
                                      >
                                        Subscribe
                                      </button>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                            <div
                              id="profile-just"
                              class="tab-pane"
                              role="tabpanel"
                              aria-labelledby="profile-tab-justified"
                            >
                              <section class="mb-50">
                                <div class="card-header">
                                  <!-- <h4 class="card-title">Description</h4> -->
                                </div>
                                <div class="card-content">
                                  <div class="row justify-content-center mb-1">
                                    <div class="col-md-3 col-sm-3 text-center">
                                      <span class="text-center">
                                        <strong>₦1500 </strong>
                                        <small>Monthly</small>
                                      </span>
                                    </div>
                                    <div class="col-md-3 col-sm-3 text-center">
                                      <span class="text-center">
                                        <strong>₦12,500 </strong>
                                        <small class="text-center"
                                          >Quaterly</small
                                        >
                                      </span>
                                    </div>
                                    <div class="col-md-3 col-sm-3 text-center">
                                      <span class="text-center">
                                        <strong>₦45,500 </strong>
                                        <small class="text-center"
                                          >Annually</small
                                        >
                                      </span>
                                    </div>
                                  </div>

                                  <ul class="list-group list-group-flush">
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Medical Questions and Answer online.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Call Doctor/Get prescription.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Drugs upto prescribed limit per quarter,
                                      say N3,000.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Talk to a Specialist.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Discounts for partner services (diagnostic
                                      centers, opticians, dentist)<br />
                                      OR one Basic optician check per annum.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Hospitals Referals/appointments/talk to a
                                      specialist.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Keep track of your numbers.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Doctor calls, once annually.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                  </ul>
                                  <div class="d-flex justify-content-center">
                                    <button
                                      role="button"
                                      class="btn btn-primary mt-5 justify-content-center"
                                    >
                                      Subscribe
                                    </button>
                                  </div>
                                </div>
                              </section>
                            </div>
                            <div
                              id="messages-just"
                              class="tab-pane"
                              role="tabpanel"
                              aria-labelledby="messages-tab-justified"
                            >
                              <section class="mb-50">
                                <div class="card-header">
                                  <!-- <h4 class="card-title">Description</h4> -->
                                </div>
                                <div class="card-content">
                                  <div class="row justify-content-center mb-1">
                                    <div class="col-md-3 col-sm-3 text-center">
                                      <span class="text-center">
                                        <strong>₦5,500 </strong>
                                        <small>Monthly</small>
                                      </span>
                                    </div>
                                    <div class="col-md-3 col-sm-3 text-center">
                                      <span class="text-center">
                                        <strong>₦45,000 </strong>
                                        <small class="text-center"
                                          >Quaterly</small
                                        >
                                      </span>
                                    </div>
                                    <div class="col-md-3 col-sm-3 text-center">
                                      <span class="text-center">
                                        <strong>₦100,500 </strong>
                                        <small class="text-center"
                                          >Annually</small
                                        >
                                      </span>
                                    </div>
                                  </div>

                                  <ul class="list-group list-group-flush">
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Medical Questions and Answer online.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Call Doctor/Get prescription.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Drugs upto prescribed limit per quarter,
                                      say N3,000.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Keep track of your numbers.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                    <li
                                      class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      Doctor calls, once annually.
                                      <ion-icon
                                        name="checkmark-done-outline"
                                        size="small"
                                      ></ion-icon>
                                    </li>
                                  </ul>
                                  <div class="d-flex justify-content-center">
                                    <button
                                      role="button"
                                      class="btn btn-primary mt-5 justify-content-center"
                                    >
                                      Subscribe
                                    </button>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-6 col-12">
                <section class="card">
                  <div class="row">
                    <!-- account start -->
                    <div class="col-12 col-md-12 col-lg-12 pb-0">
                      <div class="card">
                        <div class="card-header">
                          <div class="card-title">Payment History</div>
                        </div>
                        <div class="card-body pb-0">
                          <div class="row pb-0">
                            <div
                              class="col-12 col-sm-12 col-md-12 col-lg-12 pb-0"
                            >
                              <p class="mt-1">
                                <strong>Standard:</strong
                                ><span class="float-right">19/04/2020</span>
                              </p>
                              <p class="mt-1">
                                <strong>Basic:</strong
                                ><span class="float-right">11/04/2020</span>
                              </p>
                              <p class="mt-1">
                                <strong>Premium:</strong
                                ><span class="float-right">03/04/2020</span>
                              </p>
                              <p class="mt-1">
                                <strong>Premium:</strong
                                ><span class="float-right">20/04/2020</span>
                              </p>
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
import Header from '~/components/customer/header'
import Footer from '~/components/customer/footer'
import SideBar from '~/components/customer/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
  }
}
</script>

