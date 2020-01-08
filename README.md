# 마크카페 웹
마크카페는 [우리들의 마인크래프트 공간 초심자 가이드](https://cafe.naver.com/minecraftgame/1677174)를 작성하기 위해 만들어진 스크립트입니다. 마크다운 문서를 네이버 카페에 업로드해도 가독성 좋은 HTML 문서로 변환합니다.

이 사이트를 이용하면 마크다운 문서를 네이버 카페에 업로드할 수 있는 HTML 문서로 변환할 수 있습니다.

깃허브 저장소를 통해 여러 마크다운 문서를 HTML로 변환하고 관리하고 싶다면 [마크카페 템플릿](https://github.com/finalchild/markcafe-template)을 이용해 주세요.

## 사용
### 마크다운 문서 작성
`articles` 디렉터리를 만들어 그 안에 마크다운 문서 파일을 작성합니다. 이미지는 `images` 디렉터리(루트 바로 아래)를 만들어 넣습니다. `images` 폴더에 있는 이미지를 마크다운에 삽입할 때에는 `![](images/<이미지 파일명>)`처럼 경로가 `images/`로 시작하도록 합니다.

일반적인 마크다운과 몇 가지 다르게 동작하는 부분이 있습니다.

#### 단일 줄바꿈
기본적으로 단일 줄바꿈은 `<br>` 태그로 취급됩니다.

#### 이미지 태그
`![]()` 구문으로 이미지를 삽입할 때, 그 구문이 다른 구문 안에 중첩된 것이 아니면 다음 규칙이 적용됩니다.

`<div class="img-wrapper">` 태그로 감싸집니다. 감싸진 이미지의 너비는 기본적으로 `668.7px`입니다.

#### 팁 구문
아래와 같은 구문은 팁으로 꾸며집니다.
~~~
```tip
팁 내용1
팁 내용2
```
~~~

## 네이버 카페에 HTML 업로드
브라우저에 [탬퍼멍키](https://www.tampermonkey.net/) 확장을 설치하고, [우리의 카페테리아](https://openuserjs.org/scripts/finalchild/Our_Cafeteria) 스크립트를 설치하면 게시글 작성 창에 아래와 같이 HTML 편집 버튼이 나타납니다.

![우리의 카페테리아 스크린숏](https://i.imgur.com/yauzGbb.png)

변환된 HTML 문서를 복사하여 HTML 편집기에 붙여 넣으면 됩니다.

## 예시
### 우리들의 마인크래프트 공간 초심자 가이드
* [깃허브 저장소](https://github.com/finalchild/our-mc-tutorial)
* [네이버 카페 게시글](https://cafe.naver.com/minecraftgame/1677174)

## 라이선스
```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
```
