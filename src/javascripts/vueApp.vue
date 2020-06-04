<template>
  <p>{{ message }}</p>
</template>
<script>
export default {
  data: () => {
    console.log("Vue is installed");
    return {
      message: "Hey, this is Vue"
    };
  }
};
</script>

<style scoped>
p {
  color: green;
}
</style>