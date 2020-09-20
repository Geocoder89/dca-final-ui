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
                                                <form action="index.html">
                                                    <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                        <input type="text" class="form-control" id="user-name" placeholder="Email" style="border-radius:40px;" required>
                                                        <div class="form-control-position">
                                                            <i class="feather icon-user"></i>
                                                        </div>
                                                        <label for="user-name">Username</label>
                                                    </fieldset>

                                                    <fieldset class="form-label-group position-relative has-icon-left">
                                                        <input type="password" class="form-control" id="user-password" placeholder="Password" style="border-radius:40px;" required>
                                                        <div class="form-control-position">
                                                            <i class="feather icon-lock"></i>
                                                        </div>
                                                        <label for="user-password">Password</label>
                                                    </fieldset>
                                                    <div class="form-group d-flex justify-content-between align-items-center">
                                                        <div class="text-left">
                                                            <label>
                                                                <input
                                                                type="radio"
                                                                name="radio"
                                                                checked
                                                                />
                                                                Remember
                                                            </label>
                                                        </div>
                                                        <div class="text-left">
                                                             <div class="text-right d-sm-block"><nuxt-link to="/pharmacy/forgotpassword" class="card-link">Forget Password?</nuxt-link></div>
                                                        </div>
                                                    </div>
                                                   <!--  <a href="index.html" class="btn btn-outline-primary float-left btn-inline">Register</a> -->
                                                    <nuxt-link to="/pharmacy/dashboard" type="submit" id="login" class="btn btn-primary d-block btn-inline" style="border-radius:40px;">Sign In</nuxt-link>
                                                </form>
                                                <div class="form-group d-flex justify-content-between align-items-center mt-2">
                                                        <div class="text-center">
                                                             <div class="text-right d-sm-block">Don't Have an Account?<nuxt-link to="/pharmacy/signup" class="card-link"> Create Account</nuxt-link></div>
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
  name: 'Login'
}
</script>