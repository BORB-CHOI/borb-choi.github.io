const myLocation = document.querySelector("#jsLocation");

const API_URL =
  "http://openapi.copyright.or.kr/openapi/service/rest/OpnSourSWLisncInfoService/getOpnSourSWLisncList";
// http://openapi.copyright.or.kr/openapi/service/rest/OpnSourSWLisncInfoService/getOpnSourSWLisncSmmryInfo
// http://openapi.copyright.or.kr/openapi/service/rest/OpnSourSWLisncInfoService/getOpnSourSWLisncKorEngInfo
// http://openapi.copyright.or.kr/openapi/service/rest/OpnSourSWLisncInfoService/getOpnSourSWLisncImfeReq
const API_KEY =
  "fv+oGFCybCDrDqbaVS4hXbPiB6EOLKwmRm79dmC5KAUt3AiVwrpOYLHMof3fvyJReehyRjiVDAGR/mEM8WrzXw==";

const url = new URL(API_URL);
const headers = new Headers({
  "Content-Type": "text/xml",
  "Access-Control-Allow-Origin": "*",
});
const params = { serviceKey: API_KEY };

url.search = new URLSearchParams(params).toString();

fetch(url, { method: "GET", headers })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
