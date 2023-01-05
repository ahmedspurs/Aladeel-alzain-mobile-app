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
                    <h2 class="text-center">تعديل الملف الشخصي</h2>
                    <div>
                        <span class="hidden"> profile edit </span>
                    </div>
                </div>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <!-- inputs -->
            <loading-spinner v-if="$store.state.loader" />
            <div class="contact pb-8" v-if="!$store.state.loader">
                <section class="bg-gray-50 dark:bg-gray-900">
                    <div
                        class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0"
                    >
                        <div
                            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <form
                                    class="space-y-4 md:space-y-6"
                                    @submit.prevent="
                                        updateUser(userData.data.id)
                                    "
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
                                            v-model="userData.data.name"
                                            id="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                            placeholder="احد عادل"
                                        />
                                    </div>

                                    <!-- phone section -->

                                    <div>
                                        <label
                                            for="phone"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >رقم الهاتف</label
                                        >
                                        <vue-tel-input
                                            :defaultCountry="249"
                                            :inputOptions="{
                                                showDialCode: true,
                                            }"
                                            style="direction: ltr"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                            v-model="userData.data.phone"
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
                                            v-model="userData.data.address"
                                            id="address"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                            placeholder="Al-Ryadh"
                                        />
                                    </div>

                                
                                    <button
                                        type="submit"
                                        class="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                    >
                                        تعديل الملف الشخصي
                                    </button>
                                    <p
                                        class="text-sm font-light text-gray-500 dark:text-gray-400"
                                    >
                                        <router-link
                                            to="/tabs/ChangePassword"
                                            class="font-medium text-yellow-600 hover:underline dark:text-yellow-500 فext-center"
                                        >
                                            تعديل كلمه السر</router-link
                                        >
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    alertController,
    loadingController,
} from "@ionic/vue";
import { mapGetters } from "vuex";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
    name: "EditProfile",
    components: {
        IonPage,
        IonHeader,
        IonContent,

        IonToolbar,
        LoadingSpinner,
    },
    data() {
        return {
            err: false,
            alert: false,
            email: "",
        };
    },
    setup() {
        return { v$: useVuelidate() };
    },
    created() {
        // this.veirfy();
        this.push();
        this.loading();
        this.$store.dispatch("getUser");
    },
    validations() {
        return {
            email: { required, email }, // Matches this.contact.email
        };
    },

    computed: mapGetters(["userData", "updateMessage"]),
    inject: ["veirfy", "loading"],
    methods: {
        push() {
            if (localStorage.getItem("userToken")) {
                this.$router.push("/tabs/EditProfile");
            } else if (localStorage.getItem("userToken") == null) {
                this.$router.push("/LoginPage");
            }
        },
        async updateUser(id) {
            const loading = await loadingController.create({
                cssClass: "my-custom-class",
                duration: this.timeout,
            });

            await loading.present();

            const user = {
                userName: this.userData.data.name,
                tel: this.userData.data.phone,
                address: this.userData.data.address,
            };
            const updateData = {
                id: id,
                user: user,
            };
            try {
                this.regLoad = true;
                // notify user form is invalid
                if (this.userData.data.phone.length < 9) {
                    this.failed2(
                        "رقم الهاتف يجب ان يحتوي علي 9 ارقام علي الاقل"
                    );
                    loading.dismiss();
                } else {
                    await this.$store.dispatch("updateUser", updateData);
                    if (this.updateMessage) {
                        loading.dismiss();

                        this.success();
                        console.log(this.updateMessage);
                    } else {
                        loading.dismiss();

                        this.failed();
                    }
                }
            } catch (err) {
                loading.dismiss();

                this.waring();
            }
            loading.dismiss();
        },
        async success() {
            const alert = await alertController.create({
                cssClass: "success-alert",
                message:
                    ' <div class="flex flex-col justify-center items-center text-center"><div class="f-modal-icon f-modal-success animate"><span class="f-modal-line f-modal-tip animateSuccessTip"></span><span class="f-modal-line f-modal-long animateSuccessLong"></span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div> <h2 class="font-semibold"> تم تعديل الملف الشخصي بنجاح   </h2></div>',
                buttons: ["تم"],
            });
            await alert.present();
            const { role } = await alert.onDidDismiss();
            this.$router.push("/tabs/ProfilePage");
            console.log(role);
        },
        async failed() {
            const alert = await alertController.create({
                cssClass: "success-alert",
                message:
                    ' <div class="flex flex-col justify-center items-center text-center"><div class="f-modal-icon f-modal-error animate"><span class="f-modal-x-mark"> <span class="f-modal-line f-modal-left animateXLeft"></span><span class="f-modal-line f-modal-right animateXRight"></span> </span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div><h2 class="font-semibold"> حدث خطاء ما الرجاء اعادة المحاوله   </h2></div>',
                buttons: ["تم"],
            });
            await alert.present();
            const { role } = await alert.onDidDismiss();
            console.log(role);
        },
        async failed2(x) {
            const alert = await alertController.create({
                cssClass: "success-alert",
                message:
                    ' <div class="flex flex-col justify-center items-center text-center"><div class="f-modal-icon f-modal-error animate"><span class="f-modal-x-mark"> <span class="f-modal-line f-modal-left animateXLeft"></span><span class="f-modal-line f-modal-right animateXRight"></span> </span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div><h2 class="font-semibold"> ' +
                    x +
                    "</h2></div>",
                buttons: ["تم"],
            });
            await alert.present();
            const { role } = await alert.onDidDismiss();
            console.log(role);
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
};
</script>
<style>
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
