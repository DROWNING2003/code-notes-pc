<script setup lang="ts">
import { useStore as useLetterStore } from "@/store/letter";
const letterStore = useLetterStore();

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  close: {
    type: Function,
    default: (fun: () => any) => fun(),
  },
});
const emit = defineEmits(["update:show"]);
const afterday = ref(0)
const handleClose = () => {
  emit("update:show", false);
};

function send(){
    letterStore.send(letterStore.letter).then((res)=>{
        alert(res.msg)
    })
}

</script>

<template>
  <div v-if="show" class="dialog-mask flex-center">
    <div class="dialog-box">
      <div class="dialog-header">{{ title }}</div>
      <slot
        ><p class="dialog-content">{{ message }}</p>
        <input class="text-center" v-model="afterday"  type="number" />
      </slot>
      <div class="dialog-footer">
        <button class="button dialog-confirm" @click="letterStore.letter.date=afterday;send();close(handleClose)">
          发送!
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[number] {
  font: 14px normal normal uppercase helvetica, arial, serif;
  color: #7c7873;
  background: none;
  width: 3rem;
  height: 36px;
  padding: 0px 10px;
  margin: 0 0 10px 0;
  border: 1px solid #f8f5f1;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: inset 0px 0px 1px #726959;
  -webkit-box-shadow: inset 0px 0px 1px #b3a895;
  box-shadow: inset 0px 0px 1px #b3a895;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.dialog-box {
    display: flex;
    flex-direction: column;
  background: #fff;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
}

.dialog-header {
  padding-top: 20px;
  font-weight: bold;
  text-align: center;
}

.dialog-content {
  padding: 5px 20px 20px 20px;
  font-size: 12px;
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.dialog-footer {
  display: flex;
  overflow: hidden;
  user-select: none;
  border-top: 1px solid #ebedf0;
}

.button {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  line-height: 40px;
  background-color: #fff;
}
.button:active {
  background-color: #f2f3f5;
}
.dialog-confirm {
  color: #409eff;
}
</style>
