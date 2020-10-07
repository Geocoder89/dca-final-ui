<template>
  <div>
    <div
      class="main-menu menu-fixed menu-light menu-accordion"
      data-scroll-to-active="true"
    >
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item mr-auto">
            <nuxt-link class="navbar-brand" to="#">
              <div class="brand-logo"></div>
              <h2 class="brand-text mb-0">DrCallaway</h2>
            </nuxt-link>
          </li>
          <li class="nav-item nav-toggle">
            <nuxt-link
              to="#"
              class="nav-link modern-nav-toggle pr-0"
              data-toggle="collapse"
              ><i
                class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"
              ></i
              ><i
                class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary"
                data-ticon="icon-disc"
              ></i
            ></nuxt-link>
          </li>
        </ul>
      </div>
      <div class="shadow-bottom"></div>
      <div class="main-menu-content">
        <ul
          id="main-menu-navigation"
          class="navigation navigation-main"
          data-menu="menu-navigation"
        >
          <li class="nav-item active">
            <nuxt-link to="/pharmacy/dashboard"
              ><i class="feather icon-home"></i
              ><span class="menu-title" data-i18n="Dashboard">Dashboard</span
              ></nuxt-link
            >
          </li>
          <hr />

          <li class=" nav-item">
            <nuxt-link to="profile"
              ><i class="feather icon-user"></i>
              <span class="menu-title">Profile</span>
            </nuxt-link>
          </li>
          <li class=" nav-item ">
            <nuxt-link to="/pharmacy/prescription"
              ><i class="fa fa-list-alt "></i>
              <span class="menu-title">Prescriptions</span>
            </nuxt-link>
          </li>

          <li class=" nav-item">
            <nuxt-link to="/pharmacy/delivery"
              ><i class="fa fa-shopping-cart"></i>
              <span class="menu-title">Delivery and Pickup</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/pharmacy/message"
              ><i class="fa fa-envelope"></i>
              <span class="menu-title">Message</span>
            </nuxt-link>
          </li>
        </ul>
        <hr />
        <ul
          id="main-menu-navigation"
          class="navigation other-link navigation-main"
          data-menu="menu-navigation"
        >
          <li class=" nav-item">
            <nuxt-link to="/pharmacy/help"
              ><i class="feather icon-alert-circle"></i
              ><span class="menu-title">Help Desk</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/pharmacy/changepassword"
              ><i class="feather icon-settings"></i
              ><span class="menu-title">Change Password</span>
            </nuxt-link>
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
