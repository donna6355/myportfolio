<template>
  <div class="about">
    <h2>개발자 전다나</h2>
    <p>
      과거에는 행사 기획을 현재는 코딩을 하는 1년차 개발자 <br />
      정확한 문제 파악부터 해결 방안까지 고민하는 프로 문제 해결러<br />
      말썽꾸러기 반려묘에게 한없이 약한 집사
    </p>
    <h3>career</h3>
    <p>2020.11 - 현재 플랙스 뉴럴랩스 재직중</p>
    <h3>contacts</h3>
    <p>
      phone number: 010.5763.6355 <br />
      email: donnajun1214@gmail.com <br />
      kakao:
    </p>
    <h3>github</h3>
  </div>
</template>
<script>
export default {
  name: "About",
  props: {
    isMobile: {
      type: Boolean,
      require: true,
    },
  },
};
</script>
