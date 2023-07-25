(() => {
  mainInit();
})();

function mainInit() {
  topMove();
  sideScroll();
  linkPrevent();
  etcRun();
  textInit();
  etcStop();
  popupOpen();
}

/* ReservationInfo */

// 위로 이동
function topMove() {
  let $topMove = document.querySelector(".inner .aside img");
  if ($topMove) {
    $topMove.addEventListener("click", (e) => {
      let ty = 0;
      window.scrollTo({ top: ty, behavior: "smooth" });
    });
  }
}

// 사이드바 이동
function sideScroll() {
  window.addEventListener("scroll", (e) => {
    let $aside = document.querySelector("#mainfo .inner .aside");
    let $footerHeight = document.querySelector("#footer");
    let y = window.scrollY;
    let h = $footerHeight.offsetTop;
    let t = y / h;

    if ($aside) {
      if (t > 0 && t < 0.7) {
        $aside.classList.add("on");
      } else if (t >= 0.7) {
        $aside.classList.remove("on");
      } else if (t === 0) {
        $aside.classList.remove("on");
      }
    }
  });
  let $xi = document.querySelector(".xi-bars");
  let $header = document.querySelector("#header");

  $xi.addEventListener("click", (e) => {
    $header.classList.toggle("on");
  });
}

// 링크 막기
function linkPrevent() {
  let $link = document.querySelectorAll('a[href="#"]');
  $link.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      // 페이지에 a의 href="#" 많으면 어떻게 할까요?
    });
  });
}

// 기타 클릭 시 텍스트창 활성화
function etcRun() {
  let $etc = document.querySelector(".surbeyForm .etcInput #rad6");
  if ($etc) {
    $etc.addEventListener("click", (e) => {
      document.getElementById("text11").disabled = false;
    });
  }
}

// 버튼 클릭 시 텍스트창 초기화
function textInit() {
  let $surbeySubmit = document.querySelector(".surbeyForm .surbeySubmit");
  let cnt = 0;
  if ($surbeySubmit) {
    $surbeySubmit.addEventListener("click", (e) => {
      if (cnt < 1) {
        e.preventDefault();
        alert("소중한 평가에 감사합니다.");
        document.getElementById("text11").value = "";
        cnt++;
      } else {
        e.preventDefault();
        alert("이미 컨텐츠 평가가 완료되었습니다.");
        document.getElementById("text11").value = "";
      }
    });
  }
}
// radio 클릭 시 기타 비활성화
function etcStop() {
  let $surbeyRadio = document.querySelectorAll(".surbeyForm input[type=radio]");
  if ($surbeyRadio) {
    $surbeyRadio.forEach((item, idx) => {
      if (idx < 5) {
        item.addEventListener("click", (e) => {
          document.getElementById("text11").disabled = true;
        });
      }
    });
  }
}

/* treatRequest */

// 팝업창 열기
function popupOpen() {
  let $popupFloor = document.querySelectorAll(
    "#mainfo .inner .parkingPopup .floorSelect ul li"
  );
  let $mapMore = document.querySelectorAll(
    "#mainfo .inner .content10 .parkingScale ul li i"
  );
  let $moreBg = document.querySelector("#wrap .moreBg");
  let $parkingPopup = document.querySelector("#mainfo .inner .parkingPopup");
  if ($moreBg) {
    $mapMore.forEach((item, idx) => {
      item.addEventListener("click", (e) => {
        let y = window.scrollY;
        $moreBg.classList.add("on");
        $parkingPopup.style.top = y + 100 + "px";
        console.log(y);
        $parkingPopup.classList.add("on");
        $popupFloor[0].classList.add("on");
      });
    });
  }

  // 클로즈 버튼으로 팝업창 닫기
  let $popupClose = document.querySelector(
    "#mainfo .inner .parkingPopup .popupHeader button"
  );
  if ($popupClose) {
    $popupClose.addEventListener("click", (e) => {
      $moreBg.classList.remove("on");
      $parkingPopup.classList.remove("on");
      for (i = 0; i < $popupFloor.length; i++) {
        $popupFloor[i].classList.remove("on");
      }
      $popupImg.setAttribute("src", "images/for_sending/03_01.jpg");
    });
  }

  // 배경 눌러 팝업창 끄기
  if ($moreBg) {
    $moreBg.addEventListener("click", (e) => {
      e.currentTarget.classList.remove("on");
      $parkingPopup.classList.remove("on");
      for (i = 0; i < $popupFloor.length; i++) {
        $popupFloor[i].classList.remove("on");
      }
      $popupImg.setAttribute("src", "images/for_sending/03_01.jpg");
    });
  }

  // 팝업 층별 안내
  let $popupImg = document.querySelector(
    "#mainfo .inner .parkingPopup .floorSelect img"
  );
  if ($popupImg) {
    $popupFloor.forEach((item, idx) => {
      item.addEventListener("click", (e) => {
        for (i = 0; i < $popupFloor.length; i++) {
          $popupFloor[i].classList.remove("on");
        }
        let popupImgNum = idx + 1;
        e.currentTarget.classList.add("on");
        $popupImg.setAttribute(
          "src",
          "images/for_sending/03_0" + popupImgNum + ".jpg"
        );
      });
    });
  }
}

