<template>
    <div>
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content">
                <div ref="chart1" style="width:100%;height:206px"></div>
            </div>
        </el-col>
        <el-col :span="6"><div class="">    <div ref="chart2" style="width:100%;height:206px"></div>     </div></el-col>
        <el-col :span="6"><div class="grid-content ">     <div ref="chart3" style="width:100%;height:206px"></div>   </div></el-col>
        <el-col :span="6"><div class="grid-content">     <div ref="chart4" style="width:100%;height:206px"></div>  </div></el-col>
    </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                option: {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 120, 150, 160, 300, 230, 130],
                        type: 'line',
                        areaStyle: {}
                    }]
                },
                option2: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(220, 220, 220, 0.8)'
                        }
                    }]
                },
                option3: {
                    angleAxis: {
                    },
                    radiusAxis: {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四'],
                        z: 10
                    },
                    polar: {
                    },
                    series: [{
                        type: 'bar',
                        data: [1, 2, 3, 4],
                        coordinateSystem: 'polar',
                        name: 'A',
                        stack: 'a'
                    }, {
                        type: 'bar',
                        data: [2, 4, 6, 8],
                        coordinateSystem: 'polar',
                        name: 'B',
                        stack: 'a'
                    }, {
                        type: 'bar',
                        data: [1, 2, 3, 4],
                        coordinateSystem: 'polar',
                        name: 'C',
                        stack: 'a'
                    }],
                    legend: {
                        show: true,
                        data: ['A', 'B', 'C']
                    }
                },
                option4: {
                    angleAxis: {
                    },
                    radiusAxis: {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四'],
                        z: 10
                    },
                    polar: {
                    },
                    series: [{
                        type: 'bar',
                        data: [1, 2, 3, 4],
                        coordinateSystem: 'polar',
                        name: 'A',
                        stack: 'a'
                    }, {
                        type: 'bar',
                        data: [2, 4, 6, 8],
                        coordinateSystem: 'polar',
                        name: 'B',
                        stack: 'a'
                    }, {
                        type: 'bar',
                        data: [1, 2, 3, 4],
                        coordinateSystem: 'polar',
                        name: 'C',
                        stack: 'a'
                    }],
                    legend: {
                        show: true,
                        data: ['A', 'B', 'C']
                    }
                }
            }
        },
        mounted(){
            this.getEchartData1(this.$refs.chart1,this.option)
            this.getEchartData1(this.$refs.chart2,this.option2)
            this.getEchartData1(this.$refs.chart3,this.option3)
            this.getEchartData1(this.$refs.chart4,this.option4)
        },
        methods: {
            getEchartData1 (charts,option) {
                const chart1 = charts
                if (chart1) {
                    const myChart = this.$echarts.init(
                        chart1
                    );
                    myChart.setOption(option);
                    window.addEventListener("resize", function () {
                        myChart.resize();
                    });
                }
            }
        }
    }
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
/*&:last-child {*/
/*     margin-bottom: 0;*/
/* }*/
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>