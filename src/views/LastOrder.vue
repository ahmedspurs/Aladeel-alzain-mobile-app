<template>
  <ion-page>
    <!-- HEADER -->
    <ion-header v-if="!$store.state.loader">
      <div class="flex items-center justify-between px-4 py-2">
        <div class="p-4">
          <router-link to="/tabs/LastOrders">
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
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            class="w-12 rounded-full mt-2 mx-2"
          />
        </div>
      </div>
    </ion-header>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />
      <div class="orderlast" v-if="!$store.state.loader">
        <!-- order status -->
        <div class="px-4 flex justify-between items-center">
          <h2 class="font-semibold">حاله الطلب</h2>
          <h2 class="font-semibold text-yellow-500">قيد التنفيذ</h2>
        </div>
        <!-- order date -->
        <div class="px-4 flex justify-between items-center">
          <h2 class="font-semibold">تاريخ الطلب</h2>
          <h2>{{ allOrders[10].createdAt }}</h2>
        </div>
        <div class="cart px-4 py-2">
          <h2>تفاصيل الطلب</h2>

          <div :key="item.id" v-for="item in allProducts">
            <div
              :key="item1.id"
              v-for="item1 in allOrders[0].cart"
              class="flex justify-between items-center"
            >
              <div class="w-3/4" v-if="item.id == item1.productId">
                <img
                  class="w-24 h-24"
                  src="https://almrj3.com/wp-content/uploads/2021/11/%D8%A7%D9%81%D9%83%D8%A7%D8%B1-%D9%87%D8%AF%D8%A7%D9%8A%D8%A7-%D9%84%D9%84%D8%A7%D9%88%D9%84%D8%A7%D8%AF-%D8%A7%D9%84%D8%B5%D8%BA%D8%A7%D8%B1.jpg"
                  alt=""
                />
              </div>
              <div class="w-full" v-if="item.id == item1.productId">
                <h2 class="block">{{ item.name }}</h2>
                <div class="flex justify-between">
                  <span class="text-yellow-500 font-semibold block text-xl pb-2"
                    >125.99$</span
                  >
                  <span class="block text-xl">الكميه : {{ item.qty }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- total price section -->

        <div class="total-price">
          <ion-card>
            <ion-card-content>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <b>ملخص الطبيه</b>
                </ion-text>
                <ion-text color="dark">
                  <b>3 منتجات</b>
                </ion-text>
              </div>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <span>رسوم التوصيل</span>
                </ion-text>
                <ion-text color="dark">
                  <span>50$</span>
                </ion-text>
              </div>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <span>المجموع الكلي</span>
                </ion-text>
                <ion-text color="dark">
                  <span>550.99$</span>
                </ion-text>
              </div>
            </ion-card-content>
          </ion-card>
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
  IonText,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { mapGetters } from "vuex";
export default {
  name: "LastOrder",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonText,
    IonCard,
    IonCardContent,
    LoadingSpinner,
  },
  data() {
    return {
      cart: [],
    };
  },

  created() {
    this.veirfy();
    this.loading();
  },
  afterMounted() {
    this.filterCart();
  },
  computed: {
    ...mapGetters(["allOrders", "allProducts"]),
  },

  inject: ["veirfy", "loading"],
  methods: {
    filterCart() {
      this.allProducts.forEach((item) => {
        this.allOrders[10].cart.forEach((carte) => {
          if (item.id == carte.productId) {
            this.cart.push({
              name: item.name,
              image: item.image,
              qty: carte.qty,
              price: item.buy_price * carte.qty,
            });
            console.log("done");
          } else {
            console.log("not done");
          }
        });
      });
    },
  },
};
</script>

<style>
</style>