// 메인 - 헤더 -푸터 //

let $topmainMenu = document.querySelector(".top-mainMenu");
let $header = document.querySelector("#header");
let $topli = document.querySelectorAll(".top-mainMenu li");
let $topmainMenuli = document.querySelectorAll(".top-mainMenu li");
let $scrollImg = document.querySelectorAll(".scrollImg>div");

//링크막기
// const common = ( ) => {
//     let $link=document.querySelectorAll('a[href="#"]');
// }

// 헤더
if ($topmainMenu) {
  $topmainMenu.addEventListener("mouseenter", (e) => {
    $header.classList.add("on");
  });
  $header.addEventListener("mouseleave", (e) => {
    $header.classList.remove("on");
  });
  $topmainMenuli.forEach((i, z) => {
    i.addEventListener("mouseenter", (e) => {
      $topmainMenuli.forEach((j, n) => {
        j.classList.remove("on");
        $scrollImg[n].classList.remove("on");
      });
      i.classList.add("on");
      $scrollImg[z].classList.add("on");
    });
  });
}

// 검색화면 온오프

let $search_menu_open = document.querySelector(".topMenu .xi-search");
let $search_menu_bord_bg = document.querySelector(".search_menu_bord_bg");
let $search_menu_bord = document.querySelector(".search_menu_bord");
let $search_menu_close = document.querySelector(".search_menu_box .xi-close");
if ($search_menu_open) {
  $search_menu_open.addEventListener("click", (e) => {
    search_menu_toggle();
  });
}
if ($search_menu_bord_bg) {
  $search_menu_bord_bg.addEventListener("click", (e) => {
    search_menu_toggle();
  });
}
if ($search_menu_close) {
  $search_menu_close.addEventListener("click", (e) => {
    search_menu_toggle();
  });
}

function search_menu_toggle() {
  $search_menu_bord_bg.classList.toggle("on");
  $search_menu_bord.classList.toggle("on");
}
// 매뉴 검색기능

let $input_search_menu = document.querySelector(".input_search_menu");
let $button_search_menu = document.querySelector(".button_search_menu");
let $search_menu_list = document.querySelector(".search_menu_list");
let menu_list_arr = [
  {
    menuid: "홈 화면",
    keyword: "메인 , 홈 , 처음 , 첫 , 병원",
    linktext: "index.html",
  },
  {
    menuid: "의료진 메인",
    keyword: "메인 , 홈 , 처음 , 첫 , 의사 , 의료진",
    linktext: "index-docter.html",
  },
  {
    menuid: "의료진 찾기",
    keyword: "의료진 , 의사 , 찾기 , 검색 , 사람",
    linktext: "SearchDoc.html",
  },
  {
    menuid: "로그인",
    keyword: "로그인 , 회원가입 , 비회원 , 예약",
    linktext: "login1.html",
  },
  {
    menuid: "주차안내도",
    keyword: "주차 , 차량 , 길 , 시설 , 편의 문병 , 방문",
    linktext: "main2parkingInfo.html",
  },
  {
    menuid: "예약안내",
    keyword:
      "요양 , 예약 , 진료 , 입원 , 방문 , 전화 , 인터넷 , 앱 , 의뢰 , 취소",
    linktext: "main1ResevationInfo.html",
  },
  {
    menuid: "진료의뢰서 발급",
    keyword: "응급 , 법률 , 장애인 , 제출 ",
    linktext: "main2treatRequest.html",
  },
  {
    menuid: "제증명 FAQ",
    keyword:
      "질문 , 궁금 , 질병명 , 상병코드 , 진단 , 입원 , 진료 , 방문 , 전화 , 취소 , 제출 , 수술 ",
    linktext: "work1.html",
  },
  {
    menuid: "병원개요",
    keyword: "소개 , 의학 , 설립 , 연구  , 진료 , 질문 , 궁금  , 방문 , 시설 ",
    linktext: "work3.html",
  },
  {
    menuid: "고객헌장",
    keyword: "인쇄 , 소개 , 다운로드  , 병원 , 설립 , 연구 ",
    linktext: "work5.html",
  },
];

