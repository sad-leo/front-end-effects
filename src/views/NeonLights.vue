<template>
<!-- 霓虹灯特效按钮 -->
  <div>
    <a href="#">button</a>
    <a href="#">button</a>
    <a href="#">button</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
}
a {
  position: relative;
  text-decoration: none;
  padding: 10px 30px;
  margin: 40px 0;
  color: #22ebff;
  font-size: 20px;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
}

a:nth-child(1) {
  filter: hue-rotate(115deg);
}

a:nth-child(3) {
  filter: hue-rotate(270deg);
}

a:hover {
  background: #21ebff;
  color: #111;
  box-shadow: 0 0 50px #21ebff;
}

a::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  height: 10px;
  width: 10px;
  border-top: 2px solid #21ebff;
  border-left: 2px solid #21ebff;
}
a:hover::before {
  width: 100%;
  height: 100%;
}
a::after {
  content: "";
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 10px;
  width: 10px;
  border-bottom: 2px solid #21ebff;
  border-right: 2px solid #21ebff;
}
a:hover::after {
  width: 100%;
  height: 100%;
}
</style>