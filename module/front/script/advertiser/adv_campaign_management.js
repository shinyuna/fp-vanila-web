!function () {

    let campaign_list, campaign_state_w, campaign_state_p, campaign_state_c, campagin_state_template, campagin_sort_template;
    let count = 0, reverse, state = '';

    const Route = {
        campaignDetail: $.on('click', el => go(
            {
                id: el.target.parentNode.querySelector('.num').innerText
            },
            a => location.href = `/advertiser/adv_campaign_detail?id=${a.id}`
        ))
    };

    const Do = {
        campaignList: (campaignList) => {
            campaign_list = go(
                campaignList,
                a => template_campaign_list(a),
                b => b.join('')
            );

            $('.camp_list').innerHTML = campaign_list;

            // state에 대한 리스트
            campaign_state_w = filter(a => a.state === 'wait', campaignList);
            campaign_state_p = filter(a => a.state === 'progress', campaignList);
            campaign_state_c = filter(a => a.state === 'complete', campaignList);

            $('.state_all').innerHTML = campaignList.length;
            $('.state_wait').innerHTML = campaign_state_w.length;
            $('.state_progress').innerHTML = campaign_state_p.length;
            $('.state_complete').innerHTML = campaign_state_c.length;

            // state 탬플릿
            campagin_state_template = (campaign_state_list) => go(campaign_state_list, a => template_campaign_list(a), b => b.join(''));
            // 정렬 템플릿
            campagin_sort_template = (campaign_list, reverse) => go(sortObjKey(campaign_list, 'count', reverse), b => template_campaign_list(b), c => c.join(''));

            // 인플런서 신청자수 정렬
            $('.inf').addEventListener('click', el => {
                count ++;
                reverse = (count % 2 === 1) ? true : false;
                for (checkbox of $.all('.checkbox')){
                    if (checkbox.checked === true) {
                        state = checkbox.value;
                    }
                }
                match(state)
                    .case(a => a === '')(_ => $('.camp_list').innerHTML =go( campaignList, a=> campagin_sort_template(a, reverse)))
                    .case(a => a === 'wait')(_ => $('.camp_list').innerHTML =go(campaign_state_w, a=> campagin_sort_template(a, reverse)))
                    .case(a => a === 'progress')(_ => $('.camp_list').innerHTML =go(campaign_state_p, a=> campagin_sort_template(a, reverse)))
                    .case(a => a === 'sale_complete')(_ => $('.camp_list').innerHTML =go(campaign_state_c, a=> campagin_sort_template(a, reverse)))
                    .else(_ => alert('준비'))
            });

        },

        event: $.on('change', e => go(
            e.target,
            a => {
                for (checkbox of $.all('.checkbox')) {
                    checkbox.checked = false;
                }
                a.checked = true;
                return a;
            },
            b => match(b.value)
                .case(c => c === 'wait')(_ => $('.camp_list').innerHTML = go(campaign_state_w, a => campagin_sort_template(a)))
                .case(c => c === 'progress')(_ => $('.camp_list').innerHTML = go(campaign_state_p, a => campagin_sort_template(a)))
                .case(c => c === 'sale_complete')(_ => $('.camp_list').innerHTML = go(campaign_state_c, a => campagin_sort_template(a)))
                .else(_ => '')
            )
        ),

        searchTerm: $.on('click', '.search_icon', ({delegateTarget: dt}) => go(
            {
                searchTerm: go(dt, $.find('[name="search_txt"]'), $.trim)
            },
            a => {
                (a.searchTerm === '') ? alert('검색어를 입력해주세요') : a;
                return a;
            },
            b => location.href = `/advertiser/adv_campaign_management?searchTerm=${b.searchTerm}`
        ))
    };

    const template_campaign_list = (list) => go(
            list,
            map(item => html`
            <tr class="tr_on">
                <td class="num">${item.id}</td>
                <td class="campaign_name">
                    <img src=${item.img} alt="대표 이미지"/>
                    <p>${item.name}</p>
                </td>
                <td class="apply_term">${formatFrontDate(item.post_start_date)} ~ ${formatFrontDate(item.post_end_date)}</td>
                <td class="inf" style="text-align: center;">${item.count} 명</td>
                <td class="start_date">${formatFrontDate(item.created_at)}</td>
                <td class="camp_state">
                    <span class="check1">${formatState(item.state)}</span>
                </td>
            </tr>
        `),
        );

    global.AdvCampaignManagement = {
        Do, Route
    };
}();
