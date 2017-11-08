# README
Vue2.0写的一个简单易用的表单插件

# **Installation**
`将文件中的plugin文件夹导入自己项目的src文件中`
    
# **Usage**
##### 导入`validate`到项目中

`import myValidate from './plugin/validate'`    

##### Register component:    

`Vue.use(validate,{
  rules: {}});`

##### Then use it:
    html
	<input v-model='name' @input="validate('name')" />
    <p>{{this.validateParams.name.pass}}</p>

    js
  	validate: {
      name:{
       require:true,//必填
       strMaxLength:9, //字符串长度
       strMinLength:2,
       isString:true,//是否是字符串
      },

#### v-model的值、validate函数参数名、validate选项里对象名必须保持一致

`vm.validateParmas.选项中对象名.pass` 返回的是此选项是否通过验证  
`vm.validateParmas.allPass` 返回此表单是否全通过验证

# Options

 |Option|Description 
 |----- |---------- 
 |require|Boolean  是否是必填选项  
 |strMaxLength|Number 字符最大串长度  
 |strMinLength|Number 字符串最小长度  
 |isString| Boolean  是否是字符串   
 |isNumber| Boolean  是否是数字    
 |greaterThan| Number  数字大于  
 |lessThan| Number    数字小于  
 |custom|正则表达式 自定义规则
 
 


# Example

	<template>
	  <div>
	    <input placeholder="name" v-model='name' @input="validate('name')" />
	    <p>{{this.validateParams.name.pass}}</p>
	    <input placeholder="password" v-model="password" @input="validate('password')" />
	    <p>{{this.validateParams.password.pass}}</p>
	    <p>allPass:{{this.validateParams.allPass}}</p>
	  </div>
	</template>
	
	<script>
	  export default {
	    data() {
	      return {
	        name: "",
	        password: "",
	      }
	    },
	    validate: {
	      name: {
	        require: true, //必填
	        strMaxLength: 9, //长度
	        strMinLength: 2,
	        isString: true, //是否是字符串
	      },
	      password: {
	        isNumber: true, //是否是数字
	        greaterThan: 2, //数字大于
	        lessThan: 8, //数字小于
	        //custom:"" //自定义规则
	      },
	    }
	  }


