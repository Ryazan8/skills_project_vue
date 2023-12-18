<template>

  <div class="header">
    <div class="container">

      <div class="header_content">
        <div class="header_content_img" >
          <img src="/public/header_bg.png" alt="img">
        </div>
        <div class="header_content_btn">
          <button class="header_content_btn_exp">Explore Courses</button>
          <button class="header_content_btn_view">View Pricing</button>
        </div>
      </div>

      <div class="courses">
        <div class="courses_title">
          <p class="courses_title_name">Our Courses</p>
          <p class="courses_title_text">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <router-link class="courses_btn" to="/index">View All</router-link>
      </div>

    </div>
  </div>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  font-family: 'Be Vietnam Pro', sans-serif;
}

.header_content{
  margin-top: 100px;
  &_img{
    max-width: 965px;
    margin: 0 auto;
  }
  &_btn{
    display: flex;
    align-items: center;
    margin: 50px auto 100px auto;
    max-width: 400px;
    &_exp{
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 18px;
      background: none;
      border: none;
      color: #fff;
      padding: 18px 24px;
      border-radius: 8px;
      line-height: 27px;
      font-weight: 600;
      text-align: center;
      background: #FF9500;
      cursor: pointer;
      margin-right: 12px;
      &:hover{
        opacity: 0.6;
      }
    }
    &_view{
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 18px;
      background: none;
      text-align: center;
      font-weight: 500;
      padding: 18px 24px;
      cursor: pointer;
      line-height: 27px;
      color: #262626;
      border-radius: 8px;
      border: 1px solid #F1F1F3;
      background: #FFF;
      &:hover{
        opacity: 0.6;
      }
    }
  }
}

.courses{
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_title{
    font-family: 'Be Vietnam Pro', sans-serif;
    max-width: 1180px;
    margin-bottom: 80px;
    &_name{
      font-size: 48px;
      color: #262626;
      font-weight: 600;
      line-height: 72px;
    }
    &_text{
      font-size: 18px;
      line-height: 27px;
      color: #59595A;
    }
  }
  &_btn{
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    background: none;
    text-align: center;
    font-weight: 500;
    padding: 18px 24px;
    cursor: pointer;
    line-height: 27px;
    text-decoration: none;
    color: #262626;
    border-radius: 8px;
    border: 1px solid #F1F1F3;
    background: #FFF;
    &:hover{
      opacity: 0.6;
    }
  }
}

</style>