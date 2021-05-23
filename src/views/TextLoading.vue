<template>
 <div>
     <!-- 文字加载特效 -->
     <h2 data-text="Loadinng...">Loadinng...</h2>
 </div>
</template>

<style scoped>
 *{
     margin: 0px;
     padding: 0px;
     box-sizing: border-box;
     font-family:'Courier New', Courier, monospace;
 }
 div{
     display: flex;
     align-items: center;
     justify-content: center;
     min-height: 100vh;
     background: #252839;
 }
 h2{
     position: relative;
     font-size: 14vw;
     color: #252839;
     -webkit-text-stroke: 0.3vw #383d52;
     text-transform: uppercase;
 }
 h2::before{
     content: attr(data-text);
     position:absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     -webkit-text-stroke: 0vw #383d52;
     color: #01fe87;
     border-right: 1px solid #01fe87;
     overflow: hidden;
     animation: animate 6s linear infinite;
 }
 @keyframes animate {
     0%, 10%, 100%{
         width: 0;
     }
     70%, 90%{
         width: 100%;
     }
 }
</style>
