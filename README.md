## NETFLEX
> 영화 정보를 제공하는 리액트 토이 프로젝트입니다.
- 개요
  - 장르 선택에 따른 영화 목록과 각각의 영화 정보를 제공하는 서비스
  - 노마드 코더의 리액트JS로 영화 웹 서비스 만들기 강의를 기반으로 새로운 기능 추가
- 담당 구현 파트
  - React Router의 BrowserRouter를 이용한 SPA 구현 
  - useState를 통한 캐러셀 슬라이더 구현
  - fetch, YTS API를 통한 영화 정보 제공
  - 영화 장르에 따른 영화 목록, 상세 정보 조회 구현
- 기간 및 사용 기술
  - 22.03.14 ~ 22.3.19 (약 5일)
  - HTML, CSS, JavaScript, React, React-Router
- 프로젝트 둘러보기
  - [NETFLEX 바로가기](https://raccoon-ccoder.github.io/react-movie/)

## 고민 & 구현 방법
1. 영화 정보를 제공하는 Movie 컴포넌트를 재사용 가능하게 구현하는 방법
- 고민 : Movie 컴포넌트의 CSS만 변경하면서 여러 컴포넌트에서 사용할 경우, 어떻게 CSS를 변경할 수 있을까?
- 해결 : Movie 컴포넌트의 argument에 movie_style을 명시하여 부모 컴포넌트에서 사용시 원하는 스타일을 props로 전달하여 CSS를 변경할 수 있게끔 하였습니다.

<br/>    

![스크린샷 2022-03-21 오전 5 58 31](https://user-images.githubusercontent.com/77538818/159185744-95ebe5f2-905f-4521-9c81-fef0825738b6.png)     
영화 정보를 전달 받아 보여주는 Movie 컴포넌트는 movie_style라는 props를 받아 CSS를 변경합니다.    

<br/>

![스크린샷 2022-03-21 오전 5 59 52](https://user-images.githubusercontent.com/77538818/159185742-fcb65aa9-1813-4fd2-93d5-3efd8387188f.png)     
영화 슬라이드를 만드는 Slides 컴포넌트에서 Movie 컴포넌트 사용시 movie_style props를 명시하여 원하는 CSS로 나타내었습니다.

<br/>

2. useEffect의 무한 루프 해결하는 방법
- 고민 : 화면 상단의 장르 선택시 장르에 따른 영화 목록을 보여주는 List 페이지 내부 useEffect 함수는 movies state 변경시 getMovies 함수를 호출해 장르에 따른 영화 데이터를 가져온다. 그런데 getMovies 내부에도 setState 함수를 호출해 무한 루프에 빠지게 되었다. 해결하는 방법은 없을까?
- 해결 : 화면 상단의 장르를 클릭함에 따라 List 페이지의 genre라는 parameter가 변경됨에 따라 useEffect의 dependency를 genre로 설정하여 genre 변경시에만 useEffect를 호출하게끔 변경하였다.

<br/>

![스크린샷 2022-03-21 오전 6 11 55](https://user-images.githubusercontent.com/77538818/159186144-215a275a-9910-44bb-8b91-20999546830a.png)    
처음 렌더링시 getMovies 호출로 인해 setState가 발생하는데 useEffect의 dependency를 movies로 설정하여 다시 렌더링되면서 무한루프에 빠지게 된다.    

<br/>

![스크린샷 2022-03-21 오전 6 12 09](https://user-images.githubusercontent.com/77538818/159186141-9fd66ff2-5c21-48f1-a533-06644b08f030.png)     
useEffect의 dependency에 List 페이지의 genre parameter를 설정하여 사용자가 장르 재선택시 useEffect가 발생하도록 수정하였다.

## 스크린샷
### 메인화면
![ezgif com-gif-maker](https://user-images.githubusercontent.com/77538818/159177948-8c9ee16a-aca2-41f9-b4ab-2df18af0a565.gif)

### 영화 목록 페이지
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/77538818/159178132-3540ad31-5317-49b5-8b33-3bfe0080ad1a.gif)

### 상세 페이지
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/77538818/159178151-f823a18c-b162-4536-b1d6-e98a79e8bf16.gif)


