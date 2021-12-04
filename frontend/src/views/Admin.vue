<template>
  <div>
    <b-container 
      class="p-3 body">
      <b-row>
        <b-col cols=8>
        <b-card class="text-center">
            <div v-for="item in working" v-bind:key="item.title" class="module-info">
              <b-spinner v-if="item.active == 1" variant="success" small></b-spinner>
              <b-icon v-if="item.active==0" icon="exclamation-circle"></b-icon>
              <b-icon v-if="item.active==2" color='red' icon="exclamation-circle"></b-icon>
              <span>{{item.title}}</span>
              <span>{{item.active}}</span>
            </div>
        </b-card>
        </b-col>
        <b-col cols=4>
        <b-button size="sm" variant="outline-secondary" v-on:click="checkFunction()"
          >MODULE CHECK</b-button>
        </b-col>
      </b-row>
      <b-row>
        <p></p>
      </b-row>
      <b-row>
        <b-col>
          <b-form-select
            :plain="true"
            v-model="selected" :options="options"
            ></b-form-select>
        </b-col>
        <b-col>
          <b-button size="sm" variant="outline-secondary"
              v-on:click="restartFunction()">RESTART</b-button>
          &nbsp;
          <b-button size="sm" variant="outline-secondary"
              v-on:click="stopFunction()">STOP</b-button>
        </b-col>
      </b-row>
      <b-row>
        <p></p>
      </b-row>
      <b-row>
        <b-col>
         <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            v-model="console_selected"
            :options="console_options"
            :aria-describedby="ariaDescribedby"
            name="plain-inline"
            plain
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
        <b-col>
          <b-btn size="sm" variant="outline-secondary" v-on:click="log_check()">GET LOG BUTTON</b-btn>
        </b-col>
      </b-row>
      <b-row>
        <p></p>
      <b-card bg-variant="dark" text-variant="white">
        <b-card-text v-html="logFile">
        </b-card-text>
      </b-card>
      </b-row>
    </b-container>
    <div v-bind:style="up_btn_style">
       <b-button
        bottom right fixed v-on:click="scroll_up()"><b-icon icon='arrow-up-square'></b-icon></b-button><br>
      <b-button
        bottom right fixed v-on:click="scroll_down()"><b-icon icon='arrow-down-circle'></b-icon></b-button>
    </div>
  </div>
</template>

<script>
import {restartModule, stopModule, checkModule, getLog} from '../api/setting'

export default {
  data() {
    return {
      modbus_working:0,
      bacnet_working:0,
      database_working:0,
      batch_working:0,
      working:[
        {title:"modbus", active:0},
        {title:"bacnet", active:0},
        {title:"database", active:0},
        {title:"batch", active:0},
      ],
      module_check: "",
      logFile: "Click check button",
      moduleSelected:"modbus",
      selected: "modbus",
      options: [
          { value: "modbus", text: 'Modbus Module' },
          { value: 'bacnet', text: 'Bacnet Module' },
          { value: 'database', text: 'Database Module' },
          { value: 'batch', text: 'Batch Module' },
        ],
      console_selected: "output",
      console_options:[
        { value: "out", text:"output"},
        { value: "err", text:"error"}
      ],
      up_btn_style:{
        position:"fixed",
        bottom:"10px",
        right:"10px",
      }
    };
  },
  components: {
  },
  methods: {
    async restartFunction(){
      try{
        const res = await restartModule(this.selected)
        if(res.data.success){
          console.log("success")
          setTimeout(() => { // 5초 뒤에 모듈의 상태를 체크한다.
            this.checkFunction()
          }, 5000);
        }else{
          console.log("fail")
        }
      }catch(err){
        console.log(err)
        console.log("error")
      }
    },
    async stopFunction(){
      try{
        const res = await stopModule(this.selected)
        if(res.data.success){
          console.log("success")
          setTimeout(() => { // 5초 뒤에 모듈의 상태를 체크한다.
            this.checkFunction()
          }, 5000);
        }else{
          console.log("fail")
        }
      }catch(err){
        console.log(err)
        console.log("error")
      }
    },
    async checkFunction(){
      try{
        const res = await checkModule()
        if(res.data.success){
          const statusinfo = res.data.checklist
          this.working.forEach(item => {
            if( statusinfo[item.title] == "online" )
              item.active = 1;
            else if(statusinfo[item.title] == "stopped")
              item.active = 2;
            else
              item.active = 0;
          });
        }else{
          console.log("fail")
        }
      }catch(err){
        console.log(err)
        console.log('error')
      }
    },
    async log_check(){
      try{
        const res = await getLog(this.selected, this.console_selected)
        if(res.data.success){
          console.log("success")
          this.logFile = res.data.logData.replace(/\n/g, '<br />');
        }
        else{
          console.log("fail")
        }
      }catch(err){
        console.log(err)
          console.log("error")
      }
    },
    scroll_up(){
      window.scrollTo(0,0)
    },
    scroll_down(){
      var container = this.$el.querySelector(".container");
      window.scrollTo(0,container.scrollHeight);
    },
  }
}
</script>
<style>
.body{
  width: 50px;
}
.module-info{
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}
</style>