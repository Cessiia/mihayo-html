<template>
  <div>
    <el-menu
      theme="dark"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">search</el-menu-item>
      <el-menu-item index="2">article</el-menu-item>
      <el-submenu index="3">
        <template slot="title">projects</template>
        <el-menu-item index="3-1">shiny</el-menu-item>
        <el-menu-item index="3-2">learnVue</el-menu-item>
        <el-menu-item index="4-3">otherProject</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">login</el-menu-item>
      <el-menu-item index="5">resume</el-menu-item>
      <el-menu-item index="6">about</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>