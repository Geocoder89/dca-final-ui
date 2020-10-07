<template>
  <div>
    <div class="app-content content justify-content-center" style="margin-left:0;">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <section>
              <center>
                      <img src="~assets/img/logo/drapp.png" class="mb-2 mt-1" width="250px" height="80px">
              </center>
          </section>
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
                            
                              <div class="row">
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">First Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.first_name"
                                      :class="{'is-invalid': errors.first_name}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.first_name">
                                        {{errors.first_name[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Last Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.last_name"
                                      :class="{'is-invalid': errors.last_name}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.last_name">
                                        {{errors.last_name[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Email:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.email"
                                      :class="{'is-invalid': errors.email}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.email">
                                        {{errors.email[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Phone:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.mobile_phone_number"
                                      :class="{'is-invalid': errors.mobile_phone_number}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.mobile_phone_number">
                                        {{errors.mobile_phone_number[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Password:</label>
                                    <input
                                      id="basicInput"
                                      type="password"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.password"
                                      :class="{'is-invalid': errors.password}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.password">
                                        {{errors.password[0]}}
                                    </div>
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
                                      placeholder=""
                                      v-model="form.password_confirmation"
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <!-- <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <div class="text-bold-100 font-small-2">
                                    Date-of-Birth:
                                  </div>
                                  <fieldset class="form-group">
                                    <select
                                      id="customSelect"
                                      class="custom-select"
                                      style="width:20%;border-radius:40px;"
                                    >
                                      <option selected>01</option>
                                      <option value="">02</option>
                                      <option value="">03</option>
                                      <option value="">04</option>
                                    </select>
                                    <select
                                      id="customSelect"
                                      class="custom-select"
                                      style="width:30%;border-radius:40px;"
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
                                      style="width:25%;border-radius:40px;"
                                    >
                                      <option selected>1990</option>
                                      <option value="">1991</option>
                                      <option value="">1992</option>
                                      <option value="">1993</option>
                                    </select>
                                  </fieldset>
                                </div> -->
                                <!-- <div class="col-xl-4 col-md-6 col-12 mb-0">
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
                                              v-model="form.gender"
                                              value="MALE"
                                              checked
                                            />
                                            Male
                                          </label>
                                        </fieldset>
                                      </li>
                                      <li class="d-inline-block mr-2">
                                        <fieldset>
                                          <label>
                                            <input 
                                            type="radio" 
                                            name="radio"
                                            v-model="form.gender"
                                            value="FEMALE"
                                            
                                            />
                                            Female
                                          </label>
                                        </fieldset>
                                      </li>
                                    </ul>
                                    <div class="invalid-feedback" v-if="errors.gender">
                                        {{errors.gender[0]}}
                                    </div>
                                  </fieldset>
                                </div> -->
                              </div>
                              <div class="col-12 pl-0">
                                <p>
                                  Already have an account?
                                  <nuxt-link to="/auth/login">login</nuxt-link>
                                </p>
                                <button class="btn btn-primary" :disabled="this.disable" style="border-radius:40px;" @click.prevent="submit">
                                  Register</button
                                >
                              </div>
                            
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
  name: 'Register',
  data(){
    return {
       form:{
            first_name : "",
            last_name : "",
            middle_name : "",
            email : "",
            password : "",
            password_confirmation : "",
            gender : "",
            mobile_phone_number : "",
            work_phone_number : "",
            user_role_code : "ROLE003"
       },
        disable: false
    }
  },
  methods:{
    async submit(){
      if(this.form.password.length < 6){
        alert("password must be atleast than six(6) characters long");
        return false;
      }
      if(this.form.password !== this.form.password_confirmation){
        alert("password do not match!");
        return false;
      }
      this.disable = !this.disable
        await this.$axios.post('signup', this.form
        ).then(response => {
            this.$router.push({
              path:'/auth/verify'
            }) 
        })
        .catch(error => {
            console.log(error.response)
            this.disable = !this.disable
        })
        
      console.log(this.form)
    }
  },
  middleware:['guest']
}
</script>
