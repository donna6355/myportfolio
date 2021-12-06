<template>
  <div class="about">
    <h2>개발자 전다나</h2>
    <p>
      과거에는 국제 행사 기획을, 현재는 코딩을 하는 1년차 개발자 <br />
      정확한 문제 파악부터 해결 방안까지 고민하는 프로 문제 해결러<br />
      말썽꾸러기 반려묘에게 꼼짝 못하는 호구 집사
    </p>
    <h3>Career</h3>
    <ol>
      <li>2020.11 - 현재 플랙스 뉴럴랩스 재직중</li>
      <li>2019.09 - 2020.02 국제회의 기획 - TN Korea</li>
      <li>2015.04 - 2018.05 국제행사 기획 - 킴스여행사/Pacific World</li>
    </ol>
    <h3>Study</h3>
    <ol>
      <li>
        2020.05 - 2020.10 웹표준 기반 UI/UX 엔지니어링 콘텐츠 전문가 양성 과정
      </li>
      <li>2008.03 - 2014.02 국민대학교 국어국문학 / 광고학 전공</li>
    </ol>
    <h3>Certificates</h3>
    <ol>
      <li>웹디자인 기능사</li>
      <li>컨벤션 기획사 2급</li>
    </ol>
    <h3>Contacts</h3>
    <p>
      phone number: 010.5763.6355 <br />
      email: donnajun1214@gmail.com <br />
      kakao:
    </p>
    <a href="https://github.com/donna6355" target="_blank">github 둘러보기</a>
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
