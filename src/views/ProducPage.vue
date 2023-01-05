
<template>
    <ion-page>
        <ion-content>
            <loading-spinner v-if="$store.state.loader" />
            <div class="booking_product" v-if="!$store.state.loader">
                <div class="img z-10 relative">
                      <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide  :key="item.id" v-for="item in product.images">

<img
                        class="w-full h-72 rounded-b-2xl"
                        :src="
                            'https://admin.aladeel-waalzain.com/uploads/' +
                            item.name
                        "
                        alt=""
                    />

    </swiper-slide>

  </swiper>
                    
                    <router-link
                        :to="'/tabs/ProductsPage/' + product.sub_section_id"
                    >
                        <button class="p-2 absolute top-3 right-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-8 w-8 text-gray-500"
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
                        </button>
                    </router-link>

           
                </div>
                <div class="bg-white py-2">
                    <div class="px-4">
                        <span class="text-xl">{{ product.name }}</span>
                        <span
                            class="text-2xl block font-semibold text-right pb-2"
                        >
                            {{
                                
                                   product.price
                                
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            }}
                            <span class="text-sm"> ج.س </span>
                        </span>
                        <span class="block"> وصف المنتج :</span>
                    </div>
                    <div class="descr px-4">
                        <p class="text-gray-600 text-sm">
                            {{ product.discr }}
                        </p>
                    </div>
                    <div
                        class="checkout flex justify-between items-center px-4 py-4"
                    >
                        <button
                            @click="addToCart(product)"
                            class="text-white bg-yellow-600 rounded-xl px-4 py-4"
                        >
                            احجز الان
                        </button>
                  
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { mapGetters } from "vuex";
import LoadingSpinner from "../components/LoadingSpinner.vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';

import axios from "axios"
export default {
    name: "ProducPage",
    components: {
        IonPage,
        IonContent,
        LoadingSpinner,
         Swiper, SwiperSlide 
    },
    data() {
        return {
            product: [],
            category: [],
            cart: {},
            loader: true,
        };
    },
    computed: mapGetters(["allCategories", "allProducts"]),
    created() {
        this.loading();

        // to get all products and categories
        this.$store.dispatch("fetchCategories");
        this.$store.dispatch("fetchProducts");

        // to filter spacifec product with ctegory
        this.getProduct();
        this.filterCategory();
        // this.veirfy();
        console.log(this.product);
    },
    inject: ["veirfy", "loading"],
    methods: {
       async addToCart(product) {
            this.cart = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0].name,
                qty: 1,
                type:product.type
            };
            this.$store.state.products.cart = this.cart

if (localStorage.getItem("userToken")) {
  if(this.cart.type == "sale"){
              this.$router.push("/tabs/CheckoutPage")
            }else{
              this.$router.push("/tabs/BookingCheckout")
            }      } else if (localStorage.getItem("userToken") == null) {
        this.$router.push("/LoginPage");
      }

          
            console.log(this.$store.state.products.cart);
            this.presentAlert();
        },
        async getProduct() {
      const id = this.$route.params.id;
      const url = ` https://admin.aladeel-waalzain.com/api/v1/products/${id}`;
      const res = await axios.get(url);
      this.product = res.data;
    
        },
        filterCategory() {
            this.category = this.allCategories.filter(
                (word) => word.id == this.product.categoryId
            );
        },
    },
};
</script>

<style></style>
