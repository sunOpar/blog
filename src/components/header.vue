<template>
  <header class="container" v-bind:class="headClass">
  <div v-if="$loadingRouteData" class="loadBar">
    <div class="progress"></div>
  </div>
  <a href="#" class="col-sm-3 col-sm-push-1 name">
    <h1 class="logo">{{name}}</h1>
    <h2 class="job">{{job}}</h2>
  </a>
  <nav class="nav">
    <ul v-bind:class="fold">
      <li role="presentation"><a href="#">{{home}}</a></li>
      <li role="presentation"><a v-link="{path:'/blog'}" >{{blog}}</a></li>
      <li role="presentation"><a v-bind:href="githubUrl" target="_blank">{{github}}</a></li>
      <li role="presentation"><a v-link="{path:'/gallery'}">{{about}}</a></li>
    </ul>
    
  </nav>
  </header>
</template>
<script>
export default {
  data () {
    return {
      homepage:'http://www.sunopar.com/sunopar',
      name:'SUNOPAR',
      job:'web前端工程师',
      home:'HOME',
      blog:'BLOG',
      github:'GITHUB',
      about:'ABOUT',
      githubUrl:'https://github.com/sunbrother',
      blogUrl:'http://www.sunopar.com',
      headClass:''
    }
  },
  ready: function(){
    var that = this;
    var originY = 0;
    window.addEventListener('scroll',function(){
      if(window.scrollY>10){
        if(window.scrollY>originY){
          originY = window.scrollY;
          that.headClass = 'hideHeader';
        }else{
          originY = window.scrollY;
          that.headClass='stackHeader';
        }
      }else{
        that.headClass='';
      }
    },false);
  },
  route:{
    data:function(transition){
      console.log('data钩子');
      console.log('loading:',transtion.$loadingRouteData);
    }
  }
}
</script>


<style lang="scss" scoped>
.nav{
  float:right;
  margin-right: 2rem;
}
.logo,.job{
    color:#fff;
}
.logo {

  margin-top: 30px;
  font-size:4rem;
  margin-bottom: 1rem;
}
.job{
  font-size:2rem;  
}
.hideHeader{
  transform:translateY(-107px);

}
.stackHeader{
    transform:translateY(0);
    background: #2a2a2a;
    -webkit-box-shadow: 0 0 10px #333;
    -moz-box-shadow: 0 0 10px #333;
    box-shadow: 0 0 10px #333;

}
.hideHeader,.stackHeader{
    .logo{
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;      
    }
    .nav li>a{
      margin-top: 0.2rem;
    }
}
.nav li>a{
  display: inline-block;
  color:#fff;
  font-size: 2rem;
  margin-top: 30px;
  margin-right:0.1rem;
  margin-bottom: 10px;
  border-radius: 0;
  &:hover,
  &:focus{
    background: none;
  }
}
@media (max-width:768px){
  .hideHeader{
    transform:translateY(-51px);
  }
  .nav{
    margin: 0;
  }
  .nav li>a{
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
    padding: 1rem 0;
  }
  .nav ul{
    margin-top: 0;
    margin-bottom: 0;
  }
  .logo{
    font-size: 2rem;
  }
  .job{
    font-size:1.2rem;  
  }
  .name{
    display: none;
  }
}
nav{
  z-index: 2;
}
nav,header{
  &:before{
    display: table;
    content: '';
  }
  &:after{
    clear: both;
  }

}
li{
  display:inline-block;
  text-decoration: none;
  margin-right: 10px;
}
header{
  color:#fff;
  position: fixed;
  z-index: 2;
  transition: all .5s linear;
}
.loadBar{
height: 1rem;
position: fixed;
left: 0;right: 0;
}
.progress{
  position: absolute;
  height: 100%;
  background-color: #0B346E;
  animation: loading 1.2s linear infinite;
}
@keyframes loading{
  0% {
    left: 0;
    right: 100%;
  }

  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}
</style>
