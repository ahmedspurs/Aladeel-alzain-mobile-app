<template>
  <ion-page>
    <ion-header v-if="!$store.state.loader">
      <ion-toolbar>
        <div class="flex items-center justify-between px-4">
          <div class="p-4">
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
          <h2>الطلبات السابقه</h2>
          <div class="flex items-center">
            <div class="p-3 hidden"></div>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />
      <div class="last-order p-4" v-if="!$store.state.loader">
        <!-- <router-link to="/tabs/LastOrder"> -->
        <div
          class="bg-white shadow p-4 rounded-xl mt-2"
          :key="item.id"
          v-for="item in userData.data.orders"
        >
          <div class="text-center flex justify-center px-4">
            <div class="grid grid-cols-2 rounded-xl w-3/4">
              <span class="text-gray-700 text-right">طلب رقم </span>
              <span class="text-yellow-600 text-right">#{{ item.id }}</span>
            </div>
          </div>

          <div class="text-center flex justify-center px-4">
            <div class="grid grid-cols-2 rounded-xl w-3/4">
              <span class="text-gray-700 text-right w-full"> السعر الكلي </span>
              <span class="text-yellow-600 text-right">
                {{ item.totalPrice }}$</span
              >
            </div>
          </div>

          <div class="text-center flex justify-center px-4">
            <div class="grid grid-cols-2 rounded-xl w-3/4">
              <span class="text-gray-700 text-right"> الحاله </span>
              <span
                class="text-yellow-600 text-right"
                v-if="item.status == 'wait'"
              >
                قيد الانتظار</span
              >
              <span
                class="text-yellow-600 text-right"
                v-if="item.status == 'process'"
              >
                قيد التنفيذ</span
              >
              <span
                class="text-yellow-600 text-right"
                v-if="item.status == 'complete'"
              >
                مكتمل
              </span>
              <span
                class="text-yellow-600 text-right"
                v-if="item.status == 'canceled'"
              >
                ملغي
              </span>
            </div>
          </div>
        </div>
        <!-- </router-link> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonToolbar } from "@ionic/vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { mapGetters } from "vuex";
export default {
  name: "LastOrders",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    LoadingSpinner,
    IonToolbar,
  },
  created() {
    this.veirfy();
    this.loading();
    this.$store.dispatch("getUser");
  },
  computed: mapGetters(["userData"]),
  inject: ["veirfy", "loading"],
};
</script>

<style></style>
