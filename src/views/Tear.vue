<template>
  <!-- 使用clip-path 实现撕裂特效 -->
  <!-- https://www.html.cn/tool/css-clip-path/ -->
  <div class="container-clip">
    <section>
      <div class="side" id="side1"></div>
      <div class="side" id="side2"></div>
    </section>
    <div class="content-clip">
        <h2>使用CSS3的clip-path(裁剪路径)实现剪贴区域的显示以及实例实现图片渐变</h2>
        <p>clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。<br>剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。</p>
        <p>clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。<br>剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。</p>
        <p>clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。<br>剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。</p>
        <p>clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。<br>剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。</p>
        <p>clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。<br>剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。</p>
        <p>clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。<br>剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    menu() {
      let side1 = document.getElementById("side1");
      let side2 = document.getElementById("side2");
      side1.style.left = -window.pageYOffset + "px";
      side2.style.left = window.pageYOffset + "px";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-clip {
  min-height: 200vh;
}
section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  pointer-events: none;
}
section .side {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/timg.jpg");
  background-size: cover;
}
.content-clip{
    padding: 100px;
    padding-top: 100vh;
}

section .side#side1 {
  clip-path: polygon(0% 0%, 52% 0%, 34% 21%, 51% 38%, 33% 52%, 51% 68%, 33% 83%, 51% 100%, 0% 100%);
}
section .side#side2 {
  clip-path: polygon(0% 0%, 52% 0%, 34% 21%, 51% 38%, 33% 52%, 51% 68%, 33% 83%, 51% 100%, 0% 100%, 100% 100%, 100% 0%);
}
</style>