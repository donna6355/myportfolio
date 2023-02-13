<template>
  <div>
    <div>
      <Frame
        mode="vertical"
        title="오늘의 분리수거 웹앱 개발 및 유지 보수"
        :isMobile="isMobile"
        img="oyster.jpeg"
        period="오이스터에이블  |  2022.04 ~ 현재"
        url="https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98%EC%9D%98-%EB%B6%84%EB%A6%AC%EC%88%98%EA%B1%B0/id1446402924"
        :imgs="obunAppImgs"
        :details="obunAppDetails"
        :stacks="obunAppStacks"
      >
      </Frame>
    </div>
    <div :style="{ 'margin-top': isMobile ? '40px' : '80px' }">
      <Frame
        mode="vertical"
        title="베타 앱 개발"
        :isMobile="isMobile"
        img="rplay.svg"
        period="플랙스뉴럴랩스  |  2021.12 ~ 2022.04"
        url="https://play.google.com/store/apps/details?id=live.rplay"
        :imgs="rplayAppImgs"
        :details="rplayAppDetails"
        :stacks="rplayAppStacks"
      />
    </div>
    <div :style="{ 'margin-top': isMobile ? '40px' : '80px' }">
      <Frame
        mode="horizontal"
        title="사이트 고도화 및 유지 보수"
        :isMobile="isMobile"
        img="rplay.svg"
        period="플랙스뉴럴랩스 |  2020.11 ~ 2022.04"
        url="https://rplay.live/"
        :imgs="rplayImgs"
        :details="rplayDetails"
        :stacks="rplayStacks"
      />
    </div>
    <div :style="{ 'margin-top': isMobile ? '40px' : '80px' }">
      <Frame
        mode="vertical"
        title="집사 일기 앱 제작"
        :isMobile="isMobile"
        period="개인 프로젝트  |  2021.09 ~ 11"
        img="butler.png"
        url="https://play.google.com/store/apps/details?id=com.donna6355.butler_diary"
        :imgs="butlerImgs"
        :details="butlerDetails"
        :stacks="butlerStacks"
      />
    </div>
  </div>
</template>
<script>
import Frame from "@/components/Frame";
export default {
  name: "Project",
  components: { Frame },
  props: {
    isMobile: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      obunAppImgs: ["obun_1.png", "obun_2.png"],
      obunAppDetails: [
        "하이브리드 웹앱의 한계와 장점",
        "패키지 선택의 중요성",
        "개발문서 정리의 중요성",
        "유지보수와 업데이트",
      ],
      rplayImgs: [
        "rplay_1.png",
        "rplay_2.png",
        "rplay_3.png",
        "rplay_4.png",
        "rplay_5.png",
      ],
      rplayAppImgs: ["rplay_app_1.png", "rplay_app_2.png", "rplay_app_3.png"],
      butlerImgs: [
        "butler_1.png",
        "butler_2.png",
        "butler_3.png",
        "butler_4.png",
        "butler_5.png",
      ],
      rplayDetails: [
        "PC, 모바일, OS, 기기 특성 등 반응형 웹 제작시 주의사항",
        "기획자, 디자이너, 개발자 간의 의사소통과 협업의 중요성",
        "더 나은 UX를 위한 사용자의 입장과 객관적 시선",
        "재사용 가능한 코드 및 속도와 성능에 대한 고민",
      ],
      butlerDetails: [
        "어플 기획부터 구글 플레이 스토어 출시 및 버전 업데이트까지",
        "어플 사용자의 니즈와 다양한 모바일 기기 특성",
        "어떤 라이브러리가 성능, 기능 면에서 나의 어플과 잘 맞는가",
        "데이터 저장을 위해 어떤 방식을 사용할 것인가",
      ],
      rplayAppDetails: [
        "안드로이드와 아이폰을 아우르는 크로스플랫폼",
        "API 호출과 인터셉터 활용",
        "위젯을 이용한 다양한 UI 구현",
      ],
      rplayAppStacks: ["Dart", "Flutter", "GetX", "Dio"],
      rplayStacks: [
        "Vuejs",
        "Vuex",
        "Vue Router",
        "Nodejs",
        "MongoDB",
        "Tailwindcss",
      ],
      obunAppStacks: ["Dart", "Flutter", "FlutterInAppWebview", "OneSignal"],
      butlerStacks: ["Dart", "Flutter", "Hive", "Provider"],
    };
  },
};
</script>
<style scoped></style>
