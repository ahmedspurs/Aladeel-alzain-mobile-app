<template>
  <ion-page>
    <ion-header v-if="!$store.state.loader">
      <ion-toolbar>
        <div class="flex items-center justify-between px-4">
          <div class="py-4">
            <router-link to="/tabs/HomePage">
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
          <h2>تفاصيل الطلب</h2>
          <div class="flex items-center">
            <div class="hidden"></div>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />
      <div class="orderdetails" v-if="!$store.state.loader">
        <div class="flex flex-col items-center justify-center">
          <!-- <h2>نجاح</h2> -->
          <div class="f-modal-icon f-modal-success animate">
            <span class="f-modal-line f-modal-tip animateSuccessTip"></span>
            <span class="f-modal-line f-modal-long animateSuccessLong"></span>
            <div class="f-modal-placeholder"></div>
            <div class="f-modal-fix"></div>
          </div>

          <h2>تم استلام طلبك بنجاح</h2>
        </div>
        <div class="cart p-4">
          <h2 class="py-4">تفاصيل الطلب</h2>
          <div
            class="flex justify-between items-center"
       
          >
            <div class="w-3/4">
              <img
                class="w-24 h-24"
                :src="'https://admin.aladeel-waalzain.com/uploads/' + $store.state.products.cart.image"
                alt=""
              />
            </div>
            <div class="w-full">
              <h2 class="block">{{ $store.state.products.cart.name }}</h2>
            </div>
          </div>
        </div>

        <!-- total price section -->

        <!-- continue shopping -->
        <div class="checkout p-2 pb-24 text-center">
          <router-link to="/tabs/HomePage">
            <ion-button> الاستمرار بالتسوق </ion-button>
          </router-link>
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
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "OrderDetails",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonButton,
    LoadingSpinner,
  },

  created() {
    this.veirfy();
    this.loading();
  },
  inject: ["veirfy", "loading"],
};
</script>

<style></style>
