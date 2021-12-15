---
title:  "Jekyll Admin"
categories: 
  - Study
tags:
  - test
toc: true
---

# Jekyll Admin
Jekyll Admin은 콘텐츠를 작성하고 Jekyll 사이트를 관리할 수 있는 기존 CMS 스타일 그래픽 인터페이스를 사용자에게 제공하는 Jekyll 플러그인입니다.([출처](https://jekyll.github.io/jekyll-admin/))


## Step 1: Jekyll Admin install
- Gemfile 파일에서 다음과 같은 플러그인 추가
~~~
gem 'jekyll-admin', group: :jekyll_plugins
~~~

- 플러그인 설치
~~~
bundle install
~~~

## Step 2: _config.yml 설정
다음 내용을 추가/편집
~~~
jekyll_admin:
  hidden_links:
    - posts
    - pages
    - staticfiles
    - datafiles
    - configuration
  homepage: "pages"
~~~

## Step 3: Check
"/admin" 경로로 확인 가능하다.

## Done.