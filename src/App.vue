[[<template>
  <ion-app>
    <ion-router-outlet/>
   
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet,loadingController  , alertController , toastController} from "@ionic/vue";
// import { App } from '@capacitor/app';
import { defineComponent } from "vue";
// import { Network } from "@capacitor/network";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },

 
  mounted() {
  
     this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("getUser");
    this.$store.dispatch("fetchSubCategories");

    // this.veirfy();
  },
  methods: {
    veirfy() {
      if (localStorage.getItem("userToken")) {
        console.log("loggend in");
      } else if (localStorage.getItem("userToken") == null) {
        this.$router.push("/LoginPage");
      }
    },
    loading() {
      this.$store.state.loader = true;
      setTimeout(() => {
        this.$store.state.loader = false;
      }, 1000);
    },
    refresh() {
      location.reload();
    },
  async loader(){
         const loading = await loadingController.create({
          message: 'Loading...',
          duration: 3000,
          spinner: 'circles'
        });
        
        loading.present();
    },
    async alertShow(type,message){
      let success = `
       <div class="f-modal-icon f-modal-success animate">
            <span class="f-modal-line f-modal-tip animateSuccessTip"></span>
            <span class="f-modal-line f-modal-long animateSuccessLong"></span>
            <div class="f-modal-placeholder"></div>
            <div class="f-modal-fix"></div>
          </div>
      `
      let warning = `
                 <div class="f-modal-icon f-modal-warning scaleWarning"><span class="f-modal-body pulseWarningIns"></span><span class="f-modal-dot pulseWarningIns"></span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div>
      `
      let error = `
               <div class="f-modal-icon f-modal-error animate"><span class="f-modal-x-mark"> <span class="f-modal-line f-modal-left animateXLeft"></span><span class="f-modal-line f-modal-right animateXRight"></span> </span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div>

      `
      let icon = ''
      if(type == 'success'){
        icon = success
      }else if(type == "warning"){
        icon = warning
      }else if( type == 'error'){
        icon = error
      }

      const alert = await alertController.create({
        cssClass: "success-alert",
        message:
           `<div class="flex flex-col justify-center items-center text-center"> ${icon}<h2 class="font-semibold"> ${message}  </h2></div>`,
        buttons: ["تم"],
      });
      await alert.present();


    },
        async toast(position, color, text) {
      const toast = await toastController.create({
        message: text,
        duration: 1500,
        position: position,
        color: color,
      });
      await toast.present();
    },
  },
  provide() {
    return {
      veirfy: this.veirfy,
      loading: this.loading,
      loader : this.loader,
      alertShow : this.alertShow,
      toast : this.toast
    };
  },
});
</script>
]]