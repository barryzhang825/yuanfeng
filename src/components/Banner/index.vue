<template>
  <div class="page">
    <el-carousel indicator-position="none" :interval="3000" height="725px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <div class="backBox" :style="'background-image: url('+baseUrl+item.imageUrl+')'">
          <div class="center">
            <div class="left">
              <div class="border1"></div>
              <div class="border2"></div>
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.details}}</div>
              <div class="line3" @click="goAboutUs">了解更多</div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
  export default {
    name: "Banner",
    data(){
      return{
        baseUrl:this.$imgBaseUrl
      }
    },
    methods: {
      goAboutUs() {
        this.$router.push({path: '/about-us'})
      }
    },
    props: {
      bannerList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="scss">
  .page {
    width: 100%;

    .el-carousel {
      width: 100%;
      min-width: 1200px;
    }

    .backBox {
      min-width: 1200px;
      width: 100%;
      height: 725px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../public/images/banner.png");
      display: flex;
      justify-content: center;

      .center {
        width: 1200px;
        padding-top: 85px;

        .left {
          width: 225px;
          height: 370px;
          border-top: 6px solid #fff;
          border-left: 6px solid #fff;
          border-bottom: 6px solid #fff;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 50px;
          box-sizing: border-box;
          position: relative;

          .border1 {
            height: 40px;
            border-right: 6px solid #fff;
            position: absolute;
            bottom: 0;
            right: 0;
          }

          .border2 {
            height: 40px;
            border-right: 6px solid #fff;
            position: absolute;
            top: 0;
            right: 0;
          }

          .line1, .line2 {
            width: 500%;
          }

          .line1 {
            font-size: 35px;
          }

          .line2 {
            font-size: 22px;
            padding-top: 50px;
            padding-bottom: 70px;
          }

          .line3 {
            font-size: 18px;
            box-sizing: border-box;
            border: 2px solid #fff;
            width: 123px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
      }

    }
  }

</style>
