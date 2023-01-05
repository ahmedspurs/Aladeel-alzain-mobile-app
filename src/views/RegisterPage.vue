[<template>
  <ion-page>
    <ion-content>
          <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="
          flex flex-col
          items-center
          justify-center
          px-6
          py-8
          mx-auto
          h-full
          lg:py-0
        "
      >
        <a
          href="#"
          class="
            flex
            items-center
            mb-6
            text-2xl
            font-semibold
            text-gray-900
            dark:text-white
          "
        >
العديل والزين        </a>
        <div
          class="
            w-full
            bg-white
            rounded-lg
            shadow
            dark:border
            md:mt-0
            sm:max-w-md
            xl:p-0
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="
                text-xl
                font-bold
                leading-tight
                tracking-tight
                text-gray-900
                md:text-2xl
                dark:text-white
              "
            >
              انشئ حساب
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="register">
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
                  >العنوان</label
                >
                <input
                  type="text"
                  name="address"
                  v-model="address"
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
                  placeholder="Al-Ryadh"
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
                  >كلمه السر</label
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

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="
                      w-4
                      h-4
                      border border-gray-300
                      rounded
                      bg-gray-50
                      focus:ring-3 focus:ring-yellow-300
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:focus:ring-yellow-600
                      dark:ring-offset-gray-800
                    "
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                    >بتسجيلك حساب جديد فأنت تقبل الشروط والاحكام
                  </label>
                </div>
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
                تسجيل حساب جديد
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                لديك حساب بالفعل ؟
                <a
                  href="#"
                  class="
                    font-medium
                    text-yellow-600
                    hover:underline
                    dark:text-yellow-500
                  "
                  >تسجيل الدخول</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </ion-content>

  </ion-page>
</template>


<script>
import { IonPage,IonContent,loadingController } from "@ionic/vue";
import axios from "axios";
export default {
  components: { IonPage,IonContent },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      country: "",
      address: "",
      phone: "",
      role: "user",
    };
  },
  methods: {
    async register() {
      const log = {
        name: this.name,
        password: this.password,
        address: this.address,
        phone: this.phone,
        role: "user",
      };
         const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
          });

        await loading.present();
      if (
        this.name == "" ||
        this.password == "" ||
        this.address == "" ||
        this.phone == ""
      ) {
           this.toast("top","danger","  الرجاء مل كل الحقول");
            loading.dismiss()
      } else if (this.phone.toString().length < 9) {
        this.wrong("رقم الهاتف يجب ان يكون اكثر من 9 ارقام");
            loading.dismiss()

      } else {
        try {
          const res = await axios.post(
            "https://admin.aladeel-waalzain.com/api/v1/auth/register",
            log
          );
          console.log(res.data);
            loading.dismiss()

          if (res.data.success) {
            console.log("success");
            this.name = "";
            this.password = "";
            this.address = "";
            this.phone = "";
            this.toast("top", "success", "      تم تسجيل حسابك بنجاح  ");
            this.$router.push("/LoginPage");
            loading.dismiss()

          
          }
        } catch (error) {
            loading.dismiss()

         
            this.toast(
              "top",
              "danger",
              "  حدث خطاء ما الرجاء التحقق من الاتصال بالانترنت"
            );
            loading.dismiss()

          
        }
      }
      if (this.phone.toString().length < 9) {
        this.wrong("رقم الهاتف يجب ان يكون اكثر من 9 ارقام");
            loading.dismiss()

      }
            loading.dismiss()

      
      // perform async actions
    },
  },
      inject: ["toast"],

};
</script>
<style>
.vti__input{
  direction: ltr !important;
}
</style>
]