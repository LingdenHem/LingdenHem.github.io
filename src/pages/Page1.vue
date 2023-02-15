<template>
    <div>
      <cat-facts :limit="10" :characterLimit="200" />
    </div>
  </template>
  
<script>
export default {
    data() {
        return {
            selectedFact: ''
        };
    }
};
</script>
  