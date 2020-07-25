<template>
  <div>
    <div class="app-content content justify-content-center" style="margin-left:0;">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <section class="row flexbox-container justify-content-center">
            <div class="col-xl-10 col-12 d-flex justify-content-center">
              <div class="card bg-authentication rounded-0 mb-0">
                <div class="row m-0">
                  <div
                    class="col-lg-5 d-lg-block d-none text-center align-self-center pl-0 pr-0 py-0"
                  >
                    <img
                      src="~assets/img/pages/register.jpg"
                      alt="branding logo"
                    />
                  </div>
                  <div class="col-lg-7 col-12 p-0">
                    <div class="card rounded-0 mb-0 p-2">
                      <div class="card-header pt-50 pb-1">
                        <div class="card-title">
                          <h4 class="mb-0">AMBULANCE REGISTRATION</h4>
                        </div>
                      </div>
                      <p class="px-2">
                        Fill the below form to create a new account.
                      </p>
                      <div class="card-content">
                        <div class="card-body pt-0">
                          <div class="col-12 pl-0">
                            <form action="">
                              <!-- <div class="row"> -->
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <input 
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Name of Ambulance Company"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <input 
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Address"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <input 
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Operation License Number"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <input 
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Email Address"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <input 
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Password"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <input 
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Phone Number"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <input 
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Account Name"
                                    />
                                  </fieldset>
                                </div>
                              <!-- </div> -->
                              <div class="row">
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Account Number"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <select
                                      id="customSelect"
                                      class="custom-select"
                                      style="width:100%;"
                                    >
                                      <option>Account Type</option>
                                      <option value="">Savings</option>
                                      <option value="">Current</option>
                                      <option value="">Savings</option>
                                    </select>
                                    
                                  </fieldset>
                                </div>

                              </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <select
                                      id="customSelect"
                                      class="custom-select"
                                      style="width:100%;"
                                    >
                                      <option>Choose your bank</option>
                                      <option value="">Access Bank</option>
                                      <option value="">GT Bank</option>
                                      <option value="">FirstBank</option>
                                    </select>

                                  </fieldset>
                                </div>
                              <!-- </div> -->
                              <div class="col-12 pl-0">
                                <p>
                                  Already have an account?
                                  <nuxt-link to="/ambulance/login">login</nuxt-link>
                                </p>
                                <nuxt-link to="/ambulance/verify" class="btn btn-primary">
                                  Register</nuxt-link
                                > 
                              </div>
                            </form>
                          </div>
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
</template>
<script>
export default {
  name: 'Register'
}
</script>
