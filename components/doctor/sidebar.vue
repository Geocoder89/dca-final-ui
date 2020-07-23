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
              <h2 class="brand-text mb-0">Drcallaway</h2>
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
            <nuxt-link to="/doctor/docboard"
              ><i class="feather icon-home"></i
              ><span class="menu-title" data-i18n="Dashboard">Dashboard</span
              >
              <!-- <span class="badge badge badge-warning badge-pill float-right"
                >2</span
              > -->
              </nuxt-link
            >
            
          </li>
          <hr />
          <li class=" nav-item">
            <nuxt-link to="/doctor/profile"
              ><ion-icon name="person-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Profile</span>
            </nuxt-link>
          </li>

          <li class=" nav-item">
            <nuxt-link to="#"
              ><ion-icon name="hourglass-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Waiting Room</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/doctor/patients"
              ><ion-icon name="receipt-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title"> Case Management</span>
            </nuxt-link>
            <!-- <ul class="menu-content">
                  <li><nuxt-link to="/doctor/casefile"><i class="fa fa-file-pdf-o"></i><span class="menu-item" data-i18n="Basic">Casefile</span></nuxt-link>
                  </li>
                  <li><nuxt-link to="/doctor/cases"><i class="fa fa-file-pdf-o"></i><span class="menu-item" data-i18n="Statistics">Manage</span></nuxt-link>
                  </li>
            </ul> -->
          </li>
          <li class=" nav-item ">
            <nuxt-link to="/doctor/message"
              ><ion-icon name="mail-unread-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Messages</span>
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
            <nuxt-link to="/doctor/help"
              ><ion-icon name="information-circle-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Help Desk</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/doctor/changepassword"
              ><ion-icon name="settings-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Change Password</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="../logout"
              ><ion-icon name="exit-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title" data-i18n="Raise Support"
                >Logout</span
              ></nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Sidebar"
}
</script>
<style scoped>
.other-link{
    position:fixed;
    bottom:0;
    left:0;
}
</style>
