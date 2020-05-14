<template>
    <div>
        test page!!
    </div>

</template>

<script>
    import { testRequest } from '../api/api';
    export default {
        data() {
            return {

            };
        },
        created () {
            this.myFunc()
        },
        methods: {
            myFunc() {
                // 调用api接口，并且提供了两个参数
                testRequest({
                    username: 'zhangsan',
                    password: '123456',
                }).then(res => {
                    // 获取数据成功后的其他操作
                    alert('1111111111')
                    console.log(res, 22222222222222)
                }).catch(
                )
            }
        }
    }
</script>

<style scoped>

</style>
