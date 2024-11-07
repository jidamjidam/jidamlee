window.addEventListener("load", function () {

  var isMobile = false;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }


  // D, T, M공통기능은 여기에 작성

  // a 태그 비활성화

  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
  });

  // visual 각 a 태그 선택시 섹션 이동


    // 모든 메뉴 항목과 섹션 요소를 가져옴
    const menuItems = document.querySelectorAll('nav a');
    const sections = {
        INTRODUCE: document.getElementById('introduce'),
        PROJECT: document.querySelector('.njobclass'),
        ARTWORK: document.querySelector('.artwork'),
        TRIPKO: document.querySelector('section.tripko'),
        SMELLZ: document.querySelector('section.smellz'),
        ETERNALMUSIC: document.querySelector('section.eternalmusic')
    };

    // 메뉴 항목 클릭 시 이벤트 처리
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 이동 방지

            // 클릭한 메뉴 항목의 텍스트에 맞는 섹션 찾기
            const sectionKey = item.textContent.trim().toUpperCase();
            const targetSection = sections[sectionKey];

            if (targetSection) {
                // 해당 섹션으로 스크롤
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // 모든 메뉴에서 active 클래스 제거 후 클릭한 항목에 추가
                menuItems.forEach(link => link.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });

    // 각 섹션마다 a 태그 업데이트
    
    const activateMenu = (sectionName) => {
        menuItems.forEach(item => item.classList.remove('active'));
        if (sectionName === 'INTRODUCE' || sectionName === 'VISUAL') {
            menuItems[0].classList.add('active'); // INTRODUCE 링크 활성화
        } else {
            menuItems[1].classList.add('active'); // PROJECT 링크 활성화
        }
    };
    

    const isInView = (element) => {
        if (!element) return false; // element가 null이나 undefined이면 false 반환
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    };
    
    // 스크롤 이벤트에 따른 섹션 활성화 상태 업데이트
    window.addEventListener('scroll', function() {
        if (isInView(sections.INTRODUCE) || isInView(sections.VISUAL)) {
            activateMenu('INTRODUCE');
        } else if (isInView(sections.PROJECT) || isInView(sections.TRIPKO) || isInView(sections.SMELLZ) || isInView(sections.ETERNALMUSIC)) {
            activateMenu('PROJECT');
        }
    });






  if (!isMobile) {


  }
  else {

    // tablet, mobile 공통은 여기에 작성



    // 모바일일 때 subs 열고 닫고

    if (screen.width >= 768) {


    }

    else {




    }
  }



});













