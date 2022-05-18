<h2 align="center"><em>스타벅스 온라인 주문 어플리케이션 📌</em></h2>

<h2 align="center"><em>Starbucks Online Ordering App</em></h2>

```
해당 프로젝트는 평소에 즐겨가는 카페 중 하나인 스타벅스의 사이렌오더에서 아이디어를 얻었습니다.
사용자가 로그인을 한 뒤, 주문 페이지에서 메뉴를 주문하면 우측에 주문 리스트로 나타나는 형태로
작동하는 미니 프로젝트입니다.
```

<h2 align="center"><em>Execution🌎</em></h2>
<p align="center"><em><a href=/> Let's start!</a></em><br/>
<br/><em>
- 본 프로젝트는 반응형으로 제작되어, 💻과 📱에 모두 최적화 되어있습니다.<br>
- 해당 프로젝트는 github로 배포되었습니다.</em></p>
<br/>
<h2 align="center"><em>Description project 📝</em></h2>

```
* 본 프로젝트는 로그인 페이지와 메인 페이지인 주문, 미리보기 화면으로 구성되어 있습니다.

* 최초 접속시 로그인 화면이 나타나며, 로그인은 Google과 Github 계정으로 로그인이 가능합니다.
로그인 후 로그아웃을 하지 않으면, 로그인 정보가 남아있어 이후에는 접속시 바로 메인 페이지로 이동합니다.

* 주문 화면에서 메뉴를 주문합니다. ☕ 메뉴는 필수 선택항목과 추가 옵션으로 구성되어 있으며,
필수 선택항목은 선택하지 않으면 form이 제출되지 않습니다.

* 메뉴를 선택하고 주문하기 버튼을 클릭하면, 미리보기 화면에 주문한 음료의 정보가 나타납니다.

* 주문한 메뉴는 사용자별로 저장되어 페이지를 나간 뒤 다시 접속해도 주문한 메뉴 데이터가 보여집니다.
```

<h2 align="center"><em>ScreenShots📸</em></h2>
<p align="center">
<img src="https://user-images.githubusercontent.com/64456391/169024619-0d960ed2-e8e6-477e-8a4d-15a4840f12b0.jpg">
</p>
<br/>
<h2 align="center"><em>Learned 👩‍🎓</em></h2>
<br/>
<p align="center"><em>❤️ React</em></p>

```
* Function형 Component로 리액트 프로젝트를 구현하는 방법을 학습하였습니다. 

* 리액트의 기본적인 기능에 대해서 학습했습니다. (UseState, UseEffect, useRef)

* React Router의 기능에 대해 학습했습니다.

* Firebase를 통하여 로그인 기능을 구현하고 데이터를 저장하는 방법에 대해 학습했습니다.

* 비즈니스 로직을 Service로 구분하였고, Dependency Injection을 활용하여 서비스를 컴포넌트에
주입하는 방법을 학습했습니다.

* PostCSS를 사용하여 모듈화된 CSS를 구현하였습니다.
```
 
<h2 align="center"><em>Tech/Tools used🛠</em></h2>
<br/>

<p align="center">
  <img src="http://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/></a>&nbsp
  <img src="http://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/-Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/></a>&nbsp
</p>

<h2 align="center"><em>Structure Tree🌳</em></h2>

```
📦starbucks_ordering            
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂menu
 ┃ ┃ ┗ 📜logo.png
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜colors.css
 ┃ ┃ ┗ 📜size.css
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂counter
 ┃ ┃ ┃ ┣ 📜counter.jsx
 ┃ ┃ ┃ ┗ 📜counter.module.css
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜footer.jsx
 ┃ ┃ ┃ ┗ 📜footer.module.css
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜header.jsx
 ┃ ┃ ┃ ┗ 📜header.module.css
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┣ 📜login.jsx
 ┃ ┃ ┃ ┗ 📜login.module.css
 ┃ ┃ ┣ 📂menu
 ┃ ┃ ┃ ┣ 📜menu.jsx
 ┃ ┃ ┃ ┗ 📜menu.module.css
 ┃ ┃ ┣ 📂order
 ┃ ┃ ┃ ┣ 📜order.jsx
 ┃ ┃ ┃ ┗ 📜order.module.css
 ┃ ┃ ┣ 📂order_sheet
 ┃ ┃ ┃ ┣ 📜order_sheet.jsx
 ┃ ┃ ┃ ┗ 📜order_sheet.module.css
 ┃ ┃ ┗ 📂preview
 ┃ ┃ ┃ ┣ 📜preview.jsx
 ┃ ┃ ┃ ┗ 📜preview.module.css
 ┃ ┣ 📂service
 ┃ ┃ ┣ 📜auth-service.js
 ┃ ┃ ┣ 📜calculate-service.js
 ┃ ┃ ┣ 📜convert-service.js
 ┃ ┃ ┣ 📜firebase.js
 ┃ ┃ ┗ 📜menu_repository.js
 ┃ ┣ 📜app.jsx
 ┃ ┣ 📜app.module.css
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜yarn.lock
``` 

<br/>
<h2 align="center"><em>Credit🙏</em></h2>
<p align="center"><em>💜 Dream Coding Academy<br><strong>리액트 개념 정리 + 유튜브 클론 코딩 외 실전 프로젝트 완성</strong></em></p>
<p align="center"><em><strong><a href="https://academy.dream-coding.com/courses/react-basic">View lecture</strong></em></p>
