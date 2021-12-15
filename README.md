# borb-choi.github.io

## My project links
   > [Kakao Clone](https://borb-choi.github.io/kakao_clone)
   ~~~
   HTML, CSS 
   ~~~
   > [JavaScript Theory](https://borb-choi.github.io/JavaScript_theory/)
   ~~~
   HTML, CSS, JavaScript
   ~~~
   > [Please pick me](https://borb-choi.github.io/pickme/)
   ~~~
   Pug, SCSS, JavaScript, TypeScript
   ~~~

## Function
- [x] Comments
- [x] Favicon 
- [x] Google Analytics
- [x] Jekyll Admin

### Step 1: Git install

- 이 [링크](https://git-scm.com/downloads)에 접속해서 문서를 참고하여 윈도우 버전 git 설치

### Step 2: Git desktop install

- 이 [링크](https://desktop.github.com/)에 접속해서 문서를 참고하여 윈도우 버전 git desktop 설치
- 장점: CLI git과 다르게 토큰을 입력할 필요가 없으며 버튼 클릭 만으로 쉽게 Repository, Branch, Commit, Push 작업을 할 수 있음

### Step 3: Create repository

- 이름을 "borb-choi.github.io"으로 작성 후 Repository 생성

### Step 4: Jekyll install

-  이 [링크](https://rubyinstaller.org/downloads/)에 접속하여 Ruby + Devkit을 설치

- Path 설정 적용이 되어야 하므로 컴퓨터 재부팅 필요

-  CLI(shell, cmd, pwsh)창을 열어 아래와 같은 명령어 입력

~~~
gem install jekyll bundler
~~~

### Step 5: minimal-mistakes clone

- 이 [링크](https://github.com/mmistakes/minimal-mistakes)에 접속하여 minimal-mistakes Repository를 Zip형식으로 로컬에 저장

- borb-choi.github.io의 .git 폴더가 있는 위치에 압축을 풀어 붙여넣기

### Step 6: minimal-mistakes Setting

- 이 [링크](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)에 접속하여 Quick-Start Guide에 따라 사이트 구성

- 클론한 Repository 내에 있는 docs 폴더와 test폴더를 참고하여 아래와 같이 _config.yml 작성

## Site Settings

~~~
locale                   : "ko-KR"
title                    : "개발 방목장"
title_separator          : "-"
subtitle                 : # site tagline that appears below site title in masthead
name                     : "BORB"
description              : "An amazing website."
url                      : "https://borb-choi.github.io" # the base hostname & protocol for your site e.g. "https://mmistakes.github.io"
baseurl                  : # the subpath of your site, e.g. "/blog"
repository               : "BORB-CHOI/borb-choi.github.io" # GitHub username/repo-name e.g. "mmistakes/minimal-mistakes"
~~~

## Site Author

~~~
author:
  name             : "BORB"
  avatar           : "/assets/images/profile-photo.jpg" # path of avatar image, e.g. "/assets/images/bio-photo.jpg"
  bio              : "I am an **awesome** person."
  location         : "Republic of Korea"
  email            :
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:qzsec299@naver.com"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/BORB-CHOI"
    - label: "LinkedIn"
      icon: "fab fa-fw fa-linkedin"
      url: "https://www.linkedin.com/in/%EB%B9%84%EC%84%B1-%EC%B5%9C-a61b30215/"
    - label: "Website"
      icon: "fas fa-fw fa-link"
      url: "https://biorb.tistory.com/"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://instagram.com/bi_orb/"
~~~

## Site Footer

~~~
footer:
  links:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/BORB-CHOI"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://github.com/BORB-CHOI"
    - label: "LinkedIn"
      icon: "fab fa-fw fa-linkedin"
      url: "https://www.linkedin.com/in/%EB%B9%84%EC%84%B1-%EC%B5%9C-a61b30215/"
~~~

## Defaults

~~~
defaults:  
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true  
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true
~~~