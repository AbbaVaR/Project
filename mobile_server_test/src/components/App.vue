<template>
    <Page>
        <ActionBar title="Testing Server"/>
        <StackLayout>
          <Button text="Button" @tap="get" />
          <Label :text="id" />
          <Label :text="x" />
          <Label :text="y" />
          <Label :text="info" />
        </StackLayout>
    </Page>
</template>

<script >
import { Http, HttpResponse } from '@nativescript/core'

  export default {
    data() {
      return {
        url: 'http://192.168.1.50:8000/',
        input: '9999', //то что вводит пользователь на данный момент для теста: 9999 и 9998
        id: '',  //номер кабинета получаемый от сервера
        x: '',   //кордината х
        y: '',   //кордината у
        info: '',//ноформация о корпусе и этаже
      }
    },
     methods: {
      get(){
        console.log(`Работаю ${this.url + this.input}`)
        Http.request({
          url: this.url + this.input,
          method: 'get'
        }).then(
          (response) => {
            console.log(`Тут работаю`)
            const content = response.content.toJSON()
            this.id = content.id
            this.x = content.x
            this.y = content.y
            this.info = content.info
            console.log(content)
          },
          e => {console.log(e)}
        )
      }
      }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
