<template>
    <ion-page>
        <ion-tabs >
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar class="border-t border-gray-400 bg-yellow-600">
                <!-- home page tab -->
                <ion-tab-button class="bg-yellow-600" tab="HomePage" href="/tabs/HomePage" >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                </ion-tab-button>

                <!-- search  tab -->
                <ion-tab-button class="bg-yellow-600" tab="SearchPage" href="/tabs/SearchPage">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </ion-tab-button>
                <!-- contact tab -->
                <ion-tab-button
                class="bg-yellow-600"
                    tab="ContactPage"
                    href="/tabs/ContactPage"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

                    
                </ion-tab-button>

                <!-- profile tab -->
                <ion-tab-button class="bg-yellow-600" tab="ProfilePage" @click="push()">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonPage,
    IonRouterOutlet,
} from "@ionic/vue";

export default defineComponent({
    name: "TabsPage",
    components: {
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonPage,
        IonRouterOutlet,
    },
    methods: {
        push() {
            if (localStorage.getItem("userToken")) {
                this.$router.push("/tabs/ProfilePage");
            } else if (localStorage.getItem("userToken") == null) {
                this.$router.push("/LoginPage");
            }
        },
    },
    inject: ["veirfy"],
    provide() {
        return {
            push: this.push,
        };
    },
});
</script>
