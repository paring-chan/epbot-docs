module.exports = {
    title: '이프봇',
    description: '낚시 & 검열 봇!',
    themeConfig: {
        nav: [
            { text: '이프 초대하기', link: 'https://discord.com/api/oauth2/authorize?client_id=693818502657867878&permissions=126016&scope=bot' },
            { text: '키뮤의 과학실 디스코드', link: 'https://discord.gg/AmuH495BaA' },
        ],
        sidebar: [
            {
                title: '가이드',
                collapsable: false,
                children: [
                    ['/guide/', '홈'],
                    ['/guide/fish', '낚시'],
                ]
            }
        ]
    }
}