if ($input_search_menu) {
  $button_search_menu.addEventListener("click", (e) => {
    Cleaning_the_menu_list();
    searchmenu_but($input_search_menu.value);
  });
}

function searchmenu_but(SearchText) {
  let Search_result_list = [];

  menu_list_arr.forEach((it, j) => {
    if (it.menuid.includes(SearchText) || it.keyword.includes(SearchText)) {
      Search_result_list.push(it);
    }
  });
  if (Search_result_list.length === 0) {
    alert("검색결과가 없습니다.");
  }

  if (Search_result_list.length !== 0) {
    Search_result_list.forEach((i) => {
      let creatediv = document.createElement("li");
      creatediv.innerHTML = `<a href="${i.linktext}">${i.menuid}</a>`;
      creatediv.classList.add("Search_esults");

      $search_menu_list.append(creatediv);
    });
  }
}
function Cleaning_the_menu_list() {
  let Cleaning_target = document.querySelectorAll(".Search_esults");
  Cleaning_target.forEach((i) => {
    i.remove();
  });
}

// 컨텐츠 베너

let $viewvenner = document.querySelector(".view-venner");
let $lbut = document.querySelector(".view-venner-l");
let $rbut = document.querySelector(".view-venner-r");
let viewcurrent = 1;
let viewpx = [0, -1400, -2450, -3850];

if ($lbut) {
  $lbut?.addEventListener("click", (e) => {
    viewcurrent--;
    $viewvenner.style.transitionDuration = `0.5s`;
    if (viewcurrent <= 0) {
      benner();
      setTimeout(() => {
        $viewvenner.style.transform = `translateX(-2450px)`;
        $viewvenner.style.transitionDuration = `0s`;
        viewcurrent = 2;
        benner();
      }, 500);
    } else {
      $viewvenner.style.transitionDuration = `0.5s`;
      benner();
    }
  });
}

if ($rbut) {
  $rbut?.addEventListener("click", (e) => {
    viewcurrent++;
    $viewvenner.style.transitionDuration = `0.5s`;
    if (viewcurrent >= 3) {
      benner();
      setTimeout(() => {
        $viewvenner.style.transform = `translateX(-1400px)`;
        $viewvenner.style.transitionDuration = `0s`;
        viewcurrent = 1;
      }, 500);
    } else {
      $viewvenner.style.transitionDuration = `0.5s`;
      benner();
    }
  });
}

function benner() {
  $viewvenner.style.transform = `translateX(${viewpx[viewcurrent]}px)`;
}

//  뉴스 베너

let $news_benner = document.querySelector(".news-item-benner");
let $news_but_l = document.querySelector(".news-but-l");
let $news_but_r = document.querySelector(".news-but-r");
let newscurrent = 2;
let newspx = [
  0, -330, -660, -990, -1320, -1650, -1980, -2310, -2640, -2970, -3300,
];

if ($news_but_l) {
  $news_but_l?.addEventListener("click", (e) => {
    newscurrent--;
    console.log(newscurrent);
    $news_benner.style.transitionDuration = `0.5s`;
    if (newscurrent <= 0) {
      newsbenner();
      setTimeout(() => {
        $news_benner.style.transform = `translateX(-2640px)`;
        $news_benner.style.transitionDuration = `0s`;
        newscurrent = 9;
        newsbenner();
      }, 500);
    } else {
      $news_benner.style.transitionDuration = `0.5s`;
      newsbenner();
    }
  });
}

if ($news_but_r) {
  $news_but_r?.addEventListener("click", (e) => {
    newscurrent++;
    console.log(newscurrent);
    $news_benner.style.transitionDuration = `0.5s`;
    if (newscurrent >= 10) {
      newsbenner();
      setTimeout(() => {
        $news_benner.style.transform = `translateX(-330px)`;
        $news_benner.style.transitionDuration = `0s`;
        newscurrent = 1;
      }, 500);
    } else {
      $news_benner.style.transitionDuration = `0.5s`;
      newsbenner();
    }
  });
}

function newsbenner() {
  $news_benner.style.transform = `translateX(${newspx[newscurrent]}px)`;
}

//공지사항 배너

let $notice_benner = document.querySelector(".notice-benner");
let $notice_li = document.querySelectorAll(".notice .inner>ul li");
let noticeCut = 0;
let noticepx = [
  0, -280, -560, -840, -1120, -1400, -1680, -1960, -2240, -2520, -2800,
];
if ($notice_li) {
  $notice_li?.forEach((i, dex) => {
    i.addEventListener("click", (e) => {
      $notice_li.forEach((j) => {
        j.classList.remove("on");
      });
      i.classList.add("on");
      noticeCut = dex;
      $notice_benner.style.transform = `translateX(${noticepx[noticeCut]}px)`;
    });
  });
}

