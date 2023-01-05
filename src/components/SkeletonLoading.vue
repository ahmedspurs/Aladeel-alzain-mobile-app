<template>
  <div class="grid grid-cols-1 gap-4 py-4" >
    <div class="p-2" :key="item" v-for="item in 2">
      <ion-skeleton-text
        class="h-12 rounded-xl"
        animated
        style="width: 100%"
      ></ion-skeleton-text>
     
    </div>
  </div>
</template>

<script>
import {IonSkeletonText} from "@ionic/vue"
export default {
  components  : {IonSkeletonText}
};
</script>

<style>
</style>