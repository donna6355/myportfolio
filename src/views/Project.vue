<template>
  <div>
    <div>
      <Frame
        mode="horizontal"
        title="Rplay 사이트 고도화 및 유지 보수"
        :isMobile="isMobile"
        img="rplay.svg"
        period="2020.11 ~ 현재 플랙스뉴럴랩스 재직중"
        url="https://rplay.live/ko/"
        :imgs="rplayImgs"
      />
    </div>
    <div style="margin-top: 80px">
      <Frame
        mode="vertical"
        title="집사 일기 어플리케이션 제작"
        :isMobile="isMobile"
        period="2021.09 ~ 현재 개인 프로젝트"
        img="butler.png"
        url="https://play.google.com/store/apps/details?id=com.donna6355.butler_diary"
        :imgs="butlerImgs"
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
    };
  },
};
</script>
<style scoped></style>
