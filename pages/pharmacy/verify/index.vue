<template>
<!-- BEGIN: Content-->
    <div class="app-content content" style="margin-left:0;">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <section class="row flexbox-container justify-content-center">  
                    <div class="col-xl-8 col-12 d-flex justify-content-center">
                        <div class="card rounded-0 mb-0">
                            <div class="row m-0">
                                <div class="col-lg-12" style="display:flex;justify-content: center;">
                                    <img src="~assets/img/logo/drcallaway-logo.png" class="mb-2 mt-1" width="45px" height="40px">
                                    <h2 class="brand-text mb-2 mt-1" style="align-self: center;">Drcallaway</h2>
                                </div>
                                <div class="col-lg-12 col-12 p-0" >
                                    <div class="card rounded-0 mb-0 px-2">
                                        
                                        <div class="card-title">
                                            <h3 class="text-center"><u>Verify Your Account</u></h3>
                                        </div>
                                        <p class=" text-center">Kindly verify your email address by
                                        clicking the link sent to your mailbox.</p>
                                        <div class="card-content">
                                            <div class="card-body pt-1 d-flex justify-content-center">
                                                <nuxt-link to="/pharmacy/dashboard" style="text-align: center;">Click here to continue</nuxt-link>
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
</template>
    <!-- END: Content-->
    <script>
export default {
  name: 'Verify'
}
</script>
