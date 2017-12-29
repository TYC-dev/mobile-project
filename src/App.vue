<template>
  <div id="app">
    <app-nav v-show='hideHead'></app-nav>
    <transition name="fade">
      <router-view/>
    </transition>
    <app-footer v-show="hideFooter"></app-footer>
  </div>
</template>

<script>
  import appNav from '@/components/public/Nav'
  import appFooter from '@/components/public/Footer'

  import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    components: {
      'app-nav': appNav,
      'app-footer': appFooter
    },
    computed:mapGetters([
      'hideHead',
      'hideFooter'
    ]),
    watch:{
      $route(to){
          var path = this.$route.path;
          this.headerChange(path);
          this.footerChange(path);
      }
    },
    methods:{
      headerChange(path){
        if ( path == '/user') {
          this.$store.dispatch( 'HIDE_HEAD' );    //进入个人中心时隐藏header
        }else{
          this.$store.dispatch( 'SHOW_HEAD' )
        };
      },
      footerChange(path){
        if (path.indexOf('article') == -1){
          this.$store.dispatch( 'SHOW_FOOTER' )  //进入文章页面时隐藏footer
        }else{
          this.$store.dispatch('HIDE_FOOTER');
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
