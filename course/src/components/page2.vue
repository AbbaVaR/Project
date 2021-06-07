<template actionBarHidden="true">
<Page class="app">
<StackLayout>
<GridLayout rows="*,auto">
    <AbsoluteLayout row="0">
      <Image :src=this.$store.state.img class="image" stretch="none" top="" left="0" />
      <Label text="." class="mark" :top='this.$store.state.y' :left='this.$store.state.x' />
    </AbsoluteLayout>
    <Button class='btn' @tap='goback' row="1" text="назад"/> 
</GridLayout>
</StackLayout>
</Page> 
</template>

<script>
import App from './App';

   export default {
    methods:{
      goback: function(event){
        this.$showModal(App, {
          fullscreen: true,
        })
      }
      
    }
  }
</script>

<style>
    .app{
    background-color: #333333;
}
.message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #dfd7d7;
    }   
 .btn {
       font-size: 25;
       text-align: center;
       height: 200px;
       margin: 50px 70px;
       padding: 50px;
       border-radius: 40%;
       background-color: #cf7200;
    }  
  .mark {
    background-color: crimson;
    height: 50px;
    width: 50px;
    text-align: center;
    vertical-align: center;
    border-radius: 100%;
    border: thick double #0400ff;
    font-size: 20;
  }
  .image {
    width: 1080px; 
    height: auto;
  }
</style>
