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
                          <h4 class="mb-0">DOCTOR REGISTRATION</h4>
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
                                    <label for="basicInput">Middle Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.middle_name"
                                      :class="{'is-invalid': errors.middle_name}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.middle_name">
                                        {{errors.middle_name[0]}}
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
                                    <label for="basicInput"
                                      >Password:</label
                                    >
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
                                <div class="col-xl-4 col-md-4 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Phone:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.phone"
                                      :class="{'is-invalid': errors.mobile_phone_number}"
                                      style="border-radius:40px;"
                                    />
                                     <div class="invalid-feedback" v-if="errors.mobile_phone_number">
                                        {{errors.mobile_phone_number[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-4 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput"
                                      >Specialties if any:</label
                                    >
                                    <select
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      v-model="form.specialty_code"
                                      :class="{'is-invalid': errors.specialty_code}"
                                      style="border-radius:40px;"
                                    >
                                    <option v-for="specialty in specialties" :key="specialty.id" :value="specialty.code">{{specialty.name}}</option>
                                    </select>
                                    <div class="invalid-feedback" v-if="errors.specialty_code">
                                        {{errors.specialty_code[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-4 col-12 mb-0">
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
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Medical Council Reg No:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.mcrn"
                                      :class="{'is-invalid': errors.mcrn}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.mcrn">
                                        {{errors.mcrn[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput"
                                      >Medical School Attended:</label
                                    >
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.school_attended"
                                      :class="{'is-invalid': errors.school_attended}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.school_attended">
                                        {{errors.school_attended[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput"
                                      >Year of Graduation:</label
                                    >
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.year_of_graduation"
                                      :class="{'is-invalid': errors.year_of_graduation}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.year_of_graduation">
                                        {{errors.year_of_graduation[0]}}
                                    </div>
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
                                      v-model="form.account_name"
                                      :class="{'is-invalid': errors.account_name}"
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
                                      v-model="form.account_number"
                                      :class="{'is-invalid': errors.account_number}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.account_number">
                                        {{errors.account_number[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Account Type:</label>
                                    <select
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      v-model="form.account_type"
                                      :class="{'is-invalid': errors.account_type}"
                                      style="border-radius:40px;"
                                    >
                                    <option value="Savings">Savings</option>
                                    <option value="Current">Current</option>
                                    
                                    </select>
                                    <div class="invalid-feedback" v-if="errors.account_type">
                                        {{errors.account_type[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Choose Your Bank:</label>
                                    <select
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      v-model="form.bank_code"
                                      style="border-radius:40px;"
                                    >
                                    <option v-for="bank in banks" :key="bank.id" :value="bank.code">{{bank.name}}</option>
                                    </select>
                                    <div class="invalid-feedback" v-if="errors.bank_code">
                                        {{errors.bank_code[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                            </div>        
                              <div class="col-12 pl-0">
                                <p>
                                  Already have an account?
                                  <nuxt-link to="/auth/login">login</nuxt-link>
                                </p>
                                <button style="border-radius:40px;" :disabled="this.disable" class="btn btn-primary" @click.prevent="submit">
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
  name: 'Signup',
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
          user_role_code : "ROLE004",
          mcrn: "",
          year_of_graduation: "",
          specialty_code: "",
          account_name: "",
          account_number: "",
          account_type: "",
          bank_code: "",
          school_attended: ""
       },
      banks:'',
      specialties:'',
      disable: false
    }
  },
  methods:{
     getBankList(){
        this.$axios.get('banks')
        .then(response => {
            this.banks = response.data.data
        })
        .catch(error => {
            console.log(error.response)
            this.disable = !this.disable
        })
    },
    getSpecialtyCodes(){
        this.$axios.get('specialties')
        .then(response => {
            this.specialties = response.data.data
        })
        .catch(error => {
            console.log(error.response)
            this.disable = !this.disable
        })
    },
    validateInput(){
        
        return  this.form.first_name &&
         this.form.last_name && this.form.email && 
         this.form.password && 
         this.form.password_confirmation && 
         this.form.gender && 
         this.form.mcrn && 
         this.form.bank_code && 
         this.form.account_name && 
         this.form.account_number && 
         this.form.account_type && 
         this.form.specialty_code || false
        
    },
    checkPassword(){
      return this.form.password.length > 5 || false
    },
    matchPassword(){
      return this.form.password === this.form.password_confirmation || false
    },
    async submit(){
      
      if(!this.validateInput()){
        alert("please fill in the required fields");
        return false;
      }
      
      if(!this.checkPassword()){
        alert("password must be atleast than six(6) characters long");
        return false;
      }

      if(!this.matchPassword()){
        alert("passwords do not match");
        return false;
      }

      this.disable = !this.disable
        await this.$axios.post('doctors/signup', this.form
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
  mounted(){
      this.getBankList()
      this.getSpecialtyCodes()
  },
  middleware:['guest']
}
</script>
