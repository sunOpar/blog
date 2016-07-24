<template>
  <header class="cointainer">
  <a href="#"><h1 class="logo col-sm-7 col-sm-offset-1">{{name}}</h1></a>
  <nav>
    <ul v-bind:class="fold" class="nav nav-pills col-sm-4">
      <li role="presentation"><a href="#">{{home}}</a></li>
      <li role="presentation"><a v-link="{path:'/blog'}" >{{blog}}</a></li>
      <li role="presentation"><a v-bind:href="githubUrl" target="_blank">{{github}}</a></li>
      <li role="presentation"><a v-link="{path:'/gallery'}">{{about}}</a></li>
    </ul>
    <div class="folder">
      <button type="button">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
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
      fold:''
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
        nav.style.display="none";

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$minHeader:1020px;
$oneMaxWidth:1529px;
$twoMaxWidth:1400px;
$threeMaxWidth:1190px;
h1 {
  color:#fff;
  margin-top: 30px;
  font-size:50px;
}
.icon-bar{
  border-bottom:1px solid #fff;
  margin-top:5px;
}
.nav li>a{
  color:#fff;
  font-size: 26px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 0;
  &:hover,
  &:focus{
    background: none;
    border-bottom: 3px solid #fff;
  }
}
@media(max-width:$oneMaxWidth){
  h1{
    font-size:40px;

  }
  .nav li>a{
    font-size:23px;
  }
}
.folder{
  display:none;
}
@media(max-width:$twoMaxWidth){
  h1{
    font-size:35px;

  }
  .nav li>a{
    font-size:18px;
  }
}
@media(max-width:$threeMaxWidth){
  h1{
    font-size:30px;

  }
  .nav li>a{
    font-size:14px;
  }
}
header{

}
nav{
  z-index: 2;
}
</style>
