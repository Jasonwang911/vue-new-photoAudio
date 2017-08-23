<template>
  <div>
    <section class="footer">
      <section class="index">
        <router-link to='/' exact>
          <i></i>
          <p>新闻</p>
        </router-link>
      </section>
      <section class="banklist">
        <router-link to="/class" >
          <i></i>
          <p>258</p>
        </router-link>
      </section>
     <!--  <section class="profit">
        <router-link to="/profit">
          <i></i>
          <p>比收益</p>
        </router-link>
      </section>
      <section class="club">
        <router-link to='/investment'>
          <i></i>
          <p>投资</p>
        </router-link>
      </section>
      <section class="mine">
        <router-link to='/mine'>
          <i></i>
          <p>我</p>
        </router-link>
      </section> -->
    </section>
    <div style="height: 0.88rem;"></div>
  </div>
</template>

<script>
export default {
  name: 'vFooter',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  width:100%;
  height: 0.96rem;
  display: flex;
  display: -webkit-flex;
  position: fixed;
  /*right: 0;*/
  left: 0;
  z-index: 120;
  bottom: 0;
  background:white;
  border-top: 2px solid rgba(245,245,245,0.8);
}
.footer section{
  width:50%;
  text-align:center;
  display: inline-block;
}
.footer section i{
  display:block;
  width:0.42rem;
  height: 0.4rem;
  margin: 0.1rem auto 0.04rem;
}
.footer .index i{
  background:url('../../assets/icon/footerIcon/index.svg') no-repeat;
}
.footer .index .router-link-active i{
  background:url('../../assets/icon/footerIcon/indexActive.svg') no-repeat;
}
.footer .banklist i{
  background:url('../../assets/icon/footerIcon/banklist.svg') no-repeat;
}
.footer .banklist .router-link-active i{
  background:url('../../assets/icon/footerIcon/banklistActive.svg') no-repeat;
}
/*.footer .profit i{
  background:url('../../assets/footer/profit.svg') no-repeat;
}
.footer .profit .router-link-active i{
  background:url('../../assets/footer/profitActive.svg') no-repeat;
}
.footer .club i{
  background:url('../../assets/footer/investment1.svg') no-repeat;
}
.footer .club .router-link-active i{
  background:url('../../assets/footer/investment.svg') no-repeat;
}
.footer .mine i{
  background:url('../../assets/footer/mine.svg') no-repeat;
}
.footer .mine .router-link-active i{
  background:url('../../assets/footer/mineActive.svg') no-repeat;
}*/
.footer section img{
  width:0.37rem;
  height: 0.38rem;
  margin: 0.1rem auto 0.04rem;
}
.footer section p{
  font-size: 0.2rem;
  line-height: 0.24rem;
  color: #B3B3B3;
  margin-top: 0.15rem;
}
.footer .router-link-active p{
  color:#ED4040;
}
</style>
