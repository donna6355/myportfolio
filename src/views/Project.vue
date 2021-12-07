<template>
  <div>
    <div>
      <Frame
        mode="horizontal"
        title="Rplay 사이트 고도화 및 유지 보수"
        :isMobile="isMobile"
        img="rplay.svg"
        period="플랙스뉴럴랩스 재직중  |  2020.11 ~ 현재"
        url="https://rplay.live/"
        :imgs="rplayImgs"
        :details="rplayDetails"
      />
    </div>
    <div :style="{ 'margin-top': isMobile ? '40px' : '80px' }">
      <Frame
        mode="vertical"
        title="집사 일기 어플리케이션"
        :isMobile="isMobile"
        period="개인 프로젝트  |  2021.09 ~ 11"
        img="butler.png"
        url="https://play.google.com/store/apps/details?id=com.donna6355.butler_diary"
        :imgs="butlerImgs"
        :details="butlerDetails"
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
      rplayImgs: [
        "rplay_1.png",
        "rplay_2.png",
        "rplay_3.png",
        "rplay_4.png",
        "rplay_5.png",
      ],
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
      ],
      butlerDetails: [
        "어플 기획에 고려해야되는 사항, 사용자의 니즈와 다양한 모바일 기기",
        "어떤 라이브러리가 성능, 기능 면에서 나의 어플과 잘 맞는가",
        "데이터 저장을 위해 어떤 방식을 사용할 것인가",
        "어플 기획부터 구글 플레이 스토어 출시 및 버전 업데이트까지",
      ],
    };
  },
};
</script>
<style scoped></style>
