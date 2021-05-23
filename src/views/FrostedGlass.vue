<template>
  <div>
    <!-- 毛玻璃特效 -->
    <section>
      <h2>Frosted Glass</h2>
      <div class="glass"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FrostedGlass',
  data() {
    return {}
  },
  components: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      document.addEventListener('mousemove', function (e) {
        let glass = document.querySelector('.glass')
        if (glass) {
          glass.style.left = e.offsetX + 'px'
          glass.style.top = e.offsetY + 'px'
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url('../assets/snow.png');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  h2 {
    font-size: 5em;
    color: #fff;
    pointer-events: none;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  .glass {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    width: 300px;
    height: 200px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    background: transparent;
    backdrop-filter: blur(5px);
    transition: 0.2s;
  }
}
</style>
