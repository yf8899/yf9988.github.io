var rule = {
    模板: '自动',
    title: '网飞啦[自动]',
    host: 'https://www.wangfei.la',
    url: '/vod-show-id-fyclass-page-fypage.html',
    class_parse: '.navbar-items&&li;a&&Text;a&&href;/vod-type-id-(.*?).html',
    searchUrl: '/vod-search-page-fypage-wd-**.html',
}