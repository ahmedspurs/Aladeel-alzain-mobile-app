<template>
  <ion-page>
    <!-- HEADER -->
    <ion-header class="header" v-if="!$store.state.loader">
      <ion-toolbar>
        <div class="flex items-center justify-between px-4 py-2">
        
          <h2
            class="header"
            style="font-weight: 300; font-size: 20px !important"
          >
            العديل والزين
          </h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <loading-spinner v-if="$store.state.loader" />

      <div class="bg-gray">
        <h1
          class="p-4 font-semibold -yellow-600 text-center"
          style="font-size: 16px"
        >
          الاقسام
        </h1>
        <!-- {{allCategories}} -->



        <!-- category grid section -->
        <div class="caty  grid grid-cols-4" v-if="!$store.state.loader">
          <div class="px-2" v-for="item in allCategories" :key="item.id">
            <router-link
              :to="'/tabs/SubCategory/' + item.id"
              class="text-center px-4"
            >
              <div class="flex flex-col justify-center items-center   rounded-xl px-4 w-full   mx-auto">
                <div class="flex items-center justify-center bg-yellow-600 w-16 h-16 rounded-full">
             <img :src="`https://admin.aladeel-waalzain.com/uploads/${item.image}`" class="w-8 h-8" alt="">

                </div>
                <span class="px-6 text-black my-2"> {{item.name}} </span>
              </div>
            </router-link>
          </div>

        
             
             
        </div>

        <!-- marketing section -->

        <!-- <div class="p-4 marketing" v-if="ads.length != 0">
          <div class="grid grid-cols-2 px-2 py-4 rounded-xl shadow">
            <div class="i w-full">
              <img
                :src="'https://admin.istanakado.com/uploads/' + ads[0].image"
                class="w-full h-32"
                alt=""
              />
            </div>
            <div class="text-white text-center content w-full">
              <h3
                class="text-black text-2xl font-semibold"
                style="font-size: 16px"
              >
                {{ ads[0].label }}
              </h3>
              <p class="text-black py-2" style="font-size: 14px">
                {{ ads[0].discr }}
              </p>

              external link
              <a :href="ads[0].productLink" v-if="ads[0].type == 'external'">
                <button class="bg-yellow-500 text-white p-4 rounded mb-2">
                  {{ ads[0].content }}
                </button>
              </a>

              internal link
              <router-link
                :to="'/tabs/producPage/' + ads[0].productId"
                v-if="ads[0].type == 'product'"
              >
                <button class="bg-yellow-500 text-white p-4 rounded mb-2">
                  {{ ads[0].content }}
                </button>
              </router-link>
            </div>
          </div>
        </div> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
} from "@ionic/vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { mapGetters } from "vuex";


export default {
  name: "CategoryPage",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    LoadingSpinner,
    IonRefresher,
    IonRefresherContent,
    IonToolbar,
  },

  data() {
    return {
      gift: "formal",
      special: "special",
      to: "to",
      beauty: "beauty",
      search: "",
    };
  },
  computed: {
    ...mapGetters(["allCategories"]),
    // ads() {
    //   return this.allAds.filter((ad) => ad.status == true);
    // },
  },
  
  setup() {
    const doRefresh = (event) => {
      location.reload();

      setTimeout(() => {
        console.log("Async operation has ended");
        event.target.complete();
      }, 2000);
    };
    return { doRefresh };
  },
  created() {
    
    this.loading();
  },
  inject: ["veirfy", "loading","loader","alertShow"],
};
</script>

<style></style>
