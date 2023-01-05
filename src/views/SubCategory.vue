<template>
  <ion-page>
    <ion-header class="subCat sub" v-if="!$store.state.loader">
      <ion-toolbar>
        <div class="flex items-center justify-between px-4 py-2">
          <div class="px-4">
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
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <loading-spinner v-if="$store.state.loader" />

      <div class="caty -mt-2 min-h-screen" v-if="!$store.state.loader">
        <skeleton-loading :key="item" v-for="item in 2" v-show="catStatus" />
        <div class="cartygory w-full pr-3" >
          <div
            class="flex h-screen justify-center items-center"
            v-show="filtered.length == 0"
          >
            <p>عفوا لاتوجد اقسام</p>
          </div>
          <div class="w-full ml-2" v-show="filtered.length > 0">
            <div>
              <router-link
                :to="'/tabs/ProductsPage/' + category.id"
                class="text-center ml-4 m-0 h-0 p-0 inline"
                style="margin: 0; padding: 0; height: 0; dispaly: inline"
                :key="category.id"
                v-for="category in filtered"
              >
                <div class="flex p-4 m-0 shadow rounded-xl w-full">
                  <img
                    class="w-6 h-6"
                    :src="
                      'https://admin.aladeel-waalzain.com/uploads/' + category.image
                    "
                    alt=""
                    loading="lazy"
                  />
                  <span class="px-6 text-black"> {{ category.name }} </span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonToolbar } from "@ionic/vue";

import { mapGetters } from "vuex";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import SkeletonLoading from "../components/SkeletonLoading.vue";

export default {
  name: "CategoryPage",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    LoadingSpinner,
    SkeletonLoading,
    IonToolbar,
  },
  data() {
    return {
      search: "",
      categories: [],
      head: "",
    };
  },
  computed: {
    ...mapGetters(["allSubCategories", "catStatus"]),

    filtered() {
      let self = this;
      return this.allSubCategories.filter(
        (item) => item.categoryId == self.$route.params.id
      );
    },
  },
  created() {
    // let self = this;
    // if (this.$store.state.categories.length <= 0) {
    //   setInterval(async () => {
    //     this.$store.dispatch("fetchSubCategories");
    //     if (self.catStatus) return clearInterval();
    //   }, 5000);
    // }

    // this.veirfy();
    console.log(this.allSubCategories);
    this.loading();
  },
  inject: ["veirfy", "loading"],
};
</script>

<style></style>
