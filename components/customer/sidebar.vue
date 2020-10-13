<template>
  <div class="sidebar-body">
    <div
      class="main-menu menu-fixed menu-light menu-accordion"
      data-scroll-to-active="true"
    >
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item mr-auto">
            <a class="navbar-brand" href="#">
              <div class="brand-logo"></div>
             <img src="~assets/img/samples/drcall way1.png" alt="" width="160px" >
            </a>
          </li>
          <li class="nav-item nav-toggle">
            <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"
              ><i
                class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"
              ></i
              ><i
                class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary"
                data-ticon="icon-disc"
              ></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="shadow-bottom"></div>
      <div class="main-menu-content">
        <ul
          class="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li class="nav-item active mt-2">
            <nuxt-link to="/patients/dashboard"
              ><i class="feather icon-home"></i
              ><span class="menu-title" data-i18n="Dashboard">Dashboard</span
              >
              </nuxt-link
            >
          </li>
          <hr />
          <!-- <li class=" nav-item">
            <nuxt-link to="/patients/waiting"
              ><ion-icon name="call-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Call a Doctor</span>
            </nuxt-link>
          </li> -->

          <li class=" nav-item">
            <nuxt-link to="/patients/profile"
              >
              <i class="icofont-user-alt-1"></i>
              <!-- <ion-icon name="person-outline" style="margin-right:1em;"></ion-icon> -->
              <span class="menu-title">Profile</span>
            </nuxt-link>
          </li>
          <li class=" nav-item ">
            <nuxt-link to="/patients/medicalhistory"
              ><i class="icofont-paper"></i>
              <span class="menu-title">Medical History</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/patients/consult"
              ><i class="icofont-hour-glass"></i>
              <span class="menu-title">Consultation Room</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/patients/prescriptions"
              ><i class="icofont-drug"></i>
              <span class="menu-title">Prescriptions</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/patients/referal"
              ><i class="icofont-ui-user-group"></i>
              <span class="menu-title">Referral</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/patients/subscriptionplan"
              ><i class="icofont-credit-card"></i>
              <span class="menu-title">Subscription Plan</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/patients/emergency"
              ><i class="icofont-ambulance-cross"></i>
              <span class="menu-title">Ambulance</span>
            </nuxt-link>
          </li>
        </ul>
        <hr />
        <ul
          class="navigation  navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li class=" nav-item">
            <nuxt-link to="/patients/help"
              ><i class="icofont-chat"></i>
              <span class="menu-title">Help Desk</span></nuxt-link
            >
          </li>
          <li class=" nav-item">
            <nuxt-link to="/patients/changepassword"
              ><i class="icofont-ui-settings"></i>
              <span class="menu-title">Change Password</span></nuxt-link
            >
          </li>
          <li class=" nav-item">
            <a href="#" @click.prevent="logout"
              ><i class="icofont-logout"></i>
              <span class="menu-title" data-i18n="Raise Support"
                >Logout</span
              ></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Sidebar",
  methods:{
    async logout(){

        await this.$auth.logout()
        .catch(error => {
            console.log(error.response)
        })
        this.$router.push({
            path:'/auth/login'
        })

    }

  }
}
</script>
<style scoped>
.other-link {
  position: fixed;
  bottom: 0;
  left: 0;
}

.menu-navigation a{
  display: block;
  color: #565656;
padding: 10px 15px 10px 15px;
line-height: 1.45;
-webkit-transition: padding 0.35s ease 0s !important;
transition: padding 0.35s ease 0s !important;
}

.main-menu {
background: rgb(138,40,143);
background: linear-gradient(90deg, rgba(138,40,143,1) 0%, rgba(78,7,82,1) 100%);;
}

.main-menu-content{
background: rgb(138,40,143);
background: linear-gradient(90deg, rgba(138,40,143,1) 0%, rgba(78,7,82,1) 100%);
}

.main-menu.menu-light .navigation {
background: rgb(138,40,143);
background: linear-gradient(90deg, rgba(138,40,143,1) 0%, rgba(78,7,82,1) 100%);
}
 .main-menu.menu-light .navigation li a {
    color: #fff;

}


#ion-icon {
  fill: #fff;
}

.main-menu.menu-light .navigation > li > a i {
    font-size: 20px;
}

.brand-text {
  color: #fff;
}
</style>
