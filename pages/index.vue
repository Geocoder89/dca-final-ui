<template>
  <!-- BEGIN: Content-->
  <div
    class="app-content content justify-content-center"
    style="margin-left:0;"
  >
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper new">
      <div class="content-header row"></div>
      <div class="content-body">
        <section class="card-overlay">
          <div class="card-overlay-img">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="~assets/img/samples/doc1.png"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="~assets/img/samples/doc2.png"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="~assets/img/samples/doc3.png"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="row flexbox-container justify-content-center">
          <div class="col-xl-8 col-11 d-flex justify-content-center">
            <div class="card main-card rounded mb-0">
              <div class="row">
                <div
                  class="col-lg-12 logo-top"
                  style="display:flex;justify-content: center;"
                >
                  <img
                    src="~assets/img/logo/drapp.png"
                    class="mb-2 mt-1 "
                    width="60%"

                  />
                  <!-- <h2 class="brand-text mb-2 mt-1" style="align-self: center;">Drcallaway</h2> -->
                </div>

                <div class="col-12">
                  <div class="card round-card rounded mb-0">
                    <div class="card-title">
                      <!-- <h3 class="text-center">Drcallaway</h3> -->
                    </div>
                    <br>
                    <h2 class=" text-center">
                      Welcome to a world where we literally treat
                    </h2>
                    <h1 class="text-center display-4">HEALTH AS WEALTH.</h1>

                    <div class="card-content">
                      <div class="card-body">
                        <!-- Icon, Title and Description Card -->

                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-3 icon">
                            <div class="single-features">
                              <div class="signle-icon">
                                <i class="icofont icofont-user"></i>
                              </div>
                              <nuxt-link to="/patients/signup">
                                <p>Patient</p>
                              </nuxt-link>
                            </div>
                          </div>
                          <div class="col-12 col-sm-6 col-md-3 icon">
                            <div class="single-features">
                              <div class="signle-icon">
                                <i class="icofont-nurse-alt"></i>
                              </div>
                              <nuxt-link to="/pharmacy/signup">
                                <p>Nurse</p>
                              </nuxt-link>
                            </div>
                          </div>

                          <div class="col-12 col-sm-6 col-md-3 icon">
                            <div class="single-features">
                              <div class="signle-icon">
                                <i class="icofont-doctor"></i>
                              </div>
                              <nuxt-link to="/doctor/signup">
                                <p>Doctor</p>
                              </nuxt-link>
                            </div>
                          </div>

                          <div class="col-12 col-sm-6 col-md-3 icon">
                            <div class="single-features">
                              <div class="signle-icon">
                                <i class="icofont-fruits"></i>
                              </div>
                              <nuxt-link to="/pharmacy/signup">
                                <p>Nutritionist</p>
                              </nuxt-link>
                            </div>
                          </div>
                        </div>

                        <div class="row my-3">
                          <div class="col-12 col-sm-6 col-md-3 icon">
                            <div class="single-features">
                              <div class="signle-icon">
                              <i class="icofont-microscope-alt"></i>
                              </div>
                              <nuxt-link to="/pharmacy/signup">
                                <p>Diagnostic</p>
                              </nuxt-link>
                            </div>
                          </div>

                          <div class="col-12 col-sm-6 col-md-3 icon">
                            <div class="single-features">
                              <div class="signle-icon">
                                <i class="icofont-ambulance"></i>
                              </div>
                              <nuxt-link to="/pharmacy/signup">
                                <p>Ambulance</p>
                              </nuxt-link>
                            </div>
                          </div>

                          <div class="col-12 col-sm-6 col-md-3 icon">
                            <div class="single-features">
                              <div class="signle-icon">
                           <i class="icofont-drug"></i>
                              </div>
                              <nuxt-link to="/pharmacy/signup">
                                <p>Pharmacy</p>
                              </nuxt-link>
                            </div>
                          </div>

                          <div class="col-12 col-sm-6 col-md-3 icon">
                            <div class="single-features">
                              <div class="signle-icon">
                                <i class="icofont-hospital"></i>
                              </div>
                              <nuxt-link to="/pharmacy/signup">
                                <p>Hospital</p>
                              </nuxt-link>
                            </div>
                          </div>
                        </div>

                        <!-- <div class="row">
                          <div style="height: 150px;"></div>
                        </div> -->
                      </div>
                    </div>

                    <div class="login-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="row">
          <div style="height: 50px;"></div>
        </div>
            <div class="copyright">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-12">
                    <div class="copyright-content">
                      <p>
                        © Copyright 2020 | All Rights Reserved by

                          Dr CallAway <sup>TM</sup>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
  </div>
</template>
    <!-- END: Content-->
    <script>
// import 'vuejs-noty/dist/vuejs-noty.css'
export default {
  name: 'Home',
  middleware:['guest'],
  mounted() {
    // this.$noty.success("Your profile has been saved!")
  }
}
</script>


<style lang="css" scoped>
/* .card-overlay {
    position: relative;
  } */
.flexbox-container {
  margin-top: -400px;
}

.card-overlay img  {
  /* transform-origin: 0% 50%;
  transform: skewY(-3deg);
  height: 900px;
  width: 100%;
  /* object-fit: cover;
  background-size: cover; */
  height: auto;

}

.card{
  max-width: 800px;
}



.single-features {
  text-align: center;
  position: relative;
  margin: 0;
  padding: 0px 20px;
}
.single-features .signle-icon {
  position: relative;
}
/* .single-features .single-icon:hover {
  position: relative;
} */
.single-features .signle-icon i {
  font-size: 40px;
  color: #a048a6;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  margin-top: 20px;
  top: 0;
  height: 100px;
  width: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 100%;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.single-features .signle-icon i:hover {
  color: #fff;
  background-color: #a048a6;
}
.single-icon i {
  font-size: 30px;
  color: #a048a6;
  width: 100px;
  height: 100px;
  border: 1px solid #dddddd;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  padding: 20px;
}

.single-features p {
  padding-top: 128px;
  color: #333;
  font-weight: 400;
  font-size: 20px;
}

.logo-top {
  margin-top: -60px;
}


html body .content .content-wrapper {
  padding : 0;
  margin-top :0;

}
.copyright {
  /* background: #a048a6; */
  padding: 25px 50px;

}
.copyright .copyright-content p {
  color: #ccc;
  left: 50%;
  right: 50%;
  text-align: center;
}

.icon {
  padding-left: 0px;
  padding-right: 0px;
}


</style>

