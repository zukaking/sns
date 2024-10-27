<template>
  <div class="container-wrapper">
    <header-view/>
    <main  class="grid" :style="gridRows">
      <button class="btn btn-primary" v-on:click="call">call</button>
      <photo-item  v-for="(photo, i) in photos" :key="i" :file-name="photo"/>
    </main>
    <footer-view/>
  </div>
</template>

<script>
import PhotoItem from "@/components/PhotoItem.vue";
import HeaderView from "@/components/HeaderView.vue";
import FooterView from '@/components/FooterView.vue';
import auth from '@/api/auth'

export default {
  name: "TopView",
  data() {
    return {
      user: '',
      photos: [],
      vals: {
        color: 'red'
      },
      gridRows: {
        gridTemplateRows: 'repeat(auto-fit, 46vw)'   
      },
      msg: 'hello'  
    }
  },
  components: {
    PhotoItem,
    HeaderView,
    FooterView,
  },
  methods: {
    call(){
      auth.detect_face_lambda()
    }
  },
  mounted(){
   
  },
  created(){

    const mql = window.matchMedia("(min-width: 600px)");
    const matchMediaChecker = (e) => {
      if (e.matches) {
        // ウィンドウサイズ600px以下のときの処理
        console.log("pc size")
        let size = Math.ceil((this.photos.length / 3))
        this.gridRows.gridTemplateRows = 'repeat(' + size + ', 26vw)'
      } else {
        // それ以外の処理
        console.log("smart phone")
        let size = Math.ceil((this.photos.length / 2))
        this.gridRows.gridTemplateRows = 'repeat(' + size + ', 46vw)'
      }
    }

    //matchMediaCheckerイベント登録
    mql.addEventListener('change', matchMediaChecker)

    this.photos.push("logo.png")
    this.photos.push("img1-400.jpg")
    this.photos.push("img1-400.jpg")
    this.photos.push("img5-400.jpg")
    this.photos.push("img5-400.jpg")
    
  },
  computed: {
    classObject() {
      return {
        girda: "girda"
      }
    }
  },
  watch: {

  }
};
</script>

<style scoped>
.grid {
    width: 94vw;
    margin: 0 auto 3vw;
    display: grid;
    gap: 6vw;
    grid-template-columns: repeat(2, 46vw); /* (94 - 2) / 2 */
    grid-template-rows: repeat(auto-fit, 46vw);
}

.user{
  margin-top: .5em;
  margin-left: 1em;
}

@media (min-width: 600px) {
/* Grid */
.grid {
        width: 80vw;
        gap: 1vw;
        grid-template-columns: repeat(3, 26vw); /* (80 - 2) / 3 */
        /*grid-template-rows: repeat(auto-fit, 26vw);*/
    }
}

</style>

