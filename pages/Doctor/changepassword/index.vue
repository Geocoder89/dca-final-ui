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
                    Change Password
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-6 col-12">
                <div class="card">
                  <div class="card-header"></div>
                  <div class="card-content">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <div class="controls">
                              <label for="account-old-password"
                                >Old Password</label
                              >
                              <input
                                id="account-old-password"
                                type="password"
                                class="form-control"
                                required
                                placeholder="Old Password"
                                data-validation-required-message="This old password field is required"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <div class="controls">
                              <label for="account-new-password"
                                >New Password</label
                              >
                              <input
                                id="account-new-password"
                                type="password"
                                name="password"
                                class="form-control"
                                placeholder="New Password"
                                required
                                data-validation-required-message="The password field is required"
                                minlength="6"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <div class="controls">
                              <label for="account-retype-new-password"
                                >Retype New Password</label
                              >
                              <input
                                type="password"
                                name="con-password"
                                id="account-retype-new-password"
                                class="form-control"
                                required
                                data-validation-match-match="password"
                                placeholder="New Password"
                                data-validation-required-message="The Confirm password field is required"
                                minlength="6"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-12 d-flex flex-sm-row flex-column justify-content-end"
                        >
                          <button
                            type="submit"
                            class="btn btn-primary mr-sm-1 mb-1 mb-sm-0"
                          >
                            Update
                          </button>
                        </div>
                      </div>
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
import Header from '~/components/doctor/header'
import Footer from '~/components/doctor/footer'
import Sidebar from '~/components/doctor/sidebar'

export default {
  name: 'Changepassword',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
