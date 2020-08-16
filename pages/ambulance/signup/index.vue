<template>
  <div>
    <div class="app-content content justify-content-center" style="margin-left:0;">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <section class="row flexbox-container justify-content-center">
            <div class="col-xl-6 col-12 d-flex justify-content-center">
              <div class="card bg-authentication rounded-0 mb-0">
                <div class="row m-0">
                  <div class="col-lg-12 col-12 p-0">
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
                              <div class="row">
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Registered Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Address:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Operation License Number:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Email:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Phone:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput"
                                      >Password:</label
                                    >
                                    <input
                                      id="basicInput"
                                      type="password"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput"
                                      >Password Confirmation:</label
                                    >
                                    <input
                                      id="basicInput"
                                      type="password"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Ambulance Centre Description:</label>
                                    <textarea
                                      id="basicInput"
                                      style="resize:none;"
                                      class="form-control">
                                    </textarea>
                                  </fieldset>
                                </div>
                              </div>
                              <p class="px-0">
                                    Bank Details.
                            </p>
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Account Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Account No:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Account Type:</label>
                                    <select
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      style="border-radius:40px;"
                                    >
                                    <option value="">Field one</option>
                                    <option value="">Field one</option>
                                    <option value="">Field one</option>
                                    </select>
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Choose Your Bank:</label>
                                    <select
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      style="border-radius:40px;"
                                    >
                                    <option value="">Field one</option>
                                    <option value="">Field one</option>
                                    <option value="">Field one</option>
                                    </select>
                                  </fieldset>
                                </div>
                            </div>        
                              <div class="col-12 pl-0">
                                <p>
                                  Already have an account?
                                  <nuxt-link to="/ambulance/login">login</nuxt-link>
                                </p>
                                <nuxt-link to="/ambulance/verify" style="border-radius:40px;" class="btn btn-primary">
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
  name: 'Signup'
}
</script>
