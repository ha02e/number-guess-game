function kakaoShare() {
  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "Up&Down 숫자 게임",
      description: "자바스크립트 숫자 게임 토이프로젝트",
      imageUrl: "https://ifh.cc/g/OH6l4Q.png",
      link: {
        mobileWebUrl: "https://hy-number-guess-game.netlify.app",
        webUrl: "https://hy-number-guess-game.netlify.app",
      },
    },
    buttons: [
      {
        title: "게임하러가기",
        link: {
          mobileWebUrl: "https://hy-number-guess-game.netlify.app",
          webUrl: "https://hy-number-guess-game.netlify.app",
        },
      },
    ],
  });
}
