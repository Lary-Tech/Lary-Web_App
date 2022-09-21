<template>
  <el-carousel :interval="3000" type="card" height="505px">
    <el-carousel-item>
      <el-image
        src="https://cf.shopee.tw/file/a3f44bacbc1aab28428152c788591e18"
        fit="cover"
      />
    </el-carousel-item>
    <el-carousel-item>
      <el-image
        src="https://cf.shopee.tw/file/42bfd3ef69698b9fd0f90fa1694b2546"
        fit="cover"
      />
    </el-carousel-item>
    <el-carousel-item>
      <el-image
        src="https://cf.shopee.tw/file/02962849bc78bee3d4a3dba5c0622d06"
        fit="cover"
      />
    </el-carousel-item>
    <el-carousel-item
      ><el-image
        src="https://cf.shopee.tw/file/240bfadf6f60957740659ec8bf1ee6b2"
        fit="cover"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
