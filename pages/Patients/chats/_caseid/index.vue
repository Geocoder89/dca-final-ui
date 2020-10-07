<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: auto;">
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
                  <h4 class="content-header-title float-left mb-0">
                    Chat
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
              <Chatbox />
          </div>
        </div>
      </div>
      <!-- END: Content-->

      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <Footer></Footer>
    </body>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '~/components/customer/header'
import Footer from '~/components/customer/footer'
import Sidebar from '~/components/customer/sidebar'
import Chatbox from '~/components/chatcomponent'

export default {
  name: 'chats',
  components: {
    Header,
    Footer,
    Sidebar,
    Chatbox
  },
  
  middleware:['auth','checkCompletedCase','patient']
}
</script>
<style scoped>
    *{
        scrollbar-width: thin;
    }
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    body::-webkit-scrollbar {
        width: 3px;
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 10px;
        border: 3px solid orange;
    }
    body::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
    }
@media only screen and (max-width: 768px) {
    .content{
        margin-left:0;
    }
}
</style>
