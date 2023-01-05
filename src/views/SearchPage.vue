<template>
  <ion-page>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />
      <h1
        class="px-4 pt-12 font-semibold -yellow-600 text-center"
        style="font-size: 16px"
      >
        بحث عن منتج
      </h1>
      <div class="products h-full" v-if="!$store.state.loader">
        <div class="flex justify-center items-center py-8">
          <div class="flex w-3/4" dir="rtl">
            <button class="bg-white p-2 rounded-r-2xl shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              class="rounded-l-2xl w-full outline-none shadow-xl"
              placeholder="بحث"
              v-model="search"
            />
          </div>
        </div>

        <div
          class="flex h-1/2 justify-center items-center"
          v-show="filtered.length == 0 && search != ''"
        >
          <p>عفوا لاتوجد منتجات</p>
        </div>

         <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 py-8" v-show="search != ''">
          <div class="card" :key="item.id" v-for="item in filtered">
            <router-link :to="'/tabs/producPage/' + item.id">
              <div class="rounded-xl relative">
                <img
                  class="w-full h-48 rounded-xl"
                  :src="'https://admin.aladeel-waalzain.com/uploads/' + item.images[0].name"
                  alt=""
                  loading="lazy"
                />

                <div class="text-right p-4">
                  <span class="block font- text-black text-sm">
                    {{ item.name }}</span
                  >
                  <span class="text-black font-semibold block pt-2"
                    >{{
                      
                        item.price
                      
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                    <span
                      class="text-sm"
                      style="font-weight: 400; font-size: 10px"
                    >
                      ج.س
                    </span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>

          <!-- <div class="card " :key="item.id" v-for="item in filtered">
            <router-link :to="'/tabs/producPage/' + item.id" class="h-52 ">
              <div class="border border-gray-300 rounded-xl relative h-52 image">
                <img
                  class="w-full h-full rounded-xl"
                  :src="'https://admin.istanakado.com/uploads/' + item.image"
                  alt=""
                />
                  <div class="text-right py-4 px-2 absolute  bottom-0 z-10">
                  <span class="block font-semibold text-white text-sm">
                    {{ item.name }}</span
                  >
                  <span class="text-white font-semibold block pt-2 text-sm"
                    >{{
                      parseFloat(item.buyPrice) +
                      parseFloat(item.collectionPrice)
                    }}$</span
                  >
                </div>
              </div>
              
            </router-link>
          </div> -->
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { mapGetters } from "vuex";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "ProductsPage",
  components: {
    IonPage,
    IonContent,
    LoadingSpinner,
  },
  data() {
    return {
      header: "",
      products: [],
      search: "",
      filterProducts: [],
    };
  },
  computed: {
    ...mapGetters(["allCategories", "allProducts"]),
    filtered() {
      return this.allProducts.filter((item) => {
        return item.name.includes(this.search);
      });
    },
  },
  created() {
    // this.veirfy();
    this.loading();
    console.log(this.products);
  },
  inject: ["veirfy", "loading"],
};
</script>

<style></style>
