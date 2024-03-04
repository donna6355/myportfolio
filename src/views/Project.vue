<template>
  <div>
    <div>
      <Frame
        mode="vertical"
        title="리브팜 앱 리빌딩"
        :isMobile="isMobile"
        img="fc.png"
        period="퓨처커넥트  |  2023.11 ~ 2024.01"
        url="https://play.google.com/store/apps/details?id=com.livfarm.crm"
        :imgs="fcImgs"
        :details="fcDetails"
        :stacks="fcStacks"
      />
    </div>
    <div :style="{ 'margin-top': isMobile ? '40px' : '80px' }">
      <Frame
        mode="horizontal"
        title="키오스크 프로그램 POC"
        :isMobile="isMobile"
        img="oyster.jpeg"
        period="오이스터에이블  |  2022.04 ~ 2023.11"
        url=""
        :imgs="lalaImgs"
        :details="lalaDetails"
        :stacks="lalaStacks"
      >
      </Frame>
    </div>
    <div :style="{ 'margin-top': isMobile ? '40px' : '80px' }">
      <Frame
        mode="vertical"
        title="오늘의 분리수거 웹앱 개발 및 유지 보수"
        :isMobile="isMobile"
        img="oyster.jpeg"
        period="오이스터에이블  |  2022.04 ~ 2023.11"
        url="https://apps.apple.com/kr/app/id1446402924"
        :imgs="obunAppImgs"
        :details="obunAppDetails"
        :stacks="obunAppStacks"
      >
      </Frame>
    </div>
    <div :style="{ 'margin-top': isMobile ? '40px' : '80px' }">
      <Frame
        mode="vertical"
        title="기분어떠냐옹 앱 개발"
        :isMobile="isMobile"
        period="개인 프로젝트  |  2023.07 ~ 현재"
        img="moodeow.png"
        url="https://play.google.com/store/apps/details?id=com.donna6355.cat_face"
        :imgs="moodeowImgs"
        :details="moodeowDetails"
        :stacks="moodeowStacks"
      />
    </div>
    <div :style="{ 'margin-top': isMobile ? '40px' : '80px' }">
      <Frame
        mode="vertical"
        title="집사 일기 앱 개발 및 유지보수"
        :isMobile="isMobile"
        period="개인 프로젝트  |  2021.09 ~ 현재"
        img="butler.png"
        url="https://play.google.com/store/apps/details?id=com.donna6355.butler_diary"
        :imgs="butlerImgs"
        :details="butlerDetails"
        :stacks="butlerStacks"
      />
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
        "패키지 선택과 비즈니스 로직 분리",
        "유지보수와 업데이트",
        "개발문서 정리의 중요성",
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
      moodeowImgs: ["moodeow_1.png", "moodeow_2.png", "moodeow_3.png"],
      lalaImgs: [
        "lala_1.png",
        "lala_2.png",
        "lala_3.png",
        "lala_4.png",
        "lala_5.png",
      ],
      fcImgs: ["fc_2.gif", "fc_0.gif", "fc_1.gif"],
      rplayDetails: [
        "PC, 모바일, OS, 기기 특성 등 반응형 웹 제작시 주의사항",
        "기획자, 디자이너, 개발자 간의 의사소통과 협업의 중요성",
        "더 나은 UX를 위한 사용자의 입장과 객관적 시선",
        "재사용 가능한 코드 및 속도와 성능에 대한 고민",
      ],
      lalaDetails: [
        "윈도우, 리눅스, MacOs 등 진정한 크로스 플랫폼의 위력",
        "시리얼 통신, ffi, TCP, bloc, tflite 등 새로운 시도",
        "설계와 패턴. 재사용성과 확장성의 고민",
        "에러 핸들링과 테스트의 중요성",
      ],
      butlerDetails: [
        "어플 기획부터 구글 플레이 스토어 출시 및 버전 업데이트까지",
        "어플 사용자의 니즈와 다양한 모바일 기기 특성",
        "어떤 라이브러리가 성능, 기능 면에서 나의 어플과 잘 맞는가",
        "데이터 저장을 위해 어떤 방식을 사용할 것인가",
        "리팩토링의 중요성",
      ],
      moodeowDetails: [
        "로컬라이제이션을 구현하는 다양한 방법",
        "모델 학습의 중요성 및 tflite 찍먹",
      ],
      rplayAppDetails: [
        "안드로이드와 아이폰을 아우르는 크로스플랫폼",
        "API 호출과 인터셉터 활용",
        "위젯을 이용한 다양한 UI 구현",
      ],
      fcDetails: [
        "레거시 코드 분석 및 문제점과 개선사항 정의",
        "재사용성 및 유지 보수를 고려한 리빌딩 계획 수립",
        "사용자 관점의 사용성 분석 및 벤치마킹을 통한 UI/UX 개선",
        "클린 아키텍처를 위한 패턴 및 의존성 주입",
        "유닛테스트 코드 작성 및 QA 진행",
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
      lalaStacks: [
        "Dart",
        "Flutter",
        "serial_port",
        "bloc",
        "ffi",
        "RabbitMQ",
        "payment",
      ],
      fcStacks: [
        "Dart",
        "Flutter",
        "bloc",
        "freezed",
        "getIt",
        "FCM",
        "iamport",
      ],
      obunAppStacks: ["Dart", "Flutter", "FlutterInAppWebview", "OneSignal"],
      butlerStacks: ["Dart", "Flutter", "Hive", "Provider"],
      moodeowStacks: ["Dart", "Flutter", "tflite", "localization"],
    };
  },
};
</script>
<style scoped></style>
