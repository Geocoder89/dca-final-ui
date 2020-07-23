<template>
<!-- BEGIN: Content-->
    <div class="app-content content justify-content-center" style="margin-left:0;">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <section class="row flexbox-container justify-content-center">  
                    <div class="col-xl-8 col-11 d-flex justify-content-center">
                        <div class="card rounded-0 mb-0">
                            <div class="row m-0">
                                <div class="col-lg-12" style="display:flex;justify-content: center;">
                                    <img src="~assets/img/logo/Drcallaway-logo.png" class="mb-2 mt-1" width="100px" height="90px">
                                    <!-- <h2 class="brand-text mb-2 mt-1" style="align-self: center;">Drcallaway</h2> -->
                                </div>
                                <div class="col-lg-12 col-12 p-0" >
                                    <div class="card rounded-0 mb-0 px-2">
                                        <!-- <div class="card-header pb-1">
                                            <div class="card-title text-center d-flex justify-content-center">
                                                <h3 class="px-3 text-center align-self-center">Verify Your Account</h3>
                                            </div>
                                        </div> -->
                                        <div class="card-title">
                                            <h3 class="text-center"><u>Drcallaway</u></h3>
                                        </div>
                                        <p class=" text-center">Welcome to a world where we literally treat health as wealth.</p>
                                        <ion-icon name="chevron-down-outline" style="align-self:center;text-alifgn:center"></ion-icon>
                                        <div class="card-content">
                                            <div class="card-body pt-1 d-flex justify-content-center">
                                                <nuxt-link to="/Patients/signup" style="text-align: center;">Patient | </nuxt-link>
                                                <nuxt-link to="/Doctor/signup" style="text-align: center;"> doctor | </nuxt-link>
                                                <nuxt-link to="#" style="text-align: center;"> Phamarcy</nuxt-link>
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
  name: 'Home'
}
</script>