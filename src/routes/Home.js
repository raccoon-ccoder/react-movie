import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Slides from "../components/slides/Slides";

// Movie 컴포넌트 이용해  api 통해 영화 데이터 가져오고 영화 목록 보여주는 역할
function Home() {

  return (
    <div>
    <Header />
      <Slides 
        title="Popular"
        api="https://yts.mx/api/v2/list_movies.json?sort_by=download_conut&limit=10"
      />
      <Slides 
        title="Action"
        api="https://yts.mx/api/v2/list_movies.json?genre=action&sort_by=year&limit=10"
      />
      <Slides 
        title="Romance"
        api="https://yts.mx/api/v2/list_movies.json?genre=romance&sort_by=year&limit=10"
      />
      <Slides 
        title="Thriller"
        api="https://yts.mx/api/v2/list_movies.json?genre=thriller&sort_by=year&limit=10"
      />
    </div>
  );
}

export default Home;