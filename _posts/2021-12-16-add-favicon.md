---
title:  "Add Favicon"
categories: 
  - Study
tags:
  - test
toc: true
---

# Favicon
favicon은 인터넷 웹 브라우저의 주소창에 표시되는 웹사이트나 웹페이지를 대표하는 아이콘이다.([위키백과](https://ko.wikipedia.org/wiki/%ED%8C%8C%EB%B9%84%EC%BD%98))

## Step 1: Image
이 [링크](https://www.flaticon.com/)에서 마음에 드는 이미지 다운로드

## Step 2: Create favicon icon
이 [링크](https://realfavicongenerator.net/)에서 이미지를 업로드 하여 .ico 파일 추출

## Step 3: Edit custom.html
Path: (root folder)/_includes/_head/custom.html

~~~
<!-- start custom head snippets -->

<!-- insert favicons. use https://realfavicongenerator.net/ -->

<link rel="apple-touch-icon" sizes="180x180" href="{{site.baseurl}}/assets/logo.ico/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="{{site.baseurl}}/assets/logo.ico/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="{{site.baseurl}}/assets/logo.ico/favicon-16x16.png">
<link rel="manifest" href="{{site.baseurl}}/assets/logo.ico/site.webmanifest">
<link rel="mask-icon" href="{{site.baseurl}}/assets/logo.ico/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">

<!-- end custom head snippets -->
~~~

## Done.