<template>
  <header class="container" v-bind:class="headClass">
  <a href="#" class="col-sm-3 col-sm-push-1"><h1 class="logo">{{name}}</h1></a>
  <nav class="nav">
    <ul v-bind:class="fold" class="nav nav-pills">
      <li role="presentation"><a href="#">{{home}}</a></li>
      <li role="presentation"><a v-link="{path:'/blog'}" >{{blog}}</a></li>
      <li role="presentation"><a v-bind:href="githubUrl" target="_blank">{{github}}</a></li>
      <li role="presentation"><a v-link="{path:'/gallery'}">{{about}}</a></li>
    </ul>
    <!-- <div class="folder">
      <button type="button">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div> -->
  </nav>
  </header>
</template>

<script>
let homeJson = require("../../data/homepage.json");
export default {
  data () {
    return {
      homepage:'http://www.sunopar.com/sunopar',
      name:'',
      home:'',
      blog:'',
      github:'',
      about:'',
      githubUrl:'https://github.com/sunbrother',
      blogUrl:'http://www.sunopar.com',
      fold:'',
      headClass:''
    }
  },
  created:function(){
    this.$http.get(homeJson)
    .then(this.successCallback)
    .catch((res)=>{
      console.log(res);
    });
  },
  methods:{
    successCallback:function(res){
      this.name = res.data.header.logo;
      [this.home,this.blog,this.github,this.about] = res.data.header.nav;
    },
    foldNav:function(){
      var nav = document.querySelector('.fold');
      if(nav){
        // nav.style.display="none";
        
      }
    }
  },
  ready: function(){
    var that = this;
    window.addEventListener('resize',function(){
      if(window.innerWidth<=960){
        that.fold = 'fold';
        that.foldNav();
      }else{
        that.fold = '';
      }
    },false);
    window.addEventListener('scroll',function(){
      if(window.scrollY>10){
        console.log(window.scrollY);
        that.headClass='stackHeader';
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
.stackHeader{
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
.icon-bar{
  border-bottom:1px solid #fff;
  margin-top:5px;
}
.nav li>a{
  display: inline-block;
  color:#fff;
  font-size: 1.5rem;
  margin-top: 30px;
  margin-right:0.5rem;
  margin-bottom: 10px;
  border-radius: 0;
  &:hover,
  &:focus{
    background: none;
    border-bottom: 3px solid #fff;
  }
}
@media (max-width:768px){
  .nav{
    margin-right:0;
    margin-top: 0;
  }
  .nav li>a{
    font-size: 1rem;
    margin-top: 1rem;
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
}
</style>
