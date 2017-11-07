<template>
  <div>
    <input placeholder="name" v-model='name' @input="validate('name')" />
    <p>{{this.validateParams.name.pass}}</p>
    <input placeholder="password" v-model="password" @input="validate('password')" />
    <p>{{this.validateParams.password.pass}}</p>
    <input type="submit">
    <p>allPass:{{this.validateParams.allpass}}</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        name: "",
        password: "",
      }
    },
    validate: {
      name:{
      //  require:true,//必填
      //  strMaxLength:9, //长度
      //  strMinLength:2,
      //  isString:true,//是否是字符串
      },
      password:{
        isNumber:true,//是否是数字
        greaterThan:2,//数字大于
        lessThan:8,//数字小于
        // custom:""
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
