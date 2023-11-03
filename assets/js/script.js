$(function(){
    // intro animation =======================================
    const percentInner = $('.intro-wrapper .intro-content');
    const percentImg = $('.intro-content .percent-inner .img-box');

    let introTl = gsap.timeline({});
    introTl.to(percentImg, {y: '-100%', duration: 2.5, ease: 'power4.out'});
    introTl.to(percentInner, {opacity: 0, duration: 2});
    introTl.to('.intro-wrapper', {opacity: 0, duration: 2});
    introTl.to('.intro-wrapper', {display: 'none', duration: 5});


    // sc-about animation ====================================
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.sc-about .img-box', {
        y: 100,
        duration: 5,
        scrollTrigger: {
            trigger: '.sc-about .img-box',
            start: 'bottom center',
            end: 'top top',
            scrub: 1,
            onUpdate: (self) => {
                // 트리거 이벤트 내의 실시간 스크롤 진행값
                let progress = self.progress;
        
                gsap.to('.sc-about .img-box',{
                    rotation: `-${progress * 100}%`});
                },
        }
    });

    // sc-work modal ====================================
    $('.sc-work .link-group .full').click(function(e){
        e.preventDefault();
        let workUrl = $(this).attr("href");
        let siteEL = `
            <div class="site-area">
                <div class="site-content">
                    <iframe src="${workUrl}" frameborder="0"></iframe>
                </div>
                <button class="site-btn"><span class="material-icons">close</span></button>
            </div>
        `
        $('.sc-work').append(siteEL);
    });

    //moblie
    $('.sc-work .link-group .moblie').click(function(e){
        e.preventDefault();
        let workUrl = $(this).attr("href");
        let urlValue = workUrl.replace(/^https?:\/\//,'');
        let siteEL = `
            <div class="site-area moblie">
                <div class="site-content">
                    <div class="phone-graphic">
                        <div class="phone-case">
                            <div class="phone-container-outer">
                                <div class="phone-container-inner">
                                    <div class="phone-header">
                                        <p class="phone-header-time">1:02</p>
                                        <p class="phone-header-icons">
                                            <span class="material-icons">signal_cellular_alt</span>
                                            <span class="material-icons">wifi</span>
                                            <span class="material-icons battery">battery_std</span>
                                        </p>
                                        <div class="phone-url-box">
                                            <p class="url">${urlValue}</p>
                                            <span class="material-icons share">ios_share</span>
                                        </div>
                                    </div>
                                    <div class="iframe-box">
                                        <iframe src="${workUrl}" frameborder="0"></iframe>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="site-btn"><span class="material-icons">close</span></button>
            </div>
        `
        $('.sc-work').append(siteEL);
    });

    $(document).on('click', '.site-area .site-btn', function() {
        $('.site-area').remove();
    });

    // top btn ===============================================
    // scroll top animation
    $('.top-btn').click(function(){
        $('html, body').animate({
            scrollTop: 0}, 500
        );
    });

    // text color change
    // 공통 컬러 변경 효과 함수
    function updateColor(element, progress) {
        const inTrigger = progress > 0 && progress < 1;
        if (inTrigger) {
            element.css('color', '#000');
        } else {
            element.css('color', '');
        }
    }
    
    gsap.to('.top-box span', {
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: '.sc-about',
            start: 'top +=590bottom',
            end: 'bottom bottom',
            onUpdate: self => {
                updateColor($('.top-box .desc'), self.progress);
            }
        }
    });
    
    gsap.to('.top-box span', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top bottom',
            end: 'bottom',
            onUpdate: self => {
                updateColor($('.top-box span'), self.progress);
            }
        }
    });
});