<template>
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
          <h2>تواصل معنا</h2>
          <div>
            <span class="hidden"> profile edit </span>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />
      <div class="contact" v-if="!$store.state.loader">
        <div class="contact py-4">
          <ion-card class="shadow-none">
            <ion-card-content>
                  <form class="space-y-4 md:space-y-6" @submit.prevent="send()">
              <div>
                <label
                  for="name"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >الاسم</label
                >
                <input
                  type="text"
                  name="name"
                  v-model="name"
                  id="name"
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
                  placeholder="احد عادل"
                />
              </div>


              <!-- phone section -->

              <div>
                <label
                  for="phone"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >رقم الهاتف</label
                >
                  <vue-tel-input 
                :defaultCountry="249"
                :inputOptions="{
                  showDialCode:true
                }
                  "

                  style="direction: ltr;" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900
                    sm:text-sm
                    rounded-lg
                    focus:ring-yellow-600 focus:border-yellow-600
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-yellow-500
                    dark:focus:border-yellow-500
                  " v-model="phone"></vue-tel-input>

               
              </div>
              

              <!-- address section -->

              <div>
                <label
                  for="address"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >رسالتك</label
                >
                <textarea
                  type="text"
                  name="address"
                  v-model="message"
                  id="address"
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
                  placeholder="Your Message"
                >
                </textarea>
              </div>
         
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
ارسل الرساله              </button>
           
            </form>
            </ion-card-content>
          </ion-card>
        </div>

        <!-- fab -->
        <div class="fab">
          <ion-fab horizontal="end" vertical="bottom" slot="fixed">
            <ion-fab-button color="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </ion-fab-button>
            <ion-fab-list side="start">
              <a
                class="mx-2"
                href="https://www.instagram.com/istanakado_2022/?igshid=YmMyMTA2M2Y%3D"
              >
                <ion-fab-button color="primary">
                  <ion-icon :icon="logoInstagram" />
                </ion-fab-button>
              </a>

              <a class="mx-2" href="https://wa.me/249129395102">
                <ion-fab-button color="primary">
                  <ion-icon :icon="logoWhatsapp" />
                </ion-fab-button>
              </a>
            </ion-fab-list>
          </ion-fab>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  alertController,
  toastController,
  IonCard,
  IonCardContent,
  IonFab,
  IonIcon,
  IonFabButton,
  IonFabList,
  IonToolbar,
} from "@ionic/vue";
import {
  chatbubblesOutline,
  logoInstagram,
  logoWhatsapp,
} from "ionicons/icons";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import axios from "axios";
export default {
  name: "ContactPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonIcon,
    IonCard,
    IonCardContent,
    IonFab,
    IonFabButton,
    IonFabList,
    LoadingSpinner,
    IonToolbar,
  },
  data() {
    return {
      name: "",
      phone: "",
      message: "",
      validate: true,
    };
  },
  created() {
    // this.veirfy();
    this.loading();
  },
  inject: ["veirfy", "loading"],

  methods: {
    async send() {
      if (this.name == "" || this.phone == "" || this.message == "") {
        this.failed();
      } else if (this.name != "" && this.phone != "" && this.message != "") {
        this.validate = true;

        // do phone function
        const token = localStorage.getItem("userToken");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const log = {
          name: this.name,
          phone: this.phone,
          message: this.message,
        };
        try {
          const res = await axios.post(
            "https://admin.aladeel-waalzain.com/api/v1/messages",
            log,
            config
          );
          if (res.data.success) {
            this.success();
          } else {
            this.waring();
          }
        } catch (error) {
          this.waring();
        }
        this.name = "";
        this.phone = "";
        this.message = "";
      }
    },
    async success() {
      const alert = await alertController.create({
        cssClass: "success-alert",
        message:
          ' <div class="flex flex-col justify-center items-center text-center"><div class="f-modal-icon f-modal-success animate"><span class="f-modal-line f-modal-tip animateSuccessTip"></span><span class="f-modal-line f-modal-long animateSuccessLong"></span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div> <h2 class="font-semibold"> تم استلام رسالتك </h2> <p>         سيتم الرد عليك في اسرع وقت</p></div>',
        buttons: ["تم"],
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
    async failed() {
      const toast = await toastController.create({
        message: " الرجاء ملء كل الحقول ",
        duration: 4000,
        position: "top",

        color: "danger",
      });
      return toast.present();
    },
    async waring() {
      const alert = await alertController.create({
        cssClass: "success-alert",
        message:
          ' <div class="f-modal-icon f-modal-warning scaleWarning"><span class="f-modal-body pulseWarningIns"></span><span class="f-modal-dot pulseWarningIns"></span></div></div></div><h2 class="font-semibold text-center"> حدث خطاء ما الرجاء الرجاء التحقق من الاتصال بالانترنت </h2></div>',
        buttons: ["تم"],
      });
      await alert.present();
    },
  },
  setup() {
    return {
      chatbubblesOutline,
      logoInstagram,
      logoWhatsapp,
    };
  },
};
</script>
<style scoped>
.floating-input > input::placeholder,
.floating-input > textarea::placeholder {
  color: transparent;
}

.floating-input > input:focus,
.floating-input > textarea:focus,
.floating-input > input:not(:placeholder-shown) {
  @apply pt-8;
}

.floating-input > input:focus ~ label,
.floating-input > textarea:focus ~ label,
.floating-input > input:not(:placeholder-shown) ~ label {
  @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
}
</style>
