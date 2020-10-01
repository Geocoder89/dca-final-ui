<template>
<div>
    <!-- BEGIN: Content-->
    <div class="app-content content" style="margin-left: 0;">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <!-- <section class="row">
                    <div class="col-xl-12 col-12 d-flex justify-content-center">
                        <div class="card" style="padding-left:46px;padding-right:46px; border-radius:0;margin-bottom:10px;">
                            <div class="row m-0">
                                <div class="col-lg-12" style="display:flex;justify-content: center;background:transparent;">
                                    <img src="~assets/img/logo/drapp.png" class="mb-2 mt-1" width="250px" height="80px">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section> -->
                <section>
                    <center>
                            <img src="~assets/img/logo/drapp.png" class="mb-2 mt-1" width="250px" height="80px">
                    </center>
                </section>
                <section class="row">
                    <div class="col-xl-12 col-12 d-flex justify-content-center">
                        <div class="card bg-authentication rounded-0 mb-0">
                            <div class="row m-0">
                                
                                <div class="col-lg-12 col-12 p-0">
                                    <div class="card rounded-0 mb-0 px-2">
                                        <div class="card-header pb-1">
                                            <div class="card-title">
                                                <h3 class="mb-0">Sign In</h3>
                                            </div>
                                        </div>
                                        <!-- <p class="px-2">Welcome back, We are glad to have you back.</p> -->
                                       
                                        <div class="card-content">
                                            <div class="card-body pt-1">
                                                
                                                    <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                        <input type="text" class="form-control" :class="{'is-invalid': getError(errors)}" id="user-name" placeholder="Email" v-model="form.email" style="border-radius:40px;" >
                                                        <div class="form-control-position">
                                                            <i class="feather icon-user"></i>
                                                        </div>
                                                        <label for="user-name">Username</label>
                                                        <div class="invalid-feedback" v-if="errors.email">
                                                            {{errors.email[0]}}
                                                        </div>
                                                         <div class="invalid-feedback" v-if="errors.message">
                                                            {{errors.message}}
                                                        </div>
                                                    </fieldset>
                                                    <fieldset class="form-label-group position-relative has-icon-left">
                                                        <input type="password" class="form-control" id="user-password" :class="{'is-invalid': errors.password}" placeholder="Password" v-model="form.password" style="border-radius:40px;" >
                                                        <div class="form-control-position">
                                                            <i class="feather icon-lock"></i>
                                                        </div>
                                                        <label for="user-password">Password</label>
                                                        <div class="invalid-feedback" v-if="errors.password">
                                                            {{errors.password[0]}}
                                                        </div>
                                                       
                                                    </fieldset>
                                                    <div class="form-group d-flex justify-content-between align-items-center">
                                                       
                                                        <div class="text-left">
                                                             <div class="text-right d-sm-block"><nuxt-link to="/patients/forgotpassword" class="card-link">Forget Password?</nuxt-link></div>
                                                        </div>
                                                    </div>
                                                   <!--  <a href="index.html" class="btn btn-outline-primary float-left btn-inline">Register</a> -->
                                                    <button type="submit" @click="submit" :disabled="disable" class="btn btn-primary d-block btn-inline" style="border-radius:40px;">Sign In</button>
                                               
                                                <div class="form-group d-flex justify-content-between align-items-center mt-2">
                                                        <div class="text-center">
                                                             <div class="text-right d-sm-block">Don't Have an Account?<nuxt-link to="/" class="card-link"> Create Account</nuxt-link></div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="login-footer">
                                            
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

    <!-- END: Content-->
    <div class="d-flex justify-content-center" style="margin-top:300px;">
            copyright &copy; 2020
    </div>
    </div>
</template>
<script>
export default {
    
  name: 'Login',
  data(){
      return {
          form:{
              email:"",
              password:""
          },
          disable: false
      }
  },
  computed:{
      
  },
  methods:{
      
      
     submit(){
        this.disable = !this.disable
        this.$auth.login({
            data:this.form
        }).catch(error => {
            console.log(error.response)
            this.disable = !this.disable
        })
        
        this.authenticated()
       
        
        
    },
    authenticated(){
        const logged = this.$store.state.auth.loggedIn
        if(logged){
            console.log(this.$store.state.auth.user.roles[0].code);
        }
    },
    getError(errors){
        return errors.email || errors.message
    }
    
  },
  middleware:['guest']
}
</script>