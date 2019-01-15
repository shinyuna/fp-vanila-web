app.get('/advertiser/adv_campaign_management', (req, res) => {
    // if (req.session.user.auth !== 'advertiser') return res.redirect('/');

    res.send(TMPL.layout.hnmf({
        css: `
            <link rel="stylesheet" href="/front/css/advertiser/adv_campaign.css" />
        `,
        header: TMPL.layout.advHeader(),
        nav: TMPL.layout.advNav(),
        main: `
            <div id="main">
                <div class="container">
                    <div class="breadcrumbs">
                        <a>홈</a>
                        <span>캠페인 리스트</span>
                    </div>
                    <div class="state_wrap">
                        <h2 class="hide">전체 프로세스</h2>
                        <ul class="state_box">
                            <li>
                                <a>
                                    <span class="state">전체</span>
                                    <span>823 건</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="state">완료</span>
                                    <span>500 건</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="state">진행중</span>
                                    <span>200 건</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="state">취소</span>
                                    <span>123 건</span>
                                </a>
                            </li>
                        </ul>
                        <button type="button" class="camp_btn">캠페인 만들기</button>
                    </div>
                    <div class="search_wrap">
                        <h2>상세검색</h2>
                        <div class="search_word">
                            <span>검색어</span>
                            <div class="search_inbox">
                                <input type="text" class="search_txt" placeholder="인플루언서 계정(아이디), 상품명, 검색어, 상품번호, 브랜드, 제조사, 상품 브랜드">
                                <button type="button" class="search_icon"></button>
                            </div>
                        </div>
                        <div class="search_check">
                            <span>판매상태</span>
                            <div class="check_box">
                                <div class="check_tab">
                                    <input type="checkbox" name="sale_chk" id="progress">
                                    <label for="progress">진행중</label>
                                </div>
                                <div class="check_tab">
                                    <input type="checkbox" name="sale_chk" id="onsale">
                                    <span>판매중</span>
                                </div>
                                <div class="check_tab">
                                    <input type="checkbox" name="sale_chk" id="sale_complete">
                                    <span>판매완료</span>
                                </div>
                                <div class="check_tab">
                                    <input type="checkbox" name="sale_chk" id="cancel">
                                    <span>취소</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list_wrap">
                        <h2>캠페인 리스트</h2>
                        <table>
                            <caption>캠페인 리스트 등록안내 게시판</caption>
                            <colgroup>
                                <col style="width: 70px">
                                <col style="width: 280px">
                                <col style="width: 250px">
                                <col style="width: 150px">
                                <col style="width: 200px">
                                <col style="width: 100px">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" class="num">NO</th>
                                    <th scope="col" class="product_name">상품</th>
                                    <th scope="col" class="slae_term">판매기간</th>
                                    <th scope="col" class="inf ud">인플루언서</th>
                                    <th scope="col" class="start_date">캠페인 등록일</th>
                                    <th scope="col" class="camp_state ud">상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="num">1</td>
                                    <td class="product_name">
                                        <img src="/front/img/product_name_1.jpg" />
                                        <p>[무료배송]헤라 블랙 쿠션</p>
                                    </td>
                                    <td class="slae_term">2018-12-12 ~ 2019-01-01</td>
                                    <td class="inf">409명</td>
                                    <td class="start_date">2018-12-12 10:00:00</td>
                                    <td class="camp_state">
                                        <span class="check1">판매중</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="num">2</td>
                                    <td class="product_name">
                                        <img src="/front/img/product_name_1.jpg" />
                                        <p>[무료배송]헤라 블랙 쿠션</p>
                                    </td>
                                    <td class="slae_term">2018-12-12 ~ 2019-01-01</td>
                                    <td class="inf">409명</td>
                                    <td class="start_date">2018-12-12 10:00:00</td>
                                    <td class="camp_state">
                                        <span class="check2">진행중</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="num">3</td>
                                    <td class="product_name">
                                        <img src="/front/img/product_name_1.jpg" />
                                        <p>[무료배송]헤라 블랙 쿠션</p>
                                    </td>
                                    <td class="slae_term">2018-12-12 ~ 2019-01-01</td>
                                    <td class="inf">409명</td>
                                    <td class="start_date">2018-12-12 10:00:00</td>
                                    <td class="camp_state">
                                        <span class="check3">취소</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="num">4</td>
                                    <td class="product_name">
                                        <img src="/front/img/product_name_1.jpg" />
                                        <p>[무료배송]헤라 블랙 쿠션</p>
                                    </td>
                                    <td class="slae_term">2018-12-12 ~ 2019-01-01</td>
                                    <td class="inf">409명</td>
                                    <td class="start_date">2018-12-12 10:00:00</td>
                                    <td class="camp_state">
                                        <span class="check4">판매완료</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `,
        footer: ``,
        script: ``
    }));
});