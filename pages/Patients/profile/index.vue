<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: auto;">
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
                  <h3 class="content-header-title float-left mb-0">Profile</h3>
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
                    <div class="card-body">
                      <div class="row">
                        <div class="users-view-image pl-1">
                          <img
                            src="~assets/img/portrait/small/avatar-s-11.jpg"
                            class="users-avatar-shadow w-100 rounded mb-2 pr-2 ml-1"
                            alt="avatar"
                          />
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                           <h6 class="pl-1">Personal Info</h6>
                            <hr>
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-12">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">First Name: {{user.first_name}}</li>
                                    <li class="list-group-item">Last Name: {{user.last_name}}</li>
                                    <li class="list-group-item">Adresss: {{user.address ? user.address : "Enter your address here"}}</li></li>
                                    <li class="list-group-item">City: {{user.city ? user.city : "Enter your city"}}</li>
                                    <li class="list-group-item">State: {{user.state ? user.state : "Enter your state"}}</li>
                                    <li class="list-group-item">Email: {{user.email}}</li>
                                    <li class="list-group-item">Phone: {{user.mobile_phone_number ? user.mobile_phone_number : "Enter your phone"}}</li>
                                    <li class="list-group-item">Date Registered: {{user.created_at | formatDate}}</li>
                                </ul>
                              
                              </div>
                            </div>
                        </div>

                        <div class="col-12 pt-2" style="padding-left:30px;">
                          <nuxt-link to="/patients/editprofile" class="btn btn-outline-primary" style="border-radius:40px;">
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
import moment from 'moment'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
  },
  filters:  {
    formatDate:  function(value)  {
      return moment(String(value)).format('MM/DD/YYYY')
    }
  },
  middleware:['auth','patient']
}
</script>
<style scoped>
@media only screen and (max-width: 768px) {
            .content{
              margin-left:-15px;
            }
            
        }
</style>


