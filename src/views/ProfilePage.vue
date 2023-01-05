<template>
  <ion-page>
    <ion-content class="">
      <loading-spinner v-if="$store.state.loader" />
      <div
        class="profile flex flex-col justify-between itmes-center h-full py-8"
        v-if="!$store.state.loader"
      >
        <div class="p-header">
          <div class="flex flex-col justify-center items-center pt-4">
            <span class="block py-1 pt-2 font-semibold"> الملف الشخصي </span>
          </div>
          <span class="block py-1 pt-2 f text-center text-gray-400 py-2">
            {{ userData.data.name }}
          </span>
          <div class="px-2 py-20">
            <router-link to="/tabs/EditProfile" class="block text-center px-4">
              <div class="flex shadow rounded-xl p-4 w-full my-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <span class="px-4 text-black" @click="push()">
                  تعديل الملف الشخصي
                </span>
              </div>
            </router-link>
            <router-link to="/tabs/LastOrders" class="block text-center px-4">
              <div class="flex shadow rounded-xl p-4 my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                <span class="px-4 text-black"> الطلبات السابقه </span>
              </div>
            </router-link>

            <router-link to="/tabs/ContactPage" class="block text-center px-4">
              <div class="flex shadow rounded-xl p-4 my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span class="px-4 text-black"> تواصل معنا </span>
              </div>
            </router-link>
          </div>
        </div>

        <div class="px-4 py-4">
          <div
            class="flex bg-gray-100 rounded-xl justify-center p-4 mt-2"
            @click="logout()"
          >
            <span class="text-black font-semibold"> تسجيل الخروج </span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  alertController,
  toastController,
  loadingController
} from "@ionic/vue";
import { mapGetters } from "vuex";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import axios from "axios";

export default {
  name: "ProfilePage",
  components: {
    IonPage,
    IonContent,
    LoadingSpinner,
  },
  created() {
    this.veirfy();
    this.loading();
    this.$store.dispatch("getUser");

  },
  mounted(){
    console.log(this.userData);
  },
  computed: mapGetters(["userData"]),

  inject: ["veirfy", "loading", "push"],
  methods: {
    async logout() {
      const token = localStorage.getItem("userToken");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            duration: this.timeout,
          });

        await loading.present();
      try {
        const res = await axios.get(
          "https://admin.aladeel-waalzain.com/api/v1/auth/logout",
          config
        );
        if (!res.data.success) {
                     loading.dismiss()
          this.wrong();
          return;
        }

        console.log(res);
        localStorage.clear();
        await this.$router.push("/");
        location.reload();
                     loading.dismiss()

        this.success();
      } catch (error) {
        this.$store.state.loader = false;
        this.wrong();
                     loading.dismiss()

      }
    },
    async success() {
      const toast = await toastController.create({
        message: "تم تسجيل الخروج بنجاح  ",
        duration: 4000,
        position: "top",
        color: "success",
      });
      return toast.present();
    },
    async wrong() {
      const alert = await alertController.create({
        cssClass: "success-alert",
        message:
          ' <div class="flex flex-col justify-center items-center text-center"><div class="f-modal-icon f-modal-error animate"><span class="f-modal-x-mark"> <span class="f-modal-line f-modal-left animateXLeft"></span><span class="f-modal-line f-modal-right animateXRight"></span> </span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div><h2 class="font-semibold"> خطاء اثناء تسجيل الخروج, حاول الاتصال بالانترنت </h2></div>',
        buttons: ["تم"],
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log(role);
    },
  },
};
</script>

<style></style>
