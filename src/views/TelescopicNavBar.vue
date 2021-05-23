<template>
  <div class="nav-container">
    <!-- 伸缩式导航栏 -->
    <div class="navbar">
      <input type="checkbox"><span></span><span></span>
      <ul>
        <li><a href="javascript:void(0)">点赞</a></li>
        <li><a href="javascript:void(0)">投币</a></li>
        <li><a href="javascript:void(0)">收藏</a></li>
        <li><a href="javascript:void(0)">关注</a></li>
        <li><a href="javascript:void(0)">分享</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelescopicNavBar',
  data() {
    return {}
  },
  components: {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.nav-container {
  height: 100vh;
  background: linear-gradient(#99f, #f99);
}
.nav-container,
.navbar,
.navbar ul {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar {
  position: relative;
  padding: 20px;
  border-radius: 50px;
  background: #fff;
}
.navbar input {
  width: 40px;
  height: 40px;
  opacity: 0;
  cursor: pointer;
}
.navbar span {
  position: absolute;
  left: 25px;
  top: calc(50% - 10px);
  width: 30px;
  height: 4px;
  border-radius: 15px;
  background-color: #999;
  pointer-events: none;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
}
.navbar span:nth-child(3) {
  top: calc(50% + 6px);
}
.navbar ul {
  width: 0;
  overflow: hidden;
  transition: all 0.5s;
  white-space: nowrap;
  li {
    list-style: none;
    margin: 0 15px;
    a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 700;
      color: #333;
    }
  }
}
.navbar ul li a:hover {
  color: #fb7299;
}
.navbar input:checked ~ ul {
  width: 350px;
}
.navbar input:checked ~ span:nth-child(2) {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
.navbar input:checked ~ span:nth-child(3) {
  top: calc(50% - 2px);
  transform: rotate(45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
</style>
