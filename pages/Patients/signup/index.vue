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
                          <h4 class="mb-0">PATIENT REGISTRATION</h4>
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
                                    <label for="basicInput">First Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter first name"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Last Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter last name"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Email:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter email"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Phone:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter Phone"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Password:</label>
                                    <input
                                      id="basicInput"
                                      type="password"
                                      class="form-control"
                                      placeholder="Enter Password"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput"
                                      >Password Confirmation:</label
                                    >
                                    <input
                                      id="basicInput"
                                      type="password"
                                      class="form-control"
                                      placeholder="Enter Password Confirmation"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <div class="text-bold-100 font-small-2">
                                    Date-of-Birth:
                                  </div>
                                  <fieldset class="form-group">
                                    <select
                                      id="customSelect"
                                      class="custom-select"
                                      style="width:25%;"
                                    >
                                      <option selected>01</option>
                                      <option value="">02</option>
                                      <option value="">03</option>
                                      <option value="">04</option>
                                    </select>
                                    <select
                                      id="customSelect"
                                      class="custom-select"
                                      style="width:30%;"
                                    >
                                      <option selected>January</option>
                                      <option value="">February</option>
                                      <option value="">March</option>
                                      <option value="">April</option>
                                      <option value="">May</option>
                                    </select>
                                    <select
                                      id="customSelect"
                                      class="custom-select"
                                      style="width:40%;"
                                    >
                                      <option selected>1990</option>
                                      <option value="">1991</option>
                                      <option value="">1992</option>
                                      <option value="">1993</option>
                                    </select>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <div class="text-bold-100 font-small-2">
                                    Gender:
                                  </div>
                                  <fieldset class="form-group">
                                    <ul class="list-unstyled mb-0">
                                      <li class="d-inline-block mr-2">
                                        <fieldset>
                                          <label>
                                            <input
                                              type="radio"
                                              name="radio"
                                              checked
                                            />
                                            Male
                                          </label>
                                        </fieldset>
                                      </li>
                                      <li class="d-inline-block mr-2">
                                        <fieldset>
                                          <label>
                                            <input type="radio" name="radio" />
                                            Female
                                          </label>
                                        </fieldset>
                                      </li>
                                    </ul>
                                  </fieldset>
                                </div>
                              </div>
                              <div class="col-12 pl-0">
                                <p>
                                  Already have an account?
                                  <nuxt-link to="/Patients/login">login</nuxt-link>
                                </p>
                                <nuxt-link to="/Patients/verify" class="btn btn-primary">
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
