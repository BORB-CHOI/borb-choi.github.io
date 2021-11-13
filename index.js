const URL = "https://api.github.com/licenses";

// regex text search function
const regexSearch = (text, _regex) => {
  const regex = new RegExp(_regex, "g");
  const matches = text.match(regex);
  return matches;
};

// create axios ajax request
const getData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

// getData(URL).then((data) => {
//   console.log(data);
//   // const licenseList = data.map((license) => {
//   //   return license.key;
// });

// fetch options
const options = {
  headers: {
    Accept: "application/vnd.github.v3+json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "token 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",
    "Content-Type": "application/json",
  },
};

fetch(
  // "https://api.github.com/repos/github/choosealicense.com/contents/_licenses/",
  URL,
  options
)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    json.map((license) => {
      console.log(license.name, license.url);
      fetch(license.url, options).then((response) => {
        console.log(response);
      });
    });
    // const test = regexSearch(json[0].name, "^(.*)$");
  })
  .then((data) => {
    // const decodedData = atob(data); // decode the string
    // console.log(decodedData);
  })
  .catch((error) => {
    console.log(error);
  });

// 1.
// 41개의 라이센스들을 문자열 슬라이싱으로 데이터 전처리

// Permissions 선택 (전처리 데이터 필요함)
// Conditions 선택 (전처리 데이터 필요함)
// Limitations 선택 (전처리 데이터 필요함)

// 일치하는 라이선스 찾기

// 출력

// 2.
// Github API 레포지토리 검색으로 라이선스 찾고 Permissions, Conditions, Limitations 출력
// https://docs.github.com/en/rest/reference/repos
