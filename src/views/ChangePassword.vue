[<template>
  <ion-page>
    <ion-header v-if="!$store.state.loader">
      <ion-toolbar>
        <div class="flex items-center justify-between px-4">
          <div class="py-4">
            <router-link to="/tabs/ProfilePage">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </router-link>
          </div>
          <h2>تغيير كلمه المرور</h2>
          <div>
            <span class="hidden">change password</span>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />
      <div class="py-6 px-2" v-if="!$store.state.loader">
                        <form @submit.prevent="ChangePassword()" >

        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="relative px-4 sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div class="">
                <div
                  class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div>
                <label
                  for="password"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >  كلمه السر الحاليه</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                  placeholder="••••••••"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-yellow-600 focus:border-yellow-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-yellow-500
                    dark:focus:border-yellow-500
                  "
                />
              </div>
               <div>
                <label
                  for="password"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >الجديدة </label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="newPassword"
                  placeholder="••••••••"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-yellow-600 focus:border-yellow-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-yellow-500
                    dark:focus:border-yellow-500
                  "
                />
              </div>
              <div>
                <label
                  for="password"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >اعد كتابه كلمه السر</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="reNewPassword"
                  placeholder="••••••••"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-yellow-600 focus:border-yellow-600
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-yellow-500
                    dark:focus:border-yellow-500
                  "
                />
              </div>
                  <div class="relative text-center">
                    <button
                type="submit"
                class="
                  w-full
                  text-white
                  bg-yellow-600
                  hover:bg-yellow-700
                  focus:ring-4 focus:outline-none focus:ring-yellow-300
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  dark:bg-yellow-600
                  dark:hover:bg-yellow-700
                  dark:focus:ring-yellow-800
                "
              >
                تسجيل حساب جديد
              </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  loadingController,
  IonHeader,
  IonContent,
  IonToolbar,
} from "@ionic/vue";
import { mapGetters } from "vuex";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner.vue";
export default {
  components: { IonPage, IonHeader, IonContent, LoadingSpinner, IonToolbar   },
  data() {
    return {
      empty: false,
      newPassword: "",
      reNewPassword: "",
      password: "",
      // log: {
      //   email: "user41@gmail.com",
      //   password: "2",
      // },
    };
  },
  computed: mapGetters(["userData"]),

  created() {
    this.veirfy();
    this.$store.dispatch("getUser");
  },
  methods: {
    async ChangePassword() {
  const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            duration: this.timeout,
          });

        await loading.present();

      if (this.newPassword == "" || this.password == "" || this.reNewPassword =="") {
        this.failed();
                             loading.dismiss()

      } else {
        try {
          const userData = {
            phone: this.userData.data.phone,
            oldPassword: this.password,
            newPassword: this.newPassword,
            confirmPassword: this.reNewPassword,
          };
          const token = localStorage.getItem("userToken");
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          console.log(userData);
          const res = await axios.put(
            "https://admin.aladeel-waalzain.com/api/v1/auth/updatepassword",
            userData,
            config
          );
          console.log(res.data);
          if (res.data.success) {
                             loading.dismiss()
            this.toast("top","success","تم تغيير كلمه السر بنجاح");
          } else {
                              loading.dismiss()

this.toast(
                            "top",
                            "danger",
                            "  حدث خطاء ما الرجاء التحقق من الاتصال بالانترنت"
                        );          }
        } catch (error) {
                             loading.dismiss()

          console.error(error);
this.toast(
                            "top",
                            "danger",
                            "  حدث خطاء ما الرجاء التحقق من الاتصال بالانترنت"
                        );          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }
      }
    },
    
  },
  inject: ["veirfy","toast"],
};
</script>

<style></style>
]