<template>
  <div>
    <body
      class="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static  "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="2-columns"
    >
      <Header></Header>
      <side-bar></side-bar>

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
                            src="~assets/img/portrait/small/avatar-s-11.jpg"
                            class="users-avatar-shadow w-100 rounded mb-2 pr-2 ml-1"
                            alt="avatar"
                          />
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                           <h6>Personal Info</h6>
                            <hr>
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-12">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>First Name:</strong> Ogunsusi</li>
                                    <li class="list-group-item"><strong>Last Name:</strong> Ayomide</li>
                                    <li class="list-group-item"><strong>Adresss:</strong> 09, opeoluwa street</li>
                                    <li class="list-group-item"><strong>City:</strong> Ikeja</li>
                                    <li class="list-group-item"><strong>State:</strong> Lagos</li>
                                    <li class="list-group-item"><strong>Email:</strong> greenhills@gmail.com</li>
                                    <li class="list-group-item"><strong>Phone:</strong> 09089787867</li>
                                    <li class="list-group-item"><strong>Date Registered:</strong> 23/04/2019</li>
                                </ul>
                              
                              </div>
                            </div>
                        </div>

                        <div class="col-12">
                          <nuxt-link to="/patients/editprofile" class="btn btn-outline-primary">
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
import Header from '~/components/customer/header'
import Footer from '~/components/customer/footer'
import SideBar from '~/components/customer/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
  }
}
</script>


