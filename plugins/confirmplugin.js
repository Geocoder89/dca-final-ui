import Vue from 'vue';
import VuejsDialog from 'vuejs-dialog';
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components
 
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
 
// Tell Vue to install the plugin.
export default function(){
    Vue.use(VuejsDialog, {
        html: true,
        loader: false,
        okText: 'Proceed',
        cancelText: 'Cancel',
        animation: 'zoom'
    });
}