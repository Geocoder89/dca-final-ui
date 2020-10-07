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
                  <h4 class="content-header-title float-left mb-0">
                    Send to Firestore
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-6 col-12">
                <div class="card px-2 pb-1">
                  <div class="card-header"></div>
                  <div class="card-content">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <div class="controls">
                              <label for="account-old-password"
                                >Name</label
                              >
                              <input
                                id="account-old-password"
                                type="text"
                                class="form-control"
                                v-model="name"
                                required
                                style="border-radius:40px;"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <div class="controls">
                              <label for="account-new-password"
                                >Message</label
                              >
                              <input
                                id="account-new-password"
                                type="text"
                                class="form-control"
                                placeholder="Message..."
                                style="border-radius:40px;"
                                required
                                v-model="message"
                                minlength="6"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div
                          class="col-12 d-flex flex-sm-row flex-column justify-content-end"
                        >
                          <button
                            type="submit"
                            class="btn btn-primary mr-sm-1 mb-1 mb-sm-0"
                            style="border-radius:40px;"
                            @click.prevent="sendMessage"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  data(){
      return {
          name:"",
          message:""
      }
  },
  methods:{
      sendMessage(){
        let db = this.$fireStore
        db.collection("chats").add({
              name:this.name,
              message: this.message
          })
          .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });
      }
  },
  components: {
    Header,
    Footer,
    SideBar
  },
  middleware:['auth']
}
</script>
