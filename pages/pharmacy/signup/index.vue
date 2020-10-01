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
                                      :class="{'is-invalid': bugs.partner_type.error}"
                                    >
                                    <option value="" >Select Partner</option>
                                    <option v-for="(p,i) in partner_types" :key="i" :value="p">{{p}}</option>
                                    </select>
                                    
                                      <div class="invalid-feedback" v-if="bugs.partner_type.error">
                                        {{bugs.partner_type.msg}}
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
                                      :class="{'is-invalid': bugs.license_number.error}"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.license_number.error">
                                        {{bugs.license_number.msg}}
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
                                      :class="{'is-invalid': bugs.name.error}"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.name.error">
                                        {{bugs.name.msg}}
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
                                      :class="{'is-invalid': bugs.address.error}"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.address.error">
                                        {{bugs.address.msg}}
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
                                      :class="{'is-invalid': bugs.email.error}"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.email.error">
                                        {{bugs.email.msg}}
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
                                      :class="{'is-invalid': bugs.phone.error}"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.phone.error">
                                        {{bugs.phone.msg}}
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
                                      :class="{'is-invalid': bugs.description.error}"
                                      class="form-control">
                                    </textarea>
                                    <div class="invalid-feedback" v-if="bugs.description.error">
                                        {{bugs.description.msg}}
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
                                      :class="{'is-invalid': bugs.fufn.error}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.fufn.error">
                                        <p>{{bugs.fufn.msg}}</p>
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
                                       :class="{'is-invalid': bugs.fuln.error}"
                                      style="border-radius:40px;"
                                    />
                                     <div class="invalid-feedback" v-if="bugs.fuln.error">
                                        <p>{{bugs.fuln.msg}}</p>
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
                                        :class="{'is-invalid': bugs.fuemail.error}"
                                      style="border-radius:40px;"
                                    />
                                     <div class="invalid-feedback" v-if="bugs.fuemail.error">
                                        <p>{{bugs.fuemail.msg}}</p>
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
                                       :class="{'is-invalid': bugs.fupw.error}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.fupw.error">
                                        <p>{{bugs.fupw.msg}}</p>
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
                                       :class="{'is-invalid': bugs.fucpw.error}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.fucpw.error">
                                        <p>{{bugs.fucpw.msg}}</p>
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
                                       :class="{'is-invalid': bugs.sufn.error}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.sufn.error">
                                        <p>{{bugs.sufn.msg}}</p>
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
                                      :class="{'is-invalid': bugs.suln.error}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.suln.error">
                                        <p>{{bugs.suln.msg}}</p>
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
                                      :class="{'is-invalid': bugs.suemail.error}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.suemail.error">
                                        <p>{{bugs.suemail.msg}}</p>
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
                                      :class="{'is-invalid': bugs.supw.error}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.supw.error">
                                        <p>{{bugs.supw.msg}}</p>
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
                                      :class="{'is-invalid': bugs.sucpw.error}"
                                      style="border-radius:40px;"
                                    />
                                    <div class="invalid-feedback" v-if="bugs.sucpw.error">
                                        <p>{{bugs.sucpw.msg}}</p>
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
          partner_type : "PHARMACY",
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
        bugs:{
            name:{
              error:false,
              msg:""
            },
            address:{
              error:false,
              msg:""
            },
            license_number:{
              error:false,
              msg:""
            },
            phone:{
              error:false,
              msg:""
            },
            description:{
              error:false,
              msg:""
            },
            partner_type:{
              error:false,
              msg:""
            },
            email:{
              error:false,
              msg:""
            },
            fufn:{
              error:false,
              msg:""
            },
            fuln:{
              error:false,
              msg:""
            },
            fuemail:{
              error:false,
              msg:""
            },
            fupw:{
              error:false,
              msg:""
            },
            fucpw:{
              error:false,
              msg:""
            },
            sufn:{
              error:false,
              msg:""
            },
            suln:{
              error:false,
              msg:""
            },
            suemail:{
              error:false,
              msg:""
            },
            supw:{
              error:false,
              msg:""
            },
            sucpw:{
              error:false,
              msg:""
            }

           
        },
       partner_types:["DIAGNOSTIC","AMBULANCE","HOSPITAL","PHARMACY"],
       disable: false
    }
  },
  computed:{
    bugg:function(){
      return this.bugs
    }
  },
  methods:{
    getError(errors){
        return errors.email || errors.message
    },
    validateInput(){
        
      return  this.form.name &&
      this.form.address && this.form.license_number && 
      this.form.email && 
      this.form.phone && 
      this.form.description && 
      this.form.partner_type &&
      this.first_user.email &&
      this.first_user.password &&
      this.first_user.password_confirmation &&
      this.second_user.email &&
      this.second_user.password &&
      this.second_user.password_confirmation || false
        
    },
    validateImage(){
      return this.form.medical_certificate.type == "image/png" || this.form.medical_certificate.type == "image/jpg" || this.form.medical_certificate.type == "image/jpeg" ? true : false
    },
    validateImageSize(){
      return this.form.medical_certificate.size <= 20000 || false
    },
    checkPassword(password){
      // return password > 5 || false
      if(password < 6){
        return false;
      }
      return true;
    },

    validEmail(){

    },
    clearErrors(){
        this.bugs.name.error = false
        this.bugs.license_number.error = false
        this.bugs.phone.error = false
        this.bugs.description.error = false
        this.bugs.email.error = false
        this.bugs.address.error = false
        this.bugs.partner_type.error = false
        this.bugs.fufn.error = false
        this.bugs.fuln.error = false
        this.bugs.fuemail.error = false
        this.bugs.fupw.error = false
        this.bugs.fucpw.error = false
        this.bugs.sufn.error = false
        this.bugs.suln.error = false
        this.bugs.suemail.error = false
        this.bugs.supw.error = false
        this.bugs.sucpw.error = false
    },
    hasErrors(value){
        return !value ? true : false;
    },
    matchPassword(password, confirm_password){
      return password === confirm_password || false
    },
    async submit(){
      this.clearErrors()
      // if(!this.validateInput()){
      //   this.$noty.error("please fill in the required fields");
      //   return false;
      // }

      if(this.hasErrors(this.form.partner_type)){
          let msg = "please select a type of partner";
          this.bugs.partner_type.msg = msg;
          this.bugs.partner_type.error = true
          return false
      }

      if(this.hasErrors(this.form.license_number)){
          let msg = "please enter this partner license number";
          this.bugs.license_number.msg = msg;
          this.bugs.license_number.error = true
          return false
      }
      
      if(this.hasErrors(this.form.name)){
          let msg = "please enter a partner name";
          this.bugs.name.msg = msg;
          this.bugs.name.error = true
          return false
      }

      if(this.hasErrors(this.form.address)){
          let msg = "please enter a partner address";
          this.bugs.address.msg = msg;
          this.bugs.address.error = true
          return false
      }
      
      if(this.hasErrors(this.form.email)){
          let msg = "please enter a valid email";
          this.bugs.email.msg = msg;
          this.bugs.email.error = true
          return false
      }
      if(this.hasErrors(this.form.phone)){
          let msg = "please enter phone number";
          this.bugs.phone.msg = msg;
          this.bugs.phone.error = true
          return false
      }
      
      if(this.hasErrors(this.form.description)){
          let msg = "please description is required";
          this.bugs.description.msg = msg;
          this.bugs.description.error = true
          return false
      }

      if(this.hasErrors(this.first_user.first_name)){
          let msg = "this field is required";
          this.bugs.fufn.msg = msg;
          this.bugs.fufn.error = true
          return false
      }

      if(this.hasErrors(this.first_user.last_name)){
          let msg = "this field is required";
          this.bugs.fuln.msg = msg;
          this.bugs.fuln.error = true
          return false
      }
      if(this.hasErrors(this.first_user.email)){
          let msg = "this field is required";
          this.bugs.fuemail.msg = msg;
          this.bugs.fuemail.error = true
          return false
      }

      if(!this.checkPassword(this.first_user.password)){
        // this.$noty.error("representative password must be atleast than six(6) characters long");
          this.bugs.fupw.msg = "please password length must be greater than 5";
          this.bugs.fupw.error = true
          return false;
      }

      if(!this.matchPassword(this.first_user.password, this.first_user.password_confirmation)){
        // this.bugs.supw = "please password length must be greater than 5";
          this.bugs.fucpw.msg = "passwords do not match";
          this.bugs.fucpw.error = true
          return false;
      }

      if(this.hasErrors(this.second_user.first_name)){
          let msg = "this field is required";
          this.bugs.sufn.msg = msg;
          this.bugs.sufn.error = true
          return false
      }

      if(this.hasErrors(this.second_user.last_name)){
          let msg = "this field is required";
          this.bugs.suln.msg = msg;
          this.bugs.suln.error = true
          return false
      }
      if(this.hasErrors(this.second_user.email)){
          let msg = "this field is required";
          this.bugs.suemail.msg = msg;
          this.bugs.suemail.error = true
          return false
      }

      

      if(!this.checkPassword(this.second_user.password)){
        // this.$noty.error("representative password must be atleast than six(6) characters long");
          this.bugs.supw.msg = "please password length must be greater than 5";
          this.bugs.supw.error = true
          return false;
      }

      

      if(!this.matchPassword(this.second_user.password, this.second_user.password_confirmation)){
        // this.$noty.error("representative passwords do not match");
          this.bugs.sucpw.msg = "passwords do not match";
          this.bugs.sucpw.error = true
          return false;
      }
      
      this.form.members.push(this.first_user)
      this.form.members.push(this.second_user)
      
      let datar = {
          name : this.form.name,
          email : this.form.email,
          address : this.form.address,
          license_number : this.form.license_number,
          type : this.form.partner_type,
          phone_number : this.form.phone,
          description : this.form.description,
          members : this.form.members
        };
       
      
      // const config = {
      //     headers: { 'content-type': 'multipart/form-data' }
      // }
    
      this.disable = !this.disable
        await this.$axios.post('partners/signup', datar
        ).then(response => {
            this.$router.push({
              path:'/auth/verify'
            }) 
        })
        .catch(error => {
            console.log(error)
            
        })
      
    }
  },
  mounted(){
      
  },
  middleware:['guest']
}
</script>
