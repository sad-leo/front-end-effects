<template>
  <div class="app-container">
    <div class="left-box" v-show="leftShow">
      <div>
        相关文件/文书
        <i class="el-icon-d-arrow-left" @click="controlShowOrHide('left',false)"></i>
      </div>
      <div>asdasd</div>
    </div>
    <div class="left-box-resize" v-show="leftHide">
      <i class="el-icon-d-arrow-right" @click="controlShowOrHide('left',true)"></i>
      <span>相关文件/文书</span>
    </div>
    <div class="resize">⋮</div>
    <div class="main-box" :style="{'width': mainWidth +'%'}">main</div>
    <div class="right-resize">⋮</div>
    <div class="right-box" v-show="rightShow">
      <div>
        <i class="el-icon-d-arrow-right" @click="controlShowOrHide('right',false)"></i>
        <span>监督/落实附件</span>
      </div>
      <div>asdasd</div>
    </div>
    <div class="right-box-resize" v-show="rightHide">
      <i class="el-icon-d-arrow-left" @click="controlShowOrHide('right',true)"></i>
      <span>监督/落实附件</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "politicalLifePanel",
  data() {
    return {
      leftShow: true,
      leftHide: false,
      rightShow: true,
      rightHide: false,
      mainWidth: 80
    };
  },
  mounted() {
    this.dragControllerDiv();
    this.dragControllerDivRight();
  },
  methods: {
    controlShowOrHide(param, isShow) {
      this[param + "Show"] = isShow;
      this[param + "Hide"] = !isShow;
      if (this[param + "Show"]) {
        this.mainWidth = this.mainWidth - 10;
      } else {
        this.mainWidth = this.mainWidth + 10;
      }
    },
    dragControllerDiv: function() {
      var resize = document.getElementsByClassName("resize");
      var left = document.getElementsByClassName("left-box");
      var mid = document.getElementsByClassName("main-box");
      this.drag(resize, left, mid);
    },
    dragControllerDivRight: function() {
      var resize = document.getElementsByClassName("right-resize");
      var left = document.getElementsByClassName("main-box");
      var mid = document.getElementsByClassName("right-box");

      this.drag(resize, left, mid);
    },
    drag(resize, left, mid) {
      var box = document.getElementsByClassName("app-container");
      for (let i = 0; i < resize.length; i++) {
        // 鼠标按下事件
        resize[i].onmousedown = function(e) {
          //颜色改变提醒
          resize[i].style.background = "#818181";
          var startX = e.clientX;
          resize[i].left = resize[i].offsetLeft;
          // 鼠标拖动事件
          document.onmousemove = function(e) {
            var endX = e.clientX;
            var moveLen = resize[i].left + (endX - startX); // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
           // var maxT = box[i].clientWidth - resize[i].offsetWidth; // 容器宽度 - 左边区域的宽度 = 右边区域的宽度
            resize[i].style.left = moveLen; // 设置左侧区域的宽度
            for (let j = 0; j < left.length; j++) {
              left[j].style.width = moveLen + "px";
              mid[j].style.width = box[i].clientWidth - moveLen + "px";
            }
          };
          // 鼠标松开事件
          document.onmouseup = function() {
            //颜色恢复
            resize[i].style.background = "#fff";
            document.onmousemove = null;
            document.onmouseup = null;
            resize[i].releaseCapture && resize[i].releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
          };
          resize[i].setCapture && resize[i].setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
          return false;
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  height: calc(100vh * 0.91);
  display: flex;
  flex-flow: row nowrap;
}
.resize,
.right-resize {
  width: 5px;
  padding-top: 20%;
  text-align: center;
  cursor: col-resize;
}
.left-box {
  width: 10%;
  border: 1px solid #ccc;
  min-width: 150px;
  overflow: auto;
}
.left-box div:first-child {
  font-size: 15px;
  height: 30px;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  i {
    float: right;
  }
}
.left-box div:nth-child(2) {
  margin-top: 20px;
}
.left-box-resize,
.right-box-resize {
  width: 30px;
  font-size: 15px;
  border: 1px solid #ccc;
  padding-top: 7px;
  text-align: center;
  span {
    word-wrap: break-word;
    letter-spacing: 5px;
  }
}
i {
  margin: 3px;
  border: 1px solid #fff;
}
i:hover {
  cursor: pointer;
  border: 1px solid #ccc;
}
.main-box {
  border: 1px solid #ccc;
}
.right-box {
  width: 10%;
  border: 1px solid #ccc;
  overflow: auto;
}
.right-box div:first-child {
  font-size: 15px;
  height: 30px;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  i {
    float: left;
  }
  span {
    float: right;
  }
}
</style>