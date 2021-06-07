<template>
  <Page class = "app">
    <ActionBar title="Поиск кабинета"/>
    <GridLayout columns="5*,2*" rows="*,auto,auto,*,auto,auto">
      <Label text="кабинет:" class="message"  row="1" col="0"/>
      <Label text="корпус:" class="message" row="1" col="1"/>
      <TextField keyboardType="number" class="input" v-model="cabinet" hint="кабинет" row="2" col="0" />
      <TextField keyboardType="number" class="input" v-model="corps" hint="корпус" row="2" col="1" @returnPress='request' />
      <Button class='btn' @tap='request' row="4" col="0" text="найти"/> 
      <Button class='btn setting' @tap='setUrl' row="4" col="1" /> 
      <Button class='btn' @tap='closeApp' row="5" text="выход" colSpan="2"/> 
    </GridLayout>
  </Page>
</template>

<script>
import page2 from './page2';
import * as application from "@nativescript/core/application";
import { Http } from '@nativescript/core'

   export default {
    data() {
      return {
        url: 'http://192.168.1.50:8000/',
        cabinet: '',
        corps: '',
      }
    },
    methods:{
      search: function(event){
        this.$showModal(page2, {
          fullscreen: true,
        })
      },
      closeApp() {
        if (application.android) {
          application.android.foregroundActivity.finish();
        } else {
          exit(0);
        }
      },
      request(){
        const id = this.cabinet.slice(0,3) + this.corps.slice(0,1) 
        console.log(`Id: ${id}`)

        console.log(`Get request ${this.url + id}`)
        Http.request({
          url: this.url + id,
          method: 'get'
        }).then(
          (response) => {
            if (response.statusCode != 200){
              alert({ 
                  title: "Ошибка",
                  message: "Кабинет не найден",
                  okButtonText: "OK"})  
            }
            else{
              console.log(`Получение результата:`)
              const content = response.content.toJSON()
              this.$store.commit('changeId', content.id);
              this.$store.commit('changeX', content.x);
              this.$store.commit('changeY', content.y);
              this.$store.commit('changeImg', content.info);
              console.log(`x: ${this.$store.state.x} y: ${this.$store.state.y} 
                          id: ${this.$store.state.id} img: ${this.$store.state.img}`)
              this.search();
            }
          },
          (e) => {
            console.log(`Ошибка ${e}`);
             alert({ 
                  title: "Ошибка",
                  message: "Проверьте соединение с интернетом",
                  okButtonText: "OK"})
          }
        )
      },
      setUrl(){
        prompt({
          title: "Настройки",
          message: "Введите адрес сервера:",
          okButtonText: "ок",
          cancelButtonText: "отмена",
          defaultText: this.url,
        }).then(result => {
          console.log(`Set url: ${result.result}, url: ${result.text}`)
          this.url = result.text;
          this.correctionX();
        });
      },
    }
  }
</script>

<style>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .app{
      background-color: #333333;
    }

    .message {
        text-align: left;
        font-size: 20;
        margin-left: 30px;
    }

    .btn {
       font-size: 18;
       vertical-align: center;
       text-align: center;
       height: 160px;
       border-radius: 30%;
       background-color: #cf7200;
    }

    .input{
      background-color: #FF8C00;
      border-radius: 10%;
      color: #000000;
      margin: 50px 30px;
      text-align: center;
      vertical-align: center;
      font-size: 20;
    }

    .setting{
      background: no-repeat #c46c00 center url("~/assets/images/setting.png");
      border-radius: 40%;
    }
</style>
