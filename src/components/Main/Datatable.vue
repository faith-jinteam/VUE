<template>
  <div id="myDatatable">
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="id" label="序" width="40"></el-table-column>
      <el-table-column prop="basestation" label="基站编码" ></el-table-column>
      <el-table-column prop="trafficCurrent" label="当前小时流量"></el-table-column>
      <el-table-column prop="traffic1h" label="预测第1小时"></el-table-column>
      <el-table-column prop="traffic2h" label="预测第2小时"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Datatable',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.submitData()
  },
  methods: {
    submitData () {
      let self = this
      this.$ajax({
        methods: 'get',
        url: 'http://129.204.33.35:8080/bt-server/tp/selectByFy?pageSize=20&pageNumber=1'
      }).then(function (res) {
        if (res.status === 200 && res.data) {
          self.tableData = res.data.rows
        }
      }).catch(function (error) {
        alert(error)
      })
    }
  }
}
</script>
