<template>
  <div class="menu-container">
    <a href="#" class="menu">*</a>
    <router-link v-for="item in menu" :key="item.name" :to="item.path">{{ item.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'HOME',
        },
        {
          path: '/hello',
          name: '左右拖拽',
        },
        {
          path: '/neon',
          name: '霓虹灯特效按钮',
        },
        {
          path: '/tear',
          name: '撕裂特效',
        },
        {
          path: '/liquidflow',
          name: '液体流特效',
        },
        {
          path: '/textloading',
          name: '文字加载特效',
        },
        {
          path: '/glow',
          name: '发光加载特效',
        },
        {
          path: '/frostedglass',
          name: '毛玻璃特效',
        },
      ],
    }
  },
  components: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>
.menu-container {
  position: absolute;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #fff;
  display: flex;
  flex-direction: column;
  width: 200px;
  top: 5vh;
  left: -200px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  text-align: center;
}
.menu-container:hover {
  box-shadow: 0px 0px 10px #fff;
  left: 0vh;
}

a {
  text-decoration: none;
  line-height: 30px;
  color: white;
  padding: 2px 20px;
  border-bottom: 1px solid white;
}
a:hover {
  cursor: pointer;
  background-color: rgb(85, 165, 240);
}
.menu {
  position: absolute;
  padding: 0px 6px;
  height: 100%;
  width: 10px;
  right: -23px;
  border: 1px solid white;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
}
.menu:hover {
  box-shadow: 0px 0px 10px #fff;
}
</style>
