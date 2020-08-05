<template>
  <div>
    <body
      class="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="2-columns"
    >
      <Header></Header>
      <Sidebar></Sidebar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">Profile</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section class="page-users-view">
              <div class="row justify-content-center">
                <!-- account start -->
                <div class="col-md-6 col-md-6 col-12">
                  <div class="card">
                    <div class="card-header">
                      <div class="card-title">Profile</div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="users-view-image">
                          <img
                            src="~assets/img/portrait/small/avatar-s-6.jpg"
                            class="users-avatar-shadow w-100 rounded mb-2 pr-2 ml-1"
                            alt="avatar"
                          />
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <h6>Personal Info</h6>
                            <hr>
                            <div class="row">
                              <div class="col-lg-6 col-md-6 col-12">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>First Name:</strong> Yemisi</li>
                                    <li class="list-group-item"><strong>Last Name:</strong> Otunbusi</li>
                                    <li class="list-group-item"><strong>Adresss:</strong> 08, jige aina street</li>
                                    <li class="list-group-item"><strong>City:</strong> Ikeja</li>
                                    <li class="list-group-item"><strong>State:</strong> Lagos</li>
                                    <li class="list-group-item"><strong>Email:</strong> donmils@gmail.com</li>
                                    <li class="list-group-item"><strong>Phone:</strong> 09089787867</li>
                                    <li class="list-group-item"><strong>Date Registered:</strong> 23/04/2019</li>
                                </ul>
                              </div>
                              <div class="col-lg-6 col-md-6 col-12">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>NMCN No:</strong> 09783682899</li>
                                    <li class="list-group-item"><strong>Nursing School:</strong> Institute of Health</li>
                                    <li class="list-group-item"><strong>Year:</strong> 2014</li>
                                    <li class="list-group-item"><strong>Gp:</strong> Nil</li>
                                    <li class="list-group-item"><strong>Specialty:</strong> Nil</li>
                                </ul>
                              </div>
                            </div>
                        </div>

                        <div class="col-12">
                          <nuxt-link to="/nurse/editprofile" class="btn btn-outline-primary mt-2">
                              <i class="feather icon-edit"></i> Edit Profile
                            </nuxt-link>
                          <!-- <button class="btn btn-outline-danger">
                            <i class="feather icon-"></i> Cancel
                          </button> -->
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

      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <Footer></Footer>
    </body>
  </div>
</template>
<script>
import Header from '~/components/nurse/header'
import Footer from '~/components/nurse/footer'
import Sidebar from '~/components/nurse/sidebar'

export default {
  name: 'Profile',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>

<style scoped>
.other-link {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