// 타이머

let viewtimerCut = 1;
let newstimerCut = 1;
let noticetimerCut = 1;

let viewbennerTimer;
let newsbennerTimer;
let noticebennerTimer;

// 최상단 베너

function viewtimeinterval() {
  viewbennerTimer = setInterval(() => {
    if ($viewvenner) {
      viewtimerCut++;
      viewcurrent++;
      $viewvenner.style.transitionDuration = `0.5s`;
      if (viewcurrent >= 3) {
        benner();
        setTimeout(() => {
          $viewvenner.style.transform = `translateX(-1400px)`;
          $viewvenner.style.transitionDuration = `0s`;
          viewcurrent = 1;
        }, 500);
      } else {
        $viewvenner.style.transitionDuration = `0.5s`;
        benner();
      }
    }
  }, 2500);
}

// 뉴스베너
function newstimeinterval() {
  newsbennerTimer = setInterval(() => {
    if ($news_benner) {
      newstimerCut++;
      newscurrent++;
      $news_benner.style.transitionDuration = `0.5s`;
      if (newscurrent >= 10) {
        newsbenner();
        setTimeout(() => {
          $news_benner.style.transform = `translateX(-330px)`;
          $news_benner.style.transitionDuration = `0s`;
          newscurrent = 1;
        }, 500);
      } else {
        $news_benner.style.transitionDuration = `0.5s`;
        newsbenner();
      }
    }
  }, 2000);
}

// 공지베너

function noticetimeinterval() {
  noticebennerTimer = setInterval(() => {
    if ($notice_li) {
      noticetimerCut++;
      noticeCut++;
      if (noticeCut == 8) {
        noticeCut = 0;
      }
      $notice_li?.forEach((j) => {
        j.classList.remove("on");
      });
      $notice_li[noticeCut]?.classList.add("on");
      if ($notice_benner) {
        $notice_benner.style.transform = `translateX(${noticepx[noticeCut]}px)`;
      }
    }
  }, 2500);
}

viewtimeinterval();
newstimeinterval();
noticetimeinterval();

// 마우스 올렸을시 베너 정지

function stopview() {
  clearInterval(viewbennerTimer);
}
function stopnews() {
  clearInterval(newsbennerTimer);
}
function stopnotice() {
  clearInterval(noticebennerTimer);
}

// 상단배너 정지
if ($viewvenner) {
  $viewvenner.addEventListener("mouseover", stopview);
}

// 뉴스배너 정지
if ($news_benner) {
  $news_benner.addEventListener("mouseover", stopnews);
}

// 공지사항 배너 정지
if ($notice_benner) {
  $notice_benner.addEventListener("mouseover", stopnotice);
}

// 마우스 내리면 배너 재시작
//상단 배너 재시작
if ($viewvenner) {
  $viewvenner.addEventListener("mouseout", (e) => {
    stopview();
    viewtimeinterval();
  });
}

//뉴스배너 재시작

if ($news_benner) {
  $news_benner.addEventListener("mouseout", (e) => {
    stopnews();
    newstimeinterval();
  });
}

// 공지사항 배너 재시작
if ($notice_benner) {
  $notice_benner.addEventListener("mouseout", (e) => {
    stopnotice();
    noticetimeinterval();
  });
}

// 리모컨 클릭이벤트

