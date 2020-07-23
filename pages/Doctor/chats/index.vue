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
                  <h4 class="content-header-title float-left mb-0">
                    Chat
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-12">
                <section class="card">
                   <div class="card-header p-2" style="background: #814BAA;color:#ffffff">
                       <nuxt-link
                              to="waiting"
                              class="btn btn-sm btn-primary"
                              ><ion-icon name="ellipsis-horizontal" style="font-size:3em;"></ion-icon>
                       </nuxt-link>
                        <h4 class="card-title" style="color:#ffffff;">Dr Akinwunmi</h4>
                        <div style="color:#ffffff;">
                            <a href="#" style="color:#ffffff;"><span class="mr-75 feather icon-camera"></span></a>
                            <a href="#" style="color:#ffffff;"><span class="mr-75 feather icon-phone"></span></a>
                            <a href="#" style="color:#ffffff;"><span class="mr-75 feather icon-video"></span></a>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-body p-0">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="card chat-application">
                                    
                                    <div class="chat-app-window">
                                        <div class="user-chats pr-0 pl-0">
                                            <div class="m-1"><small class="text-muted">July 15, 2020</small></div>
                                            <div class="chats">
                                                <div class="chat chat-left">
                                                    <div class="chat-avatar mt-50">
                                                        <a class="avatar m-0" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="">
                                                            <img src="~assets/img/portrait/small/avatar-s-5.jpg" alt="avatar" height="40" width="40" />
                                                        </a>
                                                    </div>
                                                    <div class="chat-body" style="width: 80%;">
                                                        <div class="chat-content">
                                                            <p>hi James, how are you today?</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat">
                                                    <!-- <div class="chat-avatar">
                                                        <a class="avatar m-0" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="">
                                                            <img src="app-assets/images/portrait/small/avatar-s-5.jpg" alt="avatar" height="40" width="40" />
                                                        </a>
                                                    </div> -->
                                                    <div class="chat-body pr-0 mr-0">
                                                        <div class="chat-content2">
                                                            <p>i'm fine and you</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat chat-left">
                                                    <div class="chat-avatar mt-50">
                                                        <a class="avatar m-0" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="">
                                                            <img src="~assets/img/portrait/small/avatar-s-5.jpg" alt="avatar" height="40" width="40" />
                                                        </a>
                                                    </div>
                                                    <div class="chat-body" style="width: 80%;">
                                                        <div class="chat-content">
                                                            <p>i'm doing great too</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="chat">
                                                    <!-- <div class="chat-avatar">
                                                        <a class="avatar m-0" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="">
                                                            <img src="app-assets/images/portrait/small/avatar-s-5.jpg" alt="avatar" height="40" width="40" />
                                                        </a>
                                                    </div> -->
                                                    <div class="chat-body pr-0 mr-0 pb-0" >
                                                        <div class="chat-content2">
                                                            <p>that's great, i have an issue</p>
                                                        </div>
                                                        <!-- <small>09/02/20, 5:59 PM</small> -->
                                                    </div>
                                                </div>
                                                <div class="chat chat-left">
                                                    <div class="chat-avatar mt-50">
                                                        <a class="avatar m-0" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="">
                                                            <img src="~assets/img/portrait/small/avatar-s-5.jpg" alt="avatar" height="40" width="40" />
                                                        </a>
                                                    </div>
                                                    <div class="chat-body" style="width: 80%;">
                                                        <div class="chat-content">
                                                            <p>okay go on, i'm listening</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat">
                                                    <!-- <div class="chat-avatar mt-50">
                                                        <a class="avatar m-0" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="">
                                                            <img src="app-assets/images/portrait/small/avatar-s-5.jpg" alt="avatar" height="40" width="40" />
                                                        </a>
                                                    </div> -->
                                                    <div class="chat-body float-right pr-0 mr-0" style="width: 80%;">
                                                        <div class="chat-content2 text-left">
                                                            <p>long ago before my surgery, i usually feel dizzy while eating..</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <hr>
                                    <div class="chat-footer mt-0">
                                            <div class="card-body d-flex justify-content-between pt-0">
                                                <a href="#" class="align-self-center"><i class="fa fa-paperclip btn-icon" style="font-size: 18px;"></i></a>
                                                <input type="text" class="form-control mr-50 ml-50" placeholder="Type your Message" style="border-radius: 50px;">
                                                <!-- <button type="button" class="btn btn-icon btn-primary"><i class="feather icon-navigation"></i></button> -->
                                                <a href="#" class="align-self-center"><i class="fa fa-paper-plane-o btn-icon" style="font-size: 18px;"></i></a>
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
import Header from '~/components/doctor/header'
import Footer from '~/components/doctor/footer'
import Sidebar from '~/components/doctor/sidebar'

export default {
  name: 'chats',
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
