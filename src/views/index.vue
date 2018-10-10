<template>
	<div class="main">
		<div class="view">
			<rendCmp />
		</div>
		<div class="edit">
			<textarea v-model="code" rows="10" cols="50"></textarea>
		</div>
		<br>
		<button @click="savecode">运行</button>
		<br>
	</div>
</template>
<script>
import rendCmp from '@/components/template'
import {mapActions} from 'vuex'
export default {
  components: {
    rendCmp
  },
  data () {
    return {
      code: '',
      urls:''
    }
  },
  created(){
  	var url = this.$route.path;
		var s = url.slice(1).indexOf('/')+2;
		this.urls = url.substr(s)
  },
  mounted() {
    // console.log(this.$store)
    this.getCode({file: `${this.urls}.vue`}).then(res => {
      this.code = res.data
    }).catch(err => {
      console.error('获取失败', err)
    })
  },
  methods: {
    ...mapActions(['getCode', 'saveCode']),
    savecode () {
      this.saveCode({file: `${this.urls}.vue`, code: this.code}).then(res => {
        console.log('运行成功')
      }).catch(err => {
        console.error('运行失败', err)
      })
    }
  }
}
</script>

