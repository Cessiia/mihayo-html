<template>
  <div class="navbar">
    <ul>
      <li>
        <a href="/">首页</a>
      </li>…
    </ul>
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