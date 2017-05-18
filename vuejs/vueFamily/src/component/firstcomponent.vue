<template>
<div>
<h2>我是第 1 个子页面</h2>
<div v-show="firstItem">
1+1 = 多少？
<button class="sign"  @click="secondItemfunc">下一题</button>
</div>
<div v-show="secondItem">
2+2 = 多少？
<button class="sign"  @click="thirdItemfunc">下一题</button>
</div>
<div v-show="thirdItem">
3+3 = 多少？
<button class="sign"  @click="goResult">完成</button>
</div>
</div>	
</template>
<script type="text/javascript">
export default {
    data() {
            return {
                firstItem: true,
                secondItem: false,
                thirdItem: false
            };
        },
        methods: {
            goResult: function() {
                this.$router.push("/second");
            },
            secondItemfunc: function() {
                this.firstItem = false;
                this.secondItem = true;
            },
            thirdItemfunc: function() {
                this.secondItem = false;
                this.thirdItem = true;
            }
        }
}



</script>
