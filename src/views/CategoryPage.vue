<template>
  <ion-page>
    <ion-header v-if="!$store.state.loader" style="padding: 20px 10px">
      <ion-toolbar>
        <div class="flex items-center justify-between px-4">
          <h2>الاقسام</h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />

      <!-- category grid section -->
      <div class="caty py-2" v-if="!$store.state.loader">
        <div class="cartygory">
          <div class="grid grid-cols-2 gap-2 px-4">
            <router-link :to="'/tabs/SubCategory/' + special">
              <ion-card class="shadow-none text-center">
                <img
                  class="w-full h-32"
                  src="../../public/assets/special.jpeg"
                  alt=""
                />

                <h3>مناسبات</h3>
              </ion-card>
            </router-link>

            <router-link :to="'/tabs/SubCategory/' + to">
              <ion-card class="shadow-none text-center">
                <img
                  class="w-full h-32"
                  src="../../public/assets/to.jpeg"
                  alt=""
                />

                <h3>هديه الي شخص</h3>
              </ion-card>
            </router-link>

            <router-link :to="'/tabs/SubCategory/' + beauty">
              <ion-card class="shadow-none text-center">
                <img
                  class="w-full h-32"
                  src="../../public/assets/beauty.jpeg"
                  alt=""
                />

                <h3>تجميل</h3>
              </ion-card>
            </router-link>

            <router-link :to="'/tabs/SubCategory/' + gift">
              <ion-card class="shadow-none text-center">
                <img
                  class="w-full h-32"
                  src="../../public/assets/formal.jpeg"
                  alt=""
                />

                <h3>شَكّل الهديه بنفسك</h3>
              </ion-card>
            </router-link>
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
  IonHeader,
  IonCard,
  IonToolbar,
} from "@ionic/vue";

import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "CategoryPage",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonCard,
    LoadingSpinner,
    IonToolbar,
  },
  ionViewWillEnter() {
    // this.veirfy();
  },
  data() {
    return {
      gift: "formal",
      special: "special",
      to: "to",
      beauty: "beauty",
    };
  },
  created() {
    // this.veirfy();
    this.loading();
  },
  inject: ["veirfy", "loading"],
};
</script>

<style></style>
