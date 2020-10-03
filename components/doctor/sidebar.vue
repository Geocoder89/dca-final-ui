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
            <nuxt-link to="/doctor/patients"
              ><ion-icon name="hourglass-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Waiting Room</span>
            </nuxt-link>
          </li>
          <li class=" nav-item">
            <nuxt-link to="/doctor/casefile/cases"
              ><ion-icon name="receipt-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title"> Case Management</span>
            </nuxt-link>
           <!-- doctor-chats-caseid -->
          </li>
            <!-- <button type="button" class="btn btn-icon btn-primary" data-toggle="modal" data-target="#defaultSize">
                <i class="feather icon-navigation"></i>
            </button> -->
          <hr /> 
       
            <a :class="{'d-none': $nuxt.$route.name != 'Doctor-chats-caseid'}" data-toggle="modal" data-target="#defaultSize"
              style="padding: 30px 15px 30px 30px;"><ion-icon name="checkmark-done-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title" data-toggle="modal" data-target="#defaultSize">Update Case</span>
            </a>
          <br>
          <br>
            <a class="disabled" :class="{'d-none': $nuxt.$route.name != 'Doctor-chats-caseid'}" data-toggle="modal" data-target="#prescription"
              style="padding: 30px 15px 30px 30px;"><ion-icon name="checkmark-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Prescription</span>
            </a>
          
          <br>
          <br>
          
            <a class="disabled" :class="{'d-none': $nuxt.$route.name != 'Doctor-chats-caseid'}"
              style="padding: 30px 15px 30px 30px;"><ion-icon name="arrow-redo-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Refer Nurse</span>
            </a>
         
          <br>
         <br>
            <a class="disabled" :class="{'d-none': $nuxt.$route.name != 'Doctor-chats-caseid'}"
              style="padding: 30px 15px 30px 30px;"><ion-icon name="arrow-redo-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Refer Pharmacy</span>
            </a>
          <br>
          
         <br>
            <a class="disabled" :class="{'d-none': $nuxt.$route.name != 'Doctor-chats-caseid'}"
              style="padding: 30px 15px 30px 30px;margin-top:70px;"><ion-icon name="arrow-redo-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Refer Nutritionist</span>
            </a>
          <br>
          
         <br>
            <a class="disabled" :class="{'d-none': $nuxt.$route.name != 'Doctor-chats-caseid'}"
              style="padding: 30px 15px 30px 30px;"><ion-icon name="book-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title">Read Case</span>
            </a>
         
          <br>
          <br>
            <a class="disabled" :class="{'d-none': $nuxt.$route.name !== 'Doctor-chats-caseid'}" @click="initiateDialog"
              style="padding: 30px 15px 30px 30px;"><ion-icon name="close-outline" style="margin-right:1em;"></ion-icon>
              <span class="menu-title text-danger">Close Case</span>
            </a>
          
          
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
        
    },
    initiateDialog() {
        this.$emit('passEventToParent', {opendialog:true})
    }
  }
}
</script>
<style scoped>
.other-link{
    position:fixed;
    bottom:0;
    left:0;
}
.menu-navigation a{
  display: block;
  color: #565656;
padding: 10px 15px 10px 15px;
line-height: 1.45;
-webkit-transition: padding 0.35s ease 0s !important;
transition: padding 0.35s ease 0s !important;
}
</style>
