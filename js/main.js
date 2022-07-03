$(document).ready(function(){
    // 화면에 처음 접속했을때 실행해라 
    $('header nav > ul > li').hover(function(){
        $('.sub_bg').stop().slideDown(300);
        $('header').css('background-color','white'); 
    },
    function(){
        $('.sub_bg').stop().slideUp(300);
        $('header').css('background-color','transparent');
    });
    // window에 스크롤 이벤트 설정
    // 내비게이션이 하단 내려가면 배경이 하얘지면서 그림자도 생기는 거
    $(window).scroll(function(){
        var winTop=$(this).scrollTop();
        // 화면이 스크롤 되어서 올라갈때
        if(winTop > 0){
            $('header').addClass('active');
            //메인 메뉴에 마우스 오버했을때 서브배경슬라이드 다운
            $('header').css('background-color','white');
            $('header nav > ul > li').hover(function(){
                $('.sub_bg').stop().slideDown(300); //슬라이드 다운 업 괄호안에 숫자를 넣으면 실행 시간
                $('header').css('background-color','white'); //addClass라는 것 자체가 클래스만 다루는 것 그래서 액티브에 점을 안 붙인 것
            },
            function(){
                $('.sub_bg').stop().slideUp(300);
                $('header').css('background-color','white');
            });
        // 맨위의 화면이 보일때
        }else{
            $('header').removeClass('active');
            $('header').css('background-color','transparent');
            $('header nav > ul > li').hover(function(){
                $('.sub_bg').stop().slideDown(300);
                $('header').css('background-color','white'); 
            },
            function(){
                $('.sub_bg').stop().slideUp(300);
                $('header').css('background-color','transparent');
            });
        }
    });
    //메인비주얼 슬라이드
    //.num의 li a에 클릭이벤트 설정(01,02,03버튼)
    $('.num ul li').click(function(){
        //클릭한 li의 인덱스 번호를  numIndex변수에 저장
        var numIndex=$(this).index(); //(숫자를 나타내는 디스)셋중에 클릭한거 하나 그거의 인덱스 번호
        console.log(numIndex); //index번호가 검사할때 찍히게 하는거 (이거 없어도 되긴 함)

        //클릭한 번호에 밑줄 나오도록 설정
        //find()는 후손 객체에서 ()안의 객체를 찾아라
        $('.num ul li').find('a').removeClass('active');
        //클릭한 li의 후선a태그를 찾아서 active클래스 추가
        $(this).find('a').addClass('active');


        //photo ul li 개수만큼 반복, each():.반복 메서드
        $('.photo ul li').each(function(){
            //.photo ul li의 인덱스 번호를 photoIndex변수에 저장
            var photoIndex=$(this).index();
            //만약 photoIndex와 numIndex가 같다면
            if(photoIndex == numIndex){
                //모든 photo ul li 는 숨김
                $('.photo ul li').hide();
                //현재 photo ul li만 보임
                $(this).fadeIn();
            }
        });
        //.des ul li 개수만큼 반복
        $('.des ul li').each(function(){
            //.des ul li 의 인덱스 변호를 desIndex에 저장
            var desIndex=$(this).index();
            //numIndex값과 desIndex값이 같으면
            if(numIndex == desIndex){
                //모든 설명 숨김
                $('.des ul li').hide();
                //현재 활성화된 설명만 보임
                $(this).fadeIn();
            }
        });
    });
    //.btn a에 클릭이벤트 설정, .btn a를 클릭하면 자동 슬라이드가 멈추고 다시 클릭하면 자동슬라이드가 실행 (버튼 모양도 바뀜)
    var sw=0; //스위치 변수 (버튼 1개 클릭할 때마다 상태가 변할 때 사용함)
    $('.btn a').click(function(){
        //만약 sw변수 값이 0이면 sw변수의 값을 1로 수정
        if(sw==0){
            sw=1;
            //슬라이드 자동실행 멈춤 (setInterval의 반대)
            clearInterval(auto);
            //.btn a에 active 클래스 추가
            $(this).addClass('active');

        //sw변수의 값이 0 아니면 sw변수 값을 0으로 초기화
        }else{
            sw=0; //상태 바꿔서
            //다시 이걸 해줘 - 슬라이드 자동실행됨 
            auto=setInterval(fn,3000);
            //.btn a에서 active클래스 제거
            $(this).removeClass('active');
        }
    });
    //.num ul li의 인덱스박스번호를 나타내는 변수 선언
    var numLi=0;
    //3초마다 자동으로 슬라이드 실행 auto 변수 선언
    var auto=setInterval(fn,3000);
    //fn함수 선언
    function fn(){
        //.num ul li의 인덱스번호를 1씩 증가시킴
        numLi +=1;                               //하나를 증가 시켜라
        //근데 만약 인덱스번호가 2보다 커지면 0으로 가라 (초기화)
        if(numLi>2){numLi=0;}
        //numLi인덱스번호에 해당하는 li 클릭
        //eq(인덱스번호):인덱스번호에 해당하는 객체 가리킴(여기서 numLi는 우리가 만든 이름임)
        $('.num ul li').eq(numLi).click();
    }
    // product (탭메뉴)
    $('.product_list ul li').click(function(){
        $('.product_list ul li').removeClass('active');
        $(this).addClass('active');
        // li의 자식인 a태그의 href 속성을 막음 (클릭하면 위로 올라가는 거)
        // e.preventDefault()메서드와 같은 역할임
        return false;
    });
    // 첫번째 제목에 대해서만 클릭 이벤트를 줌
    $('.t1').click(function(){
        $('.product_des ul li').hide();
        $('.d1').fadeIn();
        $('.product2 ul li').hide();
        $('.img1').fadeIn();
    });
    $('.t2').click(function(){
        $('.product_des ul li').hide();
        $('.d2').fadeIn();
        $('.product2 ul li').hide();
        $('.img2').fadeIn();
    });
    $('.t3').click(function(){
        $('.product_des ul li').hide();
        $('.d3').fadeIn();
        $('.product2 ul li').hide();
        $('.img3').fadeIn();
    });
    // 자동슬라이드 (마우스 오버했을때 멈춤)
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5, //화면에 보이는 리스트 개수
        spaceBetween: 70,  //리스트의 간격
        loop: true, 
        freeMode: true,
        autoplay: { //4초마다 자동실행
            delay: 4000,
            disableOnInteraction: false
        },
        loop:true
      });
    //   자동슬라이드에 마우스 오버 했을대 멈추고, 마우스 아웃 했을때 다시 자동 슬라이드 됨
    $('.swiper').hover(function(){
        swiper.autoplay.stop();
    }, function(){
        swiper.autoplay.start();
    });
});

