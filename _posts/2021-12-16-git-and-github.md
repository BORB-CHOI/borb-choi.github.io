---
title:  "Git & Github"
categories: 
  - Study
tags:
  - test
toc: true
toc_sticky : true
---

## Git
Git은 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템이다. 또는 이러한 명령어를 가리킨다. 소프트웨어 개발에서 소스 코드 관리에 주로 사용되지만 어떠한 집합의 파일의 변경사항을 지속적으로 추적하기 위해 사용될 수 있다.([위키백과](https://ko.wikipedia.org/wiki/%EA%B9%83_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)))

### 로컬 저장소 생성
~~~
git init # 현재 작업중인 디렉토리를 git 저장소로 지정
~~~

### Git에 변경사항 반영
~~~
$ git status # 현재 Git 상태 확인

$ git add example.py # Commit에 example.py 변경사항 반영

$ git commit -m "add example.py" # 변경사항이 반영된 new commit 생성
~~~

## Git Branch
버전 제어 및 소프트웨어 구성 관리 에서 Branch는 버전 제어 하에 있는 개체([위키백과](https://en.wikipedia.org/wiki/Branching_(version_control)))

### Branch 생성
~~~
$ git branch <branch_name> # git branch <branch 이름> 을 통해 branch 생성
~~~

### Branch 전환
~~~
$ git checkout <branch_name> # 현재 작업중인 branch를 전환
~~~

### Branch 병합
~~~
$ git merge <branch_name> # 현재 작업중인 branch를 원하는 branch에 병합
~~~

### Branch 삭제
~~~
$ git branch -d <branch_name> # git branch -d <branch 이름> 을 통해 branch 삭제
~~~

## GitHub
Github는 분산 버전 관리 툴인 Git 저장소 호스팅을 지원하는 웹 서비스이다. Ruby on Rails로 작성되었다. GitHub는 영리적인 서비스와 오픈소스를 위한 무상 서비스를 모두 제공한다. 2009년의 Git 사용자 조사에 따르면 GitHub는 가장 인기있는 Git 저장소 호스팅 서비스이다.([위키백과](https://ko.wikipedia.org/wiki/%EA%B9%83%ED%97%88%EB%B8%8C))
