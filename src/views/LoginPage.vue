[<template>
<ion-page>
      <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
العديل والزين      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  تسجيل الدخول الي حسابك
              </h1>
              <form class="space-y-4 md:space-y-6" @submit.prevent="login()">
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
                :autoFormat="true"
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
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمه السر</label>
                      <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" >
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">تسجيل الدخول</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      ليس لديك حساب ؟<router-link to="/RegisterPage" class="font-medium text-yellow-600 hover:underline dark:text-yellow-500">انشئ حساب جديد</router-link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</ion-page>

</template>

<script>
import axios from "axios"
import { IonPage ,loadingController} from "@ionic/vue";
export default {
    components : {IonPage},
    data(){
        return {
            phone : "",
            password : ""
        }
    },
  methods: {
    async login() {
           const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            duration: this.timeout,
          });

        await loading.present();

      if (this.phone == "" || this.password == "") {
           this.toast("top","danger","  الرجاء مل كل الحقول");
                     loading.dismiss()

      } else {
        try {
          const userData = { phone: this.phone, password: this.password };
          const res = await axios.post(
            "https://admin.aladeel-waalzain.com/api/v1/auth/login",
            userData
          );
          console.log(res.data);
          if (res.data.success) {
            localStorage.setItem("userToken", res.data.token);
            this.toast("top","success","  تم تسجيل الدخول بنجاح ");
            this.$store.dispatch("getUser");
            await this.$router.push("/tabs/HomePage");
            location.reload();
                      loading.dismiss()

          } else {
            this.toast("top","danger","عفوا دث خطاء ما اعد المحاوله");
                      loading.dismiss()

          }
        } catch (error) {
            this.toast("top","danger","عفوا دث خطاء ما اعد المحاوله");
                      loading.dismiss()

          console.error(error);
          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }
      }
    },
  
  },
  inject: ["toast"],
}
</script>

<style>
</style>]