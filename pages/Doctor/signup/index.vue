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
                                      v-model="form.mobile_phone_number"
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
                                <div class="col-xl-4 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput"
                                      >Year of Graduation:</label
                                    >
                                    <input
                                      id="basicInput"
                                      type="file"
                                      class="form-control"
                                      placeholder=""
                                      @change="onImageChange"
                                      :class="{'is-invalid': errors.medical_certificate}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors.medical_certificate">
                                        {{errors.medical_certificate[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                                
                              </div>
                              
                                   
                              <div class="col-12 pl-0">
                                <p>
                                  Already have an account?
                                  <nuxt-link to="/auth/login">login</nuxt-link>
                                </p>
                                <button style="border-radius:40px;" :disabled="disable" class="btn btn-primary" @click.prevent="submit">
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
          medical_certificate:"",
          password : "",
          password_confirmation : "",
          gender : "M",
          mobile_phone_number : "",
          user_role_code : "ROLE004",
          mcrn: "",
          year_of_graduation: "",
          specialty_code: "",
          account_name: "",
          account_number: "",
          bank_code: "",
          school_attended: ""
       },
      specialties:'',
      disable: false
    }
  },
  methods:{
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
    onImageChange(e){
      console.log(e.target.files[0]);
      this.form.medical_certificate = e.target.files[0];
    },
    validateInput(){
        return  this.form.first_name &&
         this.form.last_name && this.form.email && 
         this.form.password && 
         this.form.password_confirmation && 
         this.form.gender && 
         this.form.mcrn && 
         this.form.specialty_code || false
    },
    validateImage(){
      return this.form.medical_certificate.type == "image/png" || this.form.medical_certificate.type == "image/jpg" || this.form.medical_certificate.type == "image/jpeg" ? true : false
    },
    validateImageSize(){
      return this.form.medical_certificate.size <= 20000 || false
    },
    checkPassword(){
      return this.form.password.length > 5 || false
    },
    matchPassword(){
      return this.form.password === this.form.password_confirmation || false
    },
    async submit(){
      
      if(!this.validateInput()){
        this.$noty.error("please fill in the required fields");
        return false;
      }
      
      if(!this.checkPassword()){
        this.$noty.error("password must be atleast than six(6) characters long");
        return false;
      }

      if(!this.matchPassword()){
        this.$noty.error("passwords do not match");
        return false;
      }
      if(!this.form.medical_certificate){
        this.$noty.error("Please upload your medical certificate.");
        return false;
      }
      if(!this.validateImage()){
        this.$noty.error("Please upload the right document.");
        return false;
      }

      // if(!this.validateImageSize()){
      //   this.$noty.error("Please file size should not exceed 2MB.");
      //   return false;
      // }
      
      let formData = new FormData();
      formData.append('first_name', this.form.first_name);
      formData.append('last_name', this.form.last_name);
      formData.append('middle_name', this.form.middle_name);
      formData.append('email', this.form.email);
      formData.append('medical_certificate', this.form.medical_certificate);
      formData.append('password', this.form.password);
      formData.append('password_confirmation', this.form.password_confirmation);
      formData.append('gender', this.form.gender);
      formData.append('mobile_phone_number', this.form.mobile_phone_number);
      formData.append('user_role_code', this.form.user_role_code);
      formData.append('mcrn', this.form.mcrn);
      formData.append('year_of_graduation', this.form.year_of_graduation);
      formData.append('specialty_code', this.form.specialty_code);
      formData.append('school_attended', this.form.school_attended);
      
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      }
      this.disable = !this.disable
        await this.$axios.post('doctors/signup', formData, config
        ).then(response => {
            this.$router.push({
              path:'/auth/verify'
            }) 
        })
        .catch(error => {
            // console.log(error.response)
            this.disable = !this.disable
        })
        
      console.log(this.form)
    }
  },
  mounted(){
      this.getSpecialtyCodes()
  },
  middleware:['guest']
}
</script>
