<template>
    <ion-page>
        <ion-content>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div
                    class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0"
                >
                    <a
                        href="#"
                        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        العديل والزين
                    </a>
                    <div
                        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1
                                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                            >
                              طلب منتج
                            </h1>
                            <form
                                class="space-y-4 md:space-y-6"
                                @submit.prevent="checkout"
                            >
                                <div>
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >الاسم</label
                                    >
                                    <input
                                        type="text"
                                        name="name"
                                        v-model="name"
                                        id="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                        placeholder="احد عادل"
                                    />
                                </div>

                                <!-- tel section -->

                                <div>
                                    <label
                                        for="tel"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >رقم الهاتف</label
                                    >
                                    <vue-tel-input
                                        :defaultCountry="249"
                                        :autoFormat="true"
                                        :inputOptions="{
                                            showDialCode: true,
                                        }"
                                        style="direction: ltr"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                        v-model="tel"
                                    ></vue-tel-input>
                                </div>

                                <!-- address section -->

                                <div>
                                    <label
                                        for="address"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >العنوان</label
                                    >
                                    <input
                                        type="text"
                                        name="address"
                                        v-model="address"
                                        id="address"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                        placeholder="Al-Ryadh"
                                    />
                                </div>



                                <button
                                    type="submit"
                                    class="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                >
                                    اتمام الطلب
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage,loadingController } from "@ionic/vue";
import axios from "axios";
export default {
    components: { IonPage },
    data() {
        return {
            name: "",
            address: "",
            tel: "",
            bookingDate: "",
            cart: [],
        };
    },
    mounted() {
        this.getCart();
    },

    methods: {
        async checkout() {
            const checkoutData= {
                name: this.name,
                address: this.address,
                tel: this.tel,
                role: "user",
            };
                     const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            duration: this.timeout,
          });

        await loading.present();
            if (
                this.name == "" &&
                this.email == "" &&
                this.password == "" &&
                this.country == "" &&
                this.address == "" &&
                this.tel == ""
            ) {
                this.toast(
                    "top",
                    "danger",
                    "الرجاء ملء كل الحقول"
                );
                     loading.dismiss()

            } else if (this.tel.toString().length < 9) {
   this.toast(
                    "top",
                    "danger",
                    "رقم الهاتف يجب ان يكون 13 رقما"
                );        
                     loading.dismiss()
                    } else {
                try {
                    const res = await axios.post(
                        "https://admin.aladeel-waalzain.com/api/v1/auth/register",
                        checkoutData
                    );
                    console.log(res.data);
                    if (res.data.success) {
                        this.name = "";
                        this.address = "";
                        this.tel = "";
                        this.toast(
                            "top",
                            "success",
                            "      تم  اكمال طلبك بنجاح  "
                        );
                     loading.dismiss()

                        this.$router.push("/tabs/OrderDetails");
                    } else if (
                        res.data.error == "user with this email, already exist"
                    ) {
                        this.toast(
                            "top",
                            "danger",
                            "    المستخدم موجود بالفعل  "
                        );
                     loading.dismiss()

                    }
                } catch (error) {
                   
                        this.toast(
                            "top",
                            "danger",
                            "  حدث خطاء ما الرجاء التحقق من الاتصال بالانترنت"
                        );
                     loading.dismiss()
                    
                }
            }
            if (this.tel.toString().length < 9) {
                this.wrong("رقم الهاتف يجب ان يكون اكثر من 9 ارقام");
                     loading.dismiss()

            }
            // perform async actions
        },
        getCart() {
            this.cart = this.$store.state.products.cart;
        },
    },
    inject: ["toast"],
};
</script>
<style>
.vti__input {
    direction: ltr !important;
}
</style>
