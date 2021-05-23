<template>
  <div class="part-container">
    <!-- 粒子特效 -->
    <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4"
      :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
    </vue-particles>
    <div class="text">
      FRONT END EFFECTS
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>
#particles-js {
  height: 100vh;
  width: 100vw;
  background: #51a6ea;
}
.part-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.text {
  position: absolute;
  height: 10vh;
  width: 60vw;
  text-align: center;
  line-height: 10vh;
  font-size: 50px;
  color: white;
  pointer-events: none;
}
</style>
