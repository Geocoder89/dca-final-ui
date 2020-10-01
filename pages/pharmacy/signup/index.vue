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
                          <h4 class="mb-0">PARTNERS REGISTRATION</h4>
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
                                 
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Partner Type:</label>
                                    <select
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      v-model="form.partner_type"
                                      style="border-radius:40px;"
                                      :class="{'is-invalid': errors.partner_type}"
                                    >
                                    <option value="" >Select Partner</option>
                                    <option v-for="(p,i) in partner_types" :key="i" :value="p">{{p}}</option>
                                    </select>
                                    
                                      <div class="invalid-feedback" v-if="errors.partner_type">
                                        {{errors.partner_type[0]}}
                                    </div>
                                  </fieldset>
                                </div>

                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Company's License No:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.license_number"
                                      style="border-radius:40px;"
                                      :class="{'is-invalid': errors.license_number}"
                                    />
                                    <div class="invalid-feedback" v-if="errors.license_number">
                                        {{errors.license_number[0]}}
                                    </div>
                                    
                                  </fieldset>
                                </div>
                               

                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Company's Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.name"
                                      style="border-radius:40px;"
                                      :class="{'is-invalid': errors.name}"
                                    />
                                    <div class="invalid-feedback" v-if="errors.name">
                                        {{errors.name[0]}}
                                    </div>
                                     
                                  </fieldset>
                                </div>
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Company's Address:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="form.address"
                                      style="border-radius:40px;"
                                      :class="{'is-invalid': errors.address}"
                                    />
                                    <div class="invalid-feedback" v-if="errors.address">
                                        {{errors.address[0]}}
                                    </div>
                                      
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
                                      v-model="form.email"
                                      style="border-radius:40px;"
                                      :class="{'is-invalid': errors.email}"
                                    />
                                    <div class="invalid-feedback" v-if="errors.email">
                                        {{errors.email[0]}}
                                    </div>
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
                                      v-model="form.phone"
                                      style="border-radius:40px;"
                                      :class="{'is-invalid': errors.phone_number}"
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone_number">
                                        {{errors.phone_number[0]}}
                                    </div>
                                 </fieldset>
                                </div>
                                
                                <div class="col-xl-12 col-md-12 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Company's Description :</label>
                                    <textarea
                                      id="basicInput"
                                      v-model="form.description"
                                      style="resize:none;border-radius:40px;"
                                      :class="{'is-invalid': errors.description}"
                                      class="form-control">
                                    </textarea>
                                    <div class="invalid-feedback" v-if="errors.description">
                                        {{errors.description[0]}}
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                              <p class="px-0">
                                  <strong>Representatives #1</strong>
                            </p>
                            <div class="row">
                              <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">First Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="first_user.first_name"
                                      :class="{'is-invalid': errors['members.0.first_name']}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors['members.0.first_name']">
                                        <p>First Name field is required</p>
                                    </div>
                                    
                                     
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Last Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="first_user.last_name"
                                       :class="{'is-invalid': errors['members.0.last_name']}"
                                      style="border-radius:40px;"
                                    />
                                     <div class="invalid-feedback" v-if="errors['members.0.last_name']">
                                        <p>Last Name field is required</p>
                                    </div>
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
                                      v-model="first_user.email"
                                        :class="{'is-invalid': errors['members.0.email']}"
                                      style="border-radius:40px;"
                                    />
                                     <div class="invalid-feedback" v-if="errors['members.0.email']">
                                        <p>Email field is required</p>
                                    </div>
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
                                      v-model="first_user.password"
                                       :class="{'is-invalid': errors['members.0.password']}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors['members.0.password']">
                                        <p>Password field is required</p>
                                    </div>
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
                                      v-model="first_user.password_confirmation"
                                       :class="{'is-invalid': errors['members.0.password']}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors['members.0.password']">
                                        <p>Password field is required and must match</p>
                                    </div>
                                  </fieldset>
                                </div>
                                
                                
                            </div>    
                            <p class="px-0">
                                <strong>Representatives #2</strong>
                            </p>
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">First Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="second_user.first_name"
                                       :class="{'is-invalid': errors['members.1.first_name']}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors['members.1.first_name']">
                                        <p>First Name is required</p>
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="col-xl-6 col-md-6 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Last Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="second_user.last_name"
                                      :class="{'is-invalid': errors['members.1.last_name']}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors['members.1.last_name']">
                                        <p>Last Name is required</p>
                                    </div>
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
                                      v-model="second_user.email"
                                      :class="{'is-invalid': errors['members.1.email']}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors['members.1.email']">
                                        <p>Email is required</p>
                                    </div>
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
                                      v-model="second_user.password"
                                      :class="{'is-invalid': errors['members.1.password']}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors['members.1.password']">
                                        <p>Password is required</p>
                                    </div>
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
                                      v-model="second_user.password_confirmation"
                                      :class="{'is-invalid': errors['members.1.password']}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="errors['members.1.password']">
                                        <p>Password is required nad must match</p>
                                    </div>
                                  </fieldset>
                                </div>
                                
                            </div>        
                              <div class="col-12 pl-0">
                                <p>
                                  Already have an account?
                                  <nuxt-link to="/pharmacy/login">login</nuxt-link>
                                </p>
                                <button style="border-radius:40px;" :disabled="this.disable" class="btn btn-primary" @click.prevent="submit">
                                  Register</button
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
  name: 'Signup',
  data(){
    return {
       form:{
          name : "",
          address : "",
          license_number : "",
          email : "",
          phone:"",
          description : "",
          partner_type : "",
          members:[],
       },
       first_user:{
          first_name : "",
          last_name : "",
          email : "",
          password : "",
          password_confirmation : ""
       },
        second_user:{
          first_name : "",
          last_name : "",
          email : "",
          password : "",
          password_confirmation : ""
        },
       partner_types:["DIAGNOSTIC","AMBULANCE","HOSPITAL","PHARMACY"],
       disable: false
    }
  },
  methods:{
    getError(errors){
        // return errors.email || errors.message
    },
    validateInput(){
        
      // return  this.form.name &&
      // this.form.address && this.form.license_number && 
      // this.form.email && 
      // this.form.phone && 
      // this.form.description && 
      // this.form.partner_type &&
      // this.first_user.email &&
      // this.first_user.password &&
      // this.first_user.password_confirmation &&
      // this.second_user.email &&
      // this.second_user.password &&
      // this.second_user.password_confirmation || false
        
    },
    validateImage(){
      // return this.form.medical_certificate.type == "image/png" || this.form.medical_certificate.type == "image/jpg" || this.form.medical_certificate.type == "image/jpeg" ? true : false
    },
    validateImageSize(){
      // return this.form.medical_certificate.size <= 20000 || false
    },
    checkPassword(password){
      // return password > 5 || false
      if(password < 6){
        return false;
      }
      return true;
    },
    matchPassword(password, confirm_password){
      return password === confirm_password || false
    },
    async submit(){
      
      // if(!this.validateInput()){
      //   this.$noty.error("please fill in the required fields");
      //   return false;
      // }
      

      // if(!this.checkPassword(this.first_user.password)){
      //   this.$noty.error("representative password must be atleast than six(6) characters long");
      //   return false;
      // }

      // if(!this.checkPassword(this.second_user.password)){
      //   this.$noty.error("representative password must be atleast than six(6) characters long");
      //   return false;
      // }

      // if(!this.matchPassword(this.first_user.password, this.first_user.password_confirmation)){
      //   this.$noty.error("representative passwords do not match");
      //   return false;
      // }

      // if(!this.matchPassword(this.second_user.password, this.second_user.password_confirmation)){
      //   this.$noty.error("representative passwords do not match");
      //   return false;
      // }
      
      this.form.members.push(this.first_user)
      this.form.members.push(this.second_user)
      
      // let formData = new FormData();
      // formData.append('name', this.form.name);
      // formData.append('email', this.form.email);
      // formData.append('address', this.form.address);
      // formData.append('license_number', this.form.license_number);
      // formData.append('partner_type', this.form.partner_type);
      // formData.append('phone_number', this.form.phone);
      // formData.append('description', this.form.description);
      // formData.append('members', []);
      
      let datar = JSON.stringify({
          name : this.form.name,
          email : this.form.email,
          address : this.form.address,
          license_number : this.form.license_number,
          partner_type : this.form.partner_type,
          phone_number : this.form.phone,
          description : this.form.description,
          members : this.form.members
        });
       
      
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      }
    
      this.disable = !this.disable
        await this.$axios.post('partners/signup', datar , {config}
        ).then(response => {
            this.$router.push({
              path:'/auth/verify'
            }) 
        })
        .catch(error => {
            
            this.disable = !this.disable
            console.log(error.response)
            if(error.response.status === 422){
              this.$noty.error("Unprocessable entity.");
              return false;
            }
            if(error.response.status === 422){
              this.$noty.error("Something went wrong.");
              return false;
            }
        })
      
    }
  },
  mounted(){
      
  },
  middleware:['guest']
}
</script>
