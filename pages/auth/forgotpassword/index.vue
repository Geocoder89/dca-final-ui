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
                                                <h3 class="mb-0">Forgot Password</h3>
                                            </div>
                                        </div>
                                        <p class="px-2">We just need your registered email ID to send a reset link.</p>
                                        <div class="card-content">
                                            <div class="card-body pt-1">
                                                <form action="#">
                                                    <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                        <input type="text" class="form-control" style="border-radius:40px;" id="user-name" placeholder="Email" required>
                                                        <div class="form-control-position">
                                                            <i class="feather icon-user"></i>
                                                        </div>
                                                        <label for="user-name">Username</label>
                                                    </fieldset>
                                                   <!--  <a href="index.html" class="btn btn-outline-primary float-left btn-inline">Register</a> -->
                                                    <a href="#" type="submit" id="login" style="border-radius:40px;" class="btn btn-primary d-block btn-inline">Reset Password</a>
                                                </form>
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
  name: 'Forgotpassword'
}
</script>