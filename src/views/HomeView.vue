<template>
  <el-carousel :interval="3000" type="card">
    <el-carousel-item>
      <img
        src="https://cf.shopee.tw/file/a3f44bacbc1aab28428152c788591e18"
        alt="img"
        fit="cover"
      />
    </el-carousel-item>
    <el-carousel-item>
      <img
        src="https://cf.shopee.tw/file/42bfd3ef69698b9fd0f90fa1694b2546"
        alt="img"
        fit="cover"
      />
    </el-carousel-item>
    <el-carousel-item>
      <img
        src="https://cf.shopee.tw/file/02962849bc78bee3d4a3dba5c0622d06"
        alt="img"
        fit="cover"
      />
    </el-carousel-item>
    <el-carousel-item>
      <img
        src="https://cf.shopee.tw/file/240bfadf6f60957740659ec8bf1ee6b2"
        alt="img"
        fit="cover"
      />
    </el-carousel-item>
    <img
      src="https://cf.shopee.tw/file/240bfadf6f60957740659ec8bf1ee6b2"
      class="carouselImg"
    />
  </el-carousel>
</template>

<style lang="scss" scoped>
.el-carousel {
  width: 100%;

  :deep(.el-carousel__container) {
    height: auto !important;
  }

  :deep(.el-carousel__item) {
    left: -20px;
  }

  :deep(.el-carousel__item--card) {
    width: 50%;
    min-width: 350px;
  }

  img {
    height: 50vh;
    max-height: 580px;
    width: 350px;
    display: block;
    margin: auto;
  }

  .carouselImg {
    opacity: 0;
  }
}
</style>
