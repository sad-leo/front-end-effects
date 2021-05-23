<template>
  <!-- 使用css + svg实现液体流特效  -->
  <div class="contair">
    <div class="loader">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 6"></span>
    </div>

    <svg>
      <filter>
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        <feColorMatrix
          values="
             1 0 0 0 0
             0 1 0 0 0
             0 0 1 0 0
             0 0 0 20 -10
            "
        />
      </filter>
    </svg>
  </div>
</template>
<style scoped>
.contair {
  min-height: 100vh;
  width: 100%;
  background: #010b10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
  position: relative;
  width: 200px;
  height: 200px;
  filter: url(#gooey);
  background: #010b10;
}
svg {
  width: 0;
  height: 0;
}
.loader span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: block;
  animation: animate 4s ease-in-out infinite;
  animation-delay: calc(0.2s * var(--i));
}
.loader span::before {
  content: "";
  position: absolute;
  top: 0;
  left: calc(50% - 20px);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 30px #03a9f4;
  background: linear-gradient(#fce4fc, #03a9f4);
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  50%,
  100% {
    transform: rotate(360deg);
  }
}
</style>