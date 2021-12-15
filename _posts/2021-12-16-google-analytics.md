---
title:  "Google Analytics"
categories: 
  - Study
tags:
  - test
toc: true
---

# Google Analytics
Google Analytics는 현재 구글 마케팅 플랫폼 브랜드 내의 플랫폼으로서, 웹사이트 트래픽을 추적하고 보고하는 구글이 제공하는 웹 애널리틱스 서비스이다.([위키백과](https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EC%95%A0%EB%84%90%EB%A6%AC%ED%8B%B1%EC%8A%A4))

## Step 1: Google Analytics Login
[Google Analytics](https://analytics.google.com/analytics)에 접속하여 구글 로그인

## Step 2: 계정 설정
새 계정 이름 작성

## Step 3: 속성 설정
사이트 주소(ex: borb-choi.github.io) 작성

## Step 4: 데이터 스트림 설정
설정에서 데이터 스트림 탭을 찾아 웹으로 생성 후 사이트 주소 입력

## Step 5: 측정 ID 설정
데이터 스트림에서 얻은 측정 ID를 _config.yml파일에 적용
~~~
analytics:
  provider               : "google-gtag" # false (default), "google", "google-universal", "google-gtag", "custom"
  google:
    tracking_id          : G-12EEQRL2TK
    anonymize_ip         : # true, false (default)
~~~

## Done.