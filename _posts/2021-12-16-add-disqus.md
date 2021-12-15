---
title:  "Add Disqus"
categories: 
  - Study
tags:
  - test
toc: true
---

# Disqus
Disqus은 사이트에 코멘트 기능을 손쉽게 추가할 수 있는 서비스이다.

## Step 1: Disqus 로그인
[Disqus](https://www.flaticon.com/)에 접속하여 회원가입 또는 로그인 진행

## Step 2: Disqus 설정
1. "I want to install Disqus on my site" 버튼 클릭
2. 사이트 정보 입력 및 Website Name 기억
3. Platform 중 Jekyll 선택
4. Install Instruction을 읽어본 후 Configure를 눌러 다음을 진행
5. Website URL에 사이트 주소 입력 후 Next로 이동
6. Comment 정책 체크 후 Complete Setup을 눌러 설정

## Step 3: Disqus comment 설정
_config.yml 파일에서 아래와 같이 편집
~~~
words_per_minute         : 200
comments:
  provider               : "disqus" # false (default), "disqus", "discourse", "facebook", "staticman", "staticman_v2", "utterances", "giscus", "custom"
  disqus:
    shortname            : "development-ranch" # https://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-
~~~