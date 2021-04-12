<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Date" prop="date">
        <template slot-scope="scope">
          <!-- <el-date-picker v-model="scope.row.date" type="datetime" placeholder="选择日期时间"></el-date-picker> -->
          {{fomatDate(scope.row.date)}}
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Address" prop="address"></el-table-column>
      <el-table-column label="Dscr" prop="desr"></el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog :visible.sync="showDialog">
        <el-form :model="stu" label-width="100px" style="width:350px">
          <el-form-item label="Date">
            <el-date-picker v-model="stu.date" type="datetime" placeholder="select date please"></el-date-picker>
          </el-form-item>
          <el-form-item label="Name">
            <el-input v-model="stu.name"></el-input>
          </el-form-item>
          <el-form-item label="Address">
            <el-input v-model="stu.address"></el-input>
          </el-form-item>
          <el-form-item label="Dscr">
            <el-input v-model="stu.desr"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="isShowDialog()">cancle</el-button>
          <el-button v-show="!isEdit" type="primary" @click="editStu()">submit</el-button>
          <el-button v-show="isEdit" type="primary" @click="addStu()">submit</el-button>
        </span>
      </el-dialog>
    </div>
    <div style="margin-top: 20px" align="left">
      <el-button @click="handleAdd()">Add</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      isEdit: false,
      index: 0,
      stu: {
        date: null,
        name: "",
        address: "",
        desr: ""
      },
      tableData: [
        {
          date: 1592896086587,
          name: "Jack",
          address: "杭州小冰岛 凤凰创意 国际",
          desr: "demytic style"
        },
        {
          date: 1592896086587,
          name: "Satana",
          address: "中国美院象山校区 象山艺术公社",
          desr: "demytic style"
        },
        {
          date: 1592896086587,
          name: "Jone",
          address: "白塔公园 绿皮火车",
          desr: "demytic style"
        },
        {
          date: 1592896086587,
          name: "James",
          address: "上海市普陀区金沙江路 1516 弄",
          desr: "demytic style"
        }
      ],
      search: ""
    };
  },
  methods: {
    handleAdd(index, row) {
      this.isEdit = true;
      this.stu = this.$options.data().stu;
      this.isShowDialog();
    },
    handleEdit(index, row) {
      this.isEdit = false;
      this.isShowDialog();
      this.stu = row;
      this.index = index;
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    editStu() {
      this.tableData.splice(this.index, 1, this.stu);
      this.isShowDialog();
    },
    isShowDialog() {
      this.showDialog = !this.showDialog;
    },
    addStu() {
      this.tableData.push(this.stu);
      this.isShowDialog();
      return;
    },
    queryStu() {},
    fomatDate(time) {
      var d = new Date(time);
      // return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日 '+d.getHours()+':'+d.getMinutes()+":"+d.getSeconds();
      return (
        d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日 "
      );
    }
  }
};
</script>