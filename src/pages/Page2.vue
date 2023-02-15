<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
    <img v-bind:src="image" class="image"/>
    <br />
    <label class="input-label">Change the title:</label>
    <input v-model="title" class="input"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pics',
      description: 'pictures',
      image: 'https://picsum.photos/200/299',
      images: [
        'https://picsum.photos/200/299',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/301',
        'https://picsum.photos/200/302',
        'https://picsum.photos/200/303'
      ],
      currentImageIndex: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.image = this.images[this.currentImageIndex];
    }, 2000);
  }
}
</script>

<style lang="scss">
.title {
  font-size: 24px;
  font-weight: bold;
  color: green;
  text-align: center;
}

.description {
  font-size: 18px;
  color: gray;
  text-align: center;
}

.image {
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 300px;
}

.input-label {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: gray;
}

.input {
  display: block;
  margin: 0 auto;
  width: 60%;
  padding: 10px;
  font-size: 18px;
}
</style>
