// const URL = "https://api.github.com/licenses";

// const API_URL =
//  "http://openapi.copyright.or.kr/openapi/service/rest/OpnSourSWLisncInfoService";

//  다음 CORS 정책에 의해 'http://openapi.copyright.or.kr/openapi/service/rest/OpnSourSWLisncInfoService'
//  '127.0.0.1:5500'에 대한 액세스가 차단되었습니다. 프리라이트 요청에 대한 응답이 액세스 제어 검사를 통과하지 못했습니다.
//  요청한 리소스에 '액세스-제어-허용-원본' 헤더가 없습니다. 불투명한 응답이 필요에 적합한 경우 요청 모드를 'No-cors'로 설정하여 CORS가 비활성화된 리소스를 가져옵니다.

const form = document.querySelector("form");
const input = document.querySelector(".input");
const permissions = document.querySelectorAll(".permission-checkbox");
const conditions = document.querySelectorAll(".condition-checkbox");
const limitations = document.querySelectorAll(".limitation-checkbox");
const outputUl = document.querySelector(".output-ul");

let licenseList = [];

// regex extractor
const extractor = (text, firstWord, secondWord) => {
  if (text.search(firstWord)) {
    result = text.slice(text.indexOf(firstWord), text.indexOf(secondWord));

    // slice
    result = result.slice(result.indexOf(":") + 1, result.length);
    result = result.replace(/  - /g, "");
    result = result.trim();
    resultList = result.split("\n");
    return resultList;
  } else {
    return "";
  }
};

// get License List from API
const getLicenseList = async () => {
  // fetch options
  const options = {
    method: "GET",
    headers: {
      Accept: "*",
      Authorization: "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",
      "Content-Type": "application/json",
    },
  };

  // fetch data
  await fetch(
    "https://api.github.com/repos/github/choosealicense.com/contents/_licenses/",
    options
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      json.map((license) => {
        fetch(license.url, options)
          .then((response) => {
            return response.json();
          })
          .then(async (json) => {
            const data = atob(json.content); // decode the string

            // console.log(data); // print the data

            const title = extractor(data, "title:", "spdx-id:");
            const description = extractor(data, "description:", "how:");
            const note = extractor(data, "note:", "using:");
            const using = extractor(data, "using:", "permissions:");
            const permissions = extractor(data, "permissions:", "conditions:");
            const conditions = extractor(data, "conditions:", "limitations:");
            const limitations = extractor(data, "limitations:", "---\n\n");

            const license = {
              title,
              description,
              note,
              using,
              permissions,
              conditions,
              limitations,
            };

            licenseList.push(license);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// regex text search function
const searchToText = (title, _regex) => {
  const regex = new RegExp(_regex, "g");
  const lowerTitle = title[0].toLowerCase();
  if (lowerTitle.search(regex) !== -1) {
    return true;
  } else {
    return false;
  }
};

const getCheckList = (checkboxList) => {
  const checkList = [];

  checkboxList.forEach((item) => {
    if (item.checked) {
      checkList.push(item.name);
    }
  });

  return checkList;
};

const outputLicenseList = (filteredLicenseList) => {
  outputUl.innerHTML = "";

  filteredLicenseList.forEach((license) => {
    const li = document.createElement("li");
    const title = document.createElement("h3");
    title.innerText = license.title;
    li.appendChild(title);

    outputUl.appendChild(li);
  });
};

const handleSubmit = async (event) => {
  let permissionChooses = getCheckList(permissions);
  let conditionChooses = getCheckList(conditions);
  let limitationChooses = getCheckList(limitations);
  const textfilteredList = [];
  let inputText = input.value;

  event.preventDefault(); // prevent default submit

  // serach to title text

  licenseList.forEach((license) => {
    searchToText(license.title, inputText)
      ? textfilteredList.push(license)
      : null;
  });

  const checkFilteredList = textfilteredList.filter((license) => {
    const permissionCheck = permissionChooses.every((permission) => {
      return license.permissions.includes(permission);
    });

    const conditionCheck = conditionChooses.every((condition) => {
      return license.conditions.includes(condition);
    });

    const limitationCheck = limitationChooses.every((limitation) => {
      return license.limitations.includes(limitation);
    });

    return permissionCheck && conditionCheck && limitationCheck;
  });

  outputLicenseList(checkFilteredList);
  // console.log(licenseList.length); // API로 불러온 라이센스 총 갯수 확인
  // console.log(checkFilteredList.length); // 필터린 된 라이센스 갯수 확인
};

const eventHandler = () => {
  form.addEventListener("submit", handleSubmit);
};

const init = async () => {
  await getLicenseList();
  console.log(licenseList);
  eventHandler();
};

init();

// const test = regexSearch(json[0].name, "^(.*)$");

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