let $Qmenuli = document.querySelectorAll(".Quick_menu ul li");
if ($Qmenuli) {
  $Qmenuli?.forEach((i, dex) => {
    i.addEventListener("click", (e) => {
      // $Qmenuli.forEach(j => {
      //     j.classList.remove('on');
      // })
      // i.classList.add('on');
      if (dex == 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (dex == 1) {
        window.scrollTo({ top: 450, behavior: "smooth" });
      }
      if (dex == 2) {
        window.scrollTo({ top: 1000, behavior: "smooth" });
      }
      if (dex == 3) {
        window.scrollTo({ top: 1500, behavior: "smooth" });
      }
      if (dex == 4) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

// 스크롤 위치감지 리모컨 클레스 on

if ($Qmenuli) {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 000 && window.scrollY <= 449) {
      $Qmenuli?.forEach((j) => {
        j.classList.remove("on");
      });
      $Qmenuli[0]?.classList.add("on");
    }
    if (window.scrollY >= 450 && window.scrollY <= 999) {
      $Qmenuli?.forEach((j) => {
        j.classList.remove("on");
      });
      $Qmenuli[1]?.classList.add("on");
    }
    if (window.scrollY >= 1000 && window.scrollY <= 1499) {
      $Qmenuli?.forEach((j) => {
        j.classList.remove("on");
      });
      $Qmenuli[2]?.classList.add("on");
    }
    if (window.scrollY >= 1500) {
      $Qmenuli?.forEach((j) => {
        j.classList.remove("on");
      });
      $Qmenuli[3]?.classList.add("on");
    }
  });
}

// 검색 기능 구현
let $input_search = document.querySelector(".input_search");
let $button_search_doc = document.querySelector(".button_search_doc");
let $search_doc_output = document.querySelector(".search_doc_output");
let $Department = document.querySelector(".Department");
// 의사 정보
let docter_list = [
  //가정의학과
  {
    doc_Name: "강희철",
    Area: "피로, 건강증진, 평생건강관리, 약물남용, 다발성복합증상",
    department: "가정의학과",
    imgurl: "1-1",
  },
  {
    doc_Name: "강희택",
    Area: "장기 암생존자 관리, 만성피로, 대사증후군, 만성질환 관리, 건강증진, 암환자(통증)",
    department: "가정의학과",
    imgurl: "1-2",
  },
  {
    doc_Name: "김지혜",
    Area: "건강 증진 및 질병 예방 비만진료 불가",
    department: "가정의학과",
    imgurl: "1-3",
  },
  {
    doc_Name: "이지원",
    Area: "대사증후군, 비만, 영양, 이상지질혈증, 노인의학, 성인병관리, 만성피로, 다발성 복합증상 ,영양대사클리닉",
    department: "가정의학과",
    imgurl: "",
    imgurl: "1-4",
  },
  //간담췌외과
  {
    doc_Name: "강창무",
    Area: "췌장암, 담도암, 췌담도계양성질환, 로봇 및 복강경수술",
    department: "간담췌외과",
    imgurl: "2-1",
  },
  {
    doc_Name: "김경식",
    Area: "간암, 간문부암, 담도암, 간담도계양성질환, 복강경수술",
    department: "간담췌외과",
    imgurl: "2-2",
  },
  {
    doc_Name: "김성현",
    Area: "췌장암, 간암, 담도암, 간췌담도계양성질환, 로봇 및 복강경수술",
    department: "간담췌외과",
    imgurl: "2-3",
  },
  {
    doc_Name: "최기홍",
    Area: "간암, 간이식, 간문부암, 담도암, 간담도계양성질환, 복강경 및 로봇수술",
    department: "간담췌외과",
    imgurl: "2-4",
  },
  {
    doc_Name: "최진섭",
    Area: "간, 간암, 간이식, 간담췌외과, 복강경 및 로봇수술",
    department: "간담췌외과",
    imgurl: "2-5",
  },
  {
    doc_Name: "한대훈",
    Area: "간암, 간이식, 간문부담관암, 전이암, 복강경/로봇 수술",
    department: "간담췌외과",
    imgurl: "2-6",
  },
  //감염내과
  {
    doc_Name: "구남수",
    Area: "감염질환, 발열질환, 의료관련감염, 패혈증, 에이즈",
    department: "감염내과",
    imgurl: "3-1",
  },
  {
    doc_Name: "김정호",
    Area: "감염질환, 발열질환, 의료관련감염, 패혈증, 에이즈",
    department: "감염내과",
    imgurl: "3-2",
  },
  {
    doc_Name: "안진영",
    Area: "감염질환, 발열질환, 에이즈, 여행자감염, 패혈증, 면역저하자 감염",
    department: "감염내과",
    imgurl: "3-3",
  },
  {
    doc_Name: "염준섭",
    Area: "말라리아,뎅기열등열대풍토병, 감염질환, 발열질환, 여행자감염, 폐외결핵, 에이즈, 해외 여행자 예방접종",
    department: "감염내과",
    imgurl: "3-4",
  },
  {
    doc_Name: "정수진",
    Area: "감염질환, 발열질환, 에이즈, 여행자감염, 패혈증, 면역저하자 감염 ",
    department: "감염내과",
    imgurl: "3-5",
  },
  {
    doc_Name: "최준용",
    Area: "감염질환, 발열질환, 의료관련감염, 패혈증, 에이즈",
    department: "감염내과",
    imgurl: "3-6",
  },
  // {docn_Name : '' , Area : '', department : ''}, 형식
];
if ($button_search_doc) {
  $button_search_doc.addEventListener("click", (e) => {
    Cleaning_the_list();
    searchDoctors($input_search.value);
  });
  $Department.addEventListener("change", (e) => {
    Cleaning_the_list();
    searchDoctors($Department.value);
  });
}

function searchDoctors(SearchText) {
  let Search_result_list = [];

  docter_list.forEach((it, j) => {
    if (
      it.doc_Name.includes(SearchText) ||
      it.Area.includes(SearchText) ||
      it.department.includes(SearchText)
    ) {
      Search_result_list.push(it);
    }
  });
  if (Search_result_list.length === 0) {
    alert("검색결과가 없습니다.");
  }

  if (Search_result_list.length !== 0) {
    Search_result_list.forEach((i) => {
      let creatediv = document.createElement("div");
      creatediv.innerHTML = `<img src="./images/search_doc/${i.imgurl}.jpg" alt="">
            <strong>${i.doc_Name}</strong>
            <p>${i.Area}</p>
            `;
      creatediv.classList.add("Search_esults");

      $search_doc_output.append(creatediv);
    });
  }
}
function Cleaning_the_list() {
  let Cleaning_target = document.querySelectorAll(".Search_esults");
  Cleaning_target.forEach((i) => {
    i.remove();
  });
}

//////////   - work 페이지 - /////////

// 웹 페이지 확대, 축소

var nowZoom = 100;

function zoomIn() {
  nowZoom = nowZoom - 10;
  if (nowZoom <= 70) nowZoom = 70;
  zooms();
}

function zoomOut() {
  nowZoom = nowZoom + 20;
  if (nowZoom >= 500) nowZoom = 500;
  zooms();
}

function zooms() {
  document.body.style.zoom = nowZoom + "%";

  if (nowZoom == 70) {
    alert("30% 축소 되었습니다. 더 이상 축소할 수 없습니다.");
  }

  if (nowZoom == 500) {
    alert("500% 확대 되었습니다. 더 이상 확대할 수 없습니다.");
  }
}

// URL 복사
let nowUrl = window.location.href;

function copyUrl() {
  navigator.clipboard.writeText(nowUrl).then((res) => {
    alert("URL 주소가 복사되었습니다.");
  });
}

// 파일 다운로드

///// 로그인 부분 /////

/* login 1page */
let login = document.querySelector(" #LogIn .leftLogIn .login_id");
let background = document.querySelector(" #LogIn .memberLogin");
let background2 = document.querySelector(".non-memberLogin");
let nonlogin_name = document.querySelector(".rightLogIn  #name");
let nonlogin = document.querySelector(".rightLogIn .nonlogin");
let login_Subscription = document.querySelector(
  " .Subscription_button_image .login_Subscription_image"
);
let nonlogin_Subscription = document.querySelector(
  " .Subscription_button_image .nonlogin_Subscription_image"
);
let login_area = document.querySelector("#LogIn .leftLogIn");
let nonlogin_area = document.querySelector("#LogIn .rightLogIn");
let Subscription_button_image = document.querySelector(
  ".inner .Subscription_button_image"
);
let login_icon = document.querySelector(".memberLogin i");
let nonlogin_icon = document.querySelector(".non-memberLogin i");
let Consent_To_use = document.querySelector("#Consent_To_use");
let naverLogin = document.querySelector("#LogIn .leftLogIn .naverLogIn");
let login_button = document.querySelector("#LogIn .login");
let login_password = document.querySelector("#LogIn .login_password");

if (nonlogin) {
  nonlogin.addEventListener("click", (e) => {
    let edical_examination_ticket = document.querySelector(
      ".rightLogIn #edical_examination_ticket"
    ).value;
    let Authentication_Number = document.querySelector(
      ".rightLogIn #Authentication_Number"
    ).value;
    let callNumber = document.querySelector(".rightLogIn #callNumber").value;
    let non_loginname = nonlogin_name.value;
    let numberPattern = /^[0-9]+$/;
    let koreanPattern = /^[ㄱ-ㅎ가-힣]+$/;

    if (
      !numberPattern.test(edical_examination_ticket) ||
      !numberPattern.test(Authentication_Number) ||
      !numberPattern.test(callNumber)
    ) {
      alert("진찰권 번호, 휴대폰 번호 및 승인번호에는 숫자만 입력해주세요");
    } else if (!koreanPattern.test(non_loginname)) {
      alert("잘못 입력하셨습니다. 이름을 다시 입력해주세요");
    } else if (!Consent_To_use.checked) {
      alert("개인정보 수집에 동의하지 않으셨습니다. 다시 확인해주세요");
    } else {
    }
  });
}

if (login_Subscription) {
  login_Subscription.addEventListener("click", (e) => {
    Subscription_button_image.style.display = "none";
    login_area.style.left = "25%";
    login_area.style.transition = "0.5s";
  });
}
if (nonlogin_Subscription) {
  nonlogin_Subscription.addEventListener("click", (e) => {
    Subscription_button_image.style.display = "none";
    nonlogin_area.style.left = "25%";
    nonlogin_area.style.transition = "0.5s";
  });
}
if (login) {
  login.addEventListener("click", (e) => {
    let text_login_icon = document.querySelector(".memberLogin h2");
    background.style.background = "#B8A982";
    login_icon.style.color = "#fff";
    text_login_icon.style.color = "#fff";
  });
}
if (nonlogin_name) {
  nonlogin_name.addEventListener("click", (e) => {
    let text_nonlogin_icon = document.querySelector(".non-memberLogin h2");
    background2.style.background = "#B8A982";
    nonlogin_icon.style.color = "#fff";
    text_nonlogin_icon.style.color = "#fff";
  });
}
if (naverLogin) {
  naverLogin.addEventListener("click", (e) => {
    window.open(
      "https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com",
      "_blank",
      "width=500,height=700"
    );
  });
}
if (login_button) {
  login_button.addEventListener("click", (e) => {
    if (login.value === "" || login_password.value === "") {
      alert("아이디와 비밀번호를 다시 입력해주세요");
    }
  });
}
/* login 2page  */
let Agree_to_join_checkbox = document.querySelector("#Agree_to_join_checkbox");
let Acceptance_of_Terms_and_Conditions_checkbox = document.querySelector(
  "#Acceptance_of_Terms_and_Conditions_checkbox"
);
let Consent_to_personal_information_checkbox = document.querySelector(
  "#Consent_to_personal_information_checkbox"
);
let Agree_all_to_join_checkbox = document.querySelector(
  "#Agree_all_to_join_checkbox"
);
let nextpage = document.querySelector(".move_page .nextpage");
let the_right_to_refuse_consent_h3 = document.querySelector(
  ".the_right_to_refuse_consent h3"
);
let the_right_to_refuse_consent_p = document.querySelector(
  ".the_right_to_refuse_consent p"
);
let the_registration_process = document.querySelector(
  ".the_registration_process"
);
let the_registration_process_li = document.querySelectorAll(
  ".the_registration_process li"
);
let the_registration_process_li_button = document.querySelectorAll(
  ".the_registration_process li button"
);
let the_registration_process_li_i = document.querySelectorAll(
  ".the_registration_process li button i"
);
let mainpage = document.querySelector(".mainpage");
let num = 0;

if (Consent_to_personal_information_checkbox) {
  if (nextpage) {
    nextpage.addEventListener("click", (e) => {
      if (
        !Agree_to_join_checkbox.checked ||
        !Acceptance_of_Terms_and_Conditions_checkbox.checked ||
        !Consent_to_personal_information_checkbox ||
        !Agree_all_to_join_checkbox
      ) {
        alert("약관 동의를 눌러주세요");
      } else {
        window.location.href = "login3.html";
      }
    });
  }
  if (Consent_to_personal_information_checkbox) {
    Consent_to_personal_information_checkbox.addEventListener("change", (e) => {
      the_right_to_refuse_consent_h3.style.color = "#4067F2";
      the_right_to_refuse_consent_p.style.color = "#4067F2";
      the_right_to_refuse_consent_p.addEventListener("click", (e) => {
        window.open("login2_popup.html", "_blank", "width=500 height=300");
      });
    });
  }
}

the_registration_process_li_button.forEach((item) => {
  item.addEventListener("click", (e) => {
    the_registration_process_li_button.forEach((litem) => {
      litem.classList.remove("on");
    });
    e.currentTarget.classList.add("on");
    the_registration_process_li_i.forEach((li_i) => {
      li_i.classList.remove("on");
    });
    e.currentTarget.firstElementChild.classList.add("on");
  });
});

let timeid = setInterval(() => {
  the_registration_process_li_button.forEach((litem, index) => {
    litem.classList.remove("on");
  });
  the_registration_process_li_i.forEach((li_i, index) => {
    li_i.classList.remove("on");
  });
  num++;
  if (num >= 4) {
    num = 0;
  }
  if (
    the_registration_process_li_button.length === 0 ||
    the_registration_process_li_i.length === 0
  ) {
    return;
  }
  the_registration_process_li_button[num].classList.add("on");
  the_registration_process_li_i[num].classList.add("on");
}, 3000);

if (mainpage) {
  mainpage.addEventListener("click", (e) => {
    window.location.href = "index-docter.html";
  });
}

/* login 3page  */
let Medical_membership_certification = document.querySelectorAll(
  ".Medical_membership_certification ul li"
);
let Identification_check = document.querySelectorAll(".Identification_check");
let Authenticating = document.querySelector(".inner .Authenticating");
let username2 = document.querySelector(".join_membership .username");
let phone_Number_Input1 = document.querySelector(
  ".join_membership #phone_Number_Input1"
);
let phone_Number_Input2 = document.querySelector(
  ".join_membership #phone_Number_Input2"
);
let phone_Number_Input3 = document.querySelector(
  ".join_membership #phone_Number_Input3"
);
let naver_button = document.querySelector(".join_membership .naver_button");
let Find_Address_button = document.querySelector(
  ".join_membership .Find_Address_button"
);
let naver_ID = document.querySelector(".join_membership #Naver_ID");
let E_mail = document.querySelector(".join_membership #E_mail");
let Registration_ID = document.querySelector(
  ".join_membership .Registration_ID"
);
let ID_Duplicate_check = document.querySelector(
  ".join_membership .ID_Duplicate_check"
);
let Resident_registration_number = document.getElementById(
  "Resident_registration_number"
);
let Patient_number = document.getElementById("Patient number");
let registration_number_tr = document.querySelector(
  ".Identification_check .registration_number_tr"
);
let consultation_number_tr = document.querySelector(
  ".Identification_check .consultation_number_tr"
);
let Sign_up_button = document.querySelector(".Sign_up_button");
let litable = null;

if (Authenticating) {
  Authenticating.addEventListener("click", (e) => {
    let username = document.querySelector(".Identification_check.on .username");
    let phone_number_authentication1 = document.querySelector(
      ".Identification_check.on #phone_number_authentication1"
    );
    let phone_number_authentication2 = document.querySelector(
      ".Identification_check.on #phone_number_authentication2"
    );
    let phone_number_authentication3 = document.querySelector(
      ".Identification_check.on #phone_number_authentication3"
    );
    if (username.value.length < 3) {
      alert("이름이 너무 짧습니다. 다시 입력해주세요.");
    } else {
      username2.value = username.value;
    }
    if (
      phone_number_authentication1.value.length < 2 ||
      phone_number_authentication2.value.length < 3 ||
      phone_number_authentication3.value.length < 4
    ) {
      alert("휴대폰 번호가 너무 짧습니다. 다시 입력해주세요.");
    } else {
      alert("인증이 완료되었습니다");
      phone_Number_Input1.value = phone_number_authentication1.value;
      phone_Number_Input2.value = phone_number_authentication2.value;
      phone_Number_Input3.value = phone_number_authentication3.value;
    }
  });
}

if (Resident_registration_number) {
  Resident_registration_number.addEventListener("change", (e) => {
    if (Resident_registration_number.checked) {
      registration_number_tr.style.display = "contents";
      consultation_number_tr.style.display = "none";
    }
  });
}
if (Patient_number) {
  Patient_number.addEventListener("change", (e) => {
    if (Patient_number.checked) {
      registration_number_tr.style.display = "none";
      consultation_number_tr.style.display = "contents";
    }
  });
}

Medical_membership_certification.forEach((item) => {
  item.addEventListener("click", (e) => {
    litable = item.dataset.id;
    Medical_membership_certification.forEach((litem) => {
      litem.classList.remove("on");
    });
    e.currentTarget.classList.add("on");
    Identification_check.forEach((tableList) => {
      tableList.classList.remove("on");
    });
    document.getElementById(litable).classList.add("on");
  });
});

if (naver_button) {
  naver_button.addEventListener("click", (e) => {
    window.open(
      "https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com",
      "_blank",
      "width=500,height=700"
    );
  });
}
if (Find_Address_button) {
  Find_Address_button.addEventListener("click", (e) => {
    window.open(
      "https://www.juso.go.kr/info/RoadNameDataList.do?type=search&roadCd=&keyword=&city1=11&county1=680&town1=&searchType=0&extend=true",
      "_blank",
      "width=700,height=900"
    );
  });
}

if (ID_Duplicate_check) {
  ID_Duplicate_check.addEventListener("click", (e) => {
    if (
      Registration_ID.value.length < 13 &&
      Registration_ID.value.length >= 6
    ) {
      alert("인증이 완료되었습니다.");
    } else {
      alert("잘못 입력하셨습니다. 다시 입력해 주세요.");
    }
  });
}

if (naver_ID) {
  naver_ID.addEventListener("change", (e) => {
    E_mail.value = "naver.com";
  });
}
if (Sign_up_button) {
  Sign_up_button.addEventListener("click", (e) => {
    window.location.href = "login4.html";
  });
}

let nonlogin_page4 = document.querySelector(".nonmember .nonlogin_page4");

if (nonlogin_page4) {
  nonlogin_page4.addEventListener("click", (e) => {
    window.location.href = "login1.html";
  });
}
