<template>
  <header class="container" v-bind:class="headClass">
  <a href="#" class="col-sm-3 col-sm-push-1"><h1 class="logo">{{name}}</h1></a>
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
          console.log('originY:',originY);
          that.headClass = 'hideHeader';
        }else{
          originY = window.scrollY;
          that.headClass='stackHeader';
        }
      }else{
        that.headClass='';
      }
    },false);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav{
  float:right;
  margin-right: 2rem;
}
.logo {
  color:#fff;
  margin-top: 30px;
  font-size:3rem;
}
.hideHeader{
  transform:translateY(-107px);
  .logo{
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;      
    }
    .nav li>a{
      margin-top: 0.2rem;
    }
}
.stackHeader{
    transform:translateY(0);
    background: #2a2a2a;
    -webkit-box-shadow: 0 0 10px #333;
    -moz-box-shadow: 0 0 10px #333;
    box-shadow: 0 0 10px #333;
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
  font-size: 1.5rem;
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
    font-size: 1rem;
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
    display: none;
  }
}
nav{
  z-index: 2;
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

header:after{
  clear:none;
}
header{
  position: fixed;
  z-index: 2;
  transition: all .5s linear;
}
</style>
