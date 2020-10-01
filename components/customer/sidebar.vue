<template>
  <div>
    <div
      class="main-menu menu-fixed menu-light menu-accordion"
      data-scroll-to-active="true"
    >
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item mr-auto">
            <a class="navbar-brand" href="#">
              <div class="brand-logo"></div>
              <h2 class="brand-text mb-0">Drcallaway</h2>
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
          <li class="nav-item active">
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
              ><ion-icon name="person-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Profile</span>
            </nuxt-link>
          </li>
          <li class=" nav-item ">
            <nuxt-link to="/patients/medicalhistory"
              ><ion-icon name="receipt-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Medical History</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/patients/consult"
              ><ion-icon name="hourglass-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Consultation Room</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/patients/prescriptions"
              ><ion-icon name="bandage" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Prescriptions</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/patients/referal"
              ><ion-icon name="people-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Referral</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/patients/subscriptionplan"
              ><ion-icon name="card-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Subscription Plan</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/patients/emergency"
              ><i class="fa fa-ambulance" style="margin-right:1em;"></i>
              <span class="menu-title">Ambulance</span>
            </nuxt-link>
          </li>
        </ul>
        <hr />
        <ul
          class="navigation other-link navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li class=" nav-item">
            <nuxt-link to="/patients/help"
              ><ion-icon name="alert-circle-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Help Desk</span></nuxt-link
            >
          </li>
          <li class=" nav-item">
            <nuxt-link to="/patients/changepassword"
              ><ion-icon name="settings-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Change Password</span></nuxt-link
            >
          </li>
          <li class=" nav-item">
            <a href="#" @click.prevent="logout"
              ><ion-icon name="exit-outline" style="margin-right:1em;"></ion-icon>
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
</style>
