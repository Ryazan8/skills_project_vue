<template>
  <div class="container">

    <div class="nav">

      <div class="nav_left">
        <img style="margin-right: 50px;" src="/public/Logo.png" alt="logo">
        <a href="#" class="nav_left_link">Home</a>
        <a href="#" class="nav_left_link">Courses</a>
        <a href="#" class="nav_left_link">About Us</a>
        <a href="#" class="nav_left_link">Pricing</a>
        <a href="#" class="nav_left_link">Contact</a>
      </div>

      <div class="nav_right">

        <button class="nav_right_btn up">Sign Up</button>
        <button class="nav_right_btn in">Login</button>

      </div>

    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  font-family: 'Be Vietnam Pro', sans-serif;
}

.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  &_left{
    align-items: center;
    display: flex;
    &_link{
      color: #262626;
      text-decoration: none;
      font-size: 18px;
      padding: 14px 24px;
      line-height: 27px;
      &:hover{
        border-radius: 8px;
        background: #F1F1F3;
      }
    }
  }
  &_right{
    &_btn{
      font-size: 18px;
      line-height: 27px;
      border: none;
      background: none;
      font-family: 'Be Vietnam Pro', sans-serif;
      padding: 14px 34px;
      color: #262626;
      transition: all .3s ease-in-out;
      border-radius: 8px;
      &:hover{
        background: #FF9500;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>