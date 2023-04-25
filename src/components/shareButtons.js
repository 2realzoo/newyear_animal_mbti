import React, { useState } from "react";
import "./shareButtons.css";

function ShareButtons({ urlName, showButtons }) {
  const pageUrl = `https://http://localhost:3000/result/${urlName}`;
  const shareKakao = () => {
    const Kakao = window.Kakao;
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "성격으로 보는 새해 나의 동물",
        description:
          "성격으로 보는 새해 동물 결과입니다! 어떤 동물이 나왔을까요? ",
        imageUrl: "../images/title.jpg",
        link: {
          mobileWebUrl: pageUrl,
          webUrl: pageUrl,
        },
      },
      itemContent: {
        profileText: "성격으로 보는 새해 나의 동물",
        profileImageUrl: "../images/title.jpg",
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: pageUrl,
            webUrl: pageUrl,
          },
        },
      ],
    });
  };

  const shareTwitter = () => {
    const sendText = "성격으로 보는 새해 나의 동물";
    window.open(
      `https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`
    );
  };

  const shareFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
  };

  return (
    <div className="button-container">
      <div className="kakao-btn share-button" onClick={shareKakao}>
        <img
          src={require("../images/kakao.png")}
          alt="kakao"
          className="share-button-image"
        />
      </div>
      <div onClick={shareTwitter} className="share-button">
        <img
          src={require("../images/twitter.png")}
          alt="twitter"
          className="share-button-image"
        />
      </div>
      <div onClick={shareFacebook} className="share-button">
        <img
          src={require("../images/facebook.png")}
          alt="facebook"
          className="share-button-image"
        />
      </div>
    </div>
  );
}

export default ShareButtons;
