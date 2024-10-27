<template>
  <div>
    <a class="grid-gallery" :href="photo" data-aos="fade-up">
      <img class="grid-item" :src="photo" alt="dummy" />
      <div>title</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: {
    fileName: String,
  },
  data() {
    return{
      photo: require(`@/assets/${this.fileName}`),
      photo_name: this.fileName
      //photo: require(`${this.fileName}`) //エラー
      //photo: this.fileName
    }
  },
  created(){
    //console.log(this.photo);
  }
};
</script>

<style scoped>
.grid-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  /*filter: grayscale(100%);*/
}
/*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
/* Header */
    .header-name {
        font-size: 5rem;
    }
/* Grid */
    .grid-item {
        transition: .3s;
    }
    .grid-item:hover {
        filter: grayscale(0);
        box-shadow: 0 0 2rem rgba(0, 0, 0, .5);
        transform: scale(1.1);
        z-index: 3;
        position: relative;
    }
}
</style>

