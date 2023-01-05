<template>
<div class="h-full flex flex-col items-center justify-center">
      <div class="loadingio-spinner-ripple-bjuqnt8alt5">
    <div class="ldio-20jqmhmufwn">
      <div></div>
      <div></div>
    </div>
  </div>
</div>

</template>

<script>
export default {};
</script>

<style>
  @keyframes
  ldio-20jqmhmufwn {
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
}
.ldio-20jqmhmufwn div {
  position: absolute;
  border-width: 4px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  animation: ldio-20jqmhmufwn 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.ldio-20jqmhmufwn div:nth-child(1) {
  border-color: #8f1111;
  animation-delay: 0s;
}
.ldio-20jqmhmufwn div:nth-child(2) {
  border-color: #c7ab0b;
  animation-delay: -0.5s;
}
.loadingio-spinner-ripple-bjuqnt8alt5 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-20jqmhmufwn {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-20jqmhmufwn div {
  box-sizing: content-box;
}
</style>