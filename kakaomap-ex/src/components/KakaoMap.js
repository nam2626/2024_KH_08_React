import { useEffect } from "react";

const { kakao } = window;

export default function KakaoMap() {
  console.log(window);
  const style = {
    width : '500px',
    height : '400px',
    border: '1px solid black',
    margin : '10px auto'
  };

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
  },[]);

  return <div id="map" style={style}></div>
}