const displayName = 'Kenta Yoshii'
const bannerDescription = 'ブラウン大学留学中の二年生の吉居健太です。Computer Science専攻で、このサイトを通して皆さんに僕の経験であったりを共有します。ブラウン大学での留学生活をブログとしても残しているので興味のある方は拝見してみてください。'
const bannerDescription2 = "Hi! My name is Kenta Yoshii, and am currently a second year student at Brown University studying Computer Science. This website is intended to be a platform where I can share all the experiences I go through with you, the readers. I also have study abroad blogs (only available in Japanese), so if you are interested, please check them out!"
const email = 'kenta_yoshii@brown.edu'
const githubUrl = "https://github.com/KentaYoshii"
const linkedInUrl = "https://www.linkedin.com/in/kenta-yoshii-ba097a1a0/"
const resumePdfTitle = 'Kenta-Yoshii.pdf'

const projects = [
    {
        title: 'BloomO',
        description: 'A web application for plant lovers. Plant Lookup, Plant recommendation, and hardiness zone lookup are all supported.',
        stack: ['Java', 'React js', 'Spark'],
        imgName: 'plantLookup2.png',
        siteUrl: "",
        codeUrl: 'https://github.com/KentaYoshii/BloomO',
    },
    {
        title: "Related Domain Experience Replay",
        description: "A Dueling Double DQN for playing similar Atari games.",
        stack: ["tensorflow", "python"],
        imgName: "DemonAttack_max.gif",
        DEVPOST: "https://devpost.com/software/mid-diff?ref_content=user-portfolio&ref_feature=in_progress",
        codeUrl: "https://github.com/ringtack/RL-gina",
    },
    {
        title: 'KY Portfolio',
        description: 'A portfolio website.',
        stack: ['React.js'],
        imgName: 'portfolio.png',
        siteUrl: 'https://kentayoshii.github.io/mywebsite/',
        codeUrl: 'https://github.com/KentaYoshii/mywebsite',
    },
    {
        title: 'ubercool',
        description: 'Price prediction model for shared ride services given a covid-19 situation',
        stack: ['python', 'tensorflow'],
        imgName: 'results.png',
        siteUrl: '',
        codeUrl: 'https://github.com/KentaYoshii/ubercool',
    },
    {
        title: 'Animorphs',
        description: 'Experimenting with different encoding techniques to produce image morphing using StyleGAN',
        stack: ['python', 'PyTorch', 'Tensorflow'],
        imgName: 'e4e_gif.gif',
        siteUrl: '',
        codeUrl: 'https://github.com/KentaYoshii/Animorphs',
    },

]

const webLinks = [
    {
        guid: 'https://www.ryugaku.com/blog/kenta-computer-sciences.html',
        title: 'ブラウン大学のコンピュータ・サイエンス。機械学習からサイバーセキュリティまで',
        pubDate: '2022年7月26日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-winter-break.html',
        title: 'コロナ禍に冬休みで帰国。思わぬ事態が！',
        pubDate: '2022年6月29日',   
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-computer-assignments.html',
        title: '250時間かかった科目も！ コンピュータのクラスの課題とは？',
        pubDate: '2022年03月01日',
    },

    {
        guid: 'https://www.ryugaku.com/blog/kenta-deep-learning.html',
        title: 'いま話題のディープラーニング。ブラウン大学の「深層学習」の課題を紹介します！',
        pubDate: '2022年01月11日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-end-of-summer2021.html',
        title: "オレゴンからロス、そしてミシガンからボストンへ。夏休みも終わりです",
        pubDate: '2021年11月10日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-portland-host-family.html',
        title: "オレゴン州ポートランドのホストファミリーと再会！ アメリカの「家族」のありがたさを実感",
        pubDate: '2021年10月26日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-amtrak.html',
        title: "ボストンからオレゴンへ。鉄道でアメリカ横断の1人旅",
        pubDate: '2021年10月12日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-final-summer.html',
        title: "ブラウン大学の1年度が終わり、夏休みに向けた準備を開始！",
        pubDate: '2021年09月28日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-sophomore-dorm-preregistration.html',
        title: "ブラウン大学で1年を終えて。来年度に向けて寮と科目を選びました！",
        pubDate: '2021年09月08日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-final-exam-first-year.html',
        title: "ブラウン大学1年生を締めくくる期末試験。その内容を科目ごとに紹介します！",
        pubDate: '2021年08月31日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-after-coronavirus.html',
        title: "コロナが収束しつつあるブラウン大学。普通の学生生活が戻るか？",
        pubDate: '2021年08月24日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-summer-term.html',
        title: "ブラウン大学の夏学期。今期の履修科目を紹介します！",
        pubDate: '2021年07月14日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-boston-new-york.html',
        title: "ブラウン大学生活の余暇。ボストンへ！ ニューヨークへ！",
        pubDate: '2021年06月01日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-results-finals.html',
        title: "寝ずに勉強！ 留学して初の期末試験。その結果は？",
        pubDate: '2021年05月10日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta-final-assignments.html',
        title: "ブラウン大学の期末試験。何が問われ、どれだけの勉強が求められるのか？",
        pubDate: '2021年04月20日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_social_life.html',
        title: "ブラウン大学の日常。寮生活から勉強、週末の過ごしかたまで",
        pubDate: '2021年03月13日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_quarantine.html',
        title: "PCR検査は週に2回。ブラウン大学の隔離生活",
        pubDate: '2021年02月21日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_arrival_campus.html',
        title: "ついにブラウン大学に到着！ 入寮からPCR検査まで",
        pubDate: '2021年01月28日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_departure.html',
        title: "いよいよ渡米！ 2つのスーツケースと共に、ブラウン大学に向けて飛び立ちます！",
        pubDate: '2021年01月26日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_recommendation_supplement.html',
        title: "アメリカ大学受験のカギを握る「推薦状」と「大学個別のエッセー課題」について",
        pubDate: '2021年01月09日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_personal_statement.html',
        title: "100％の自分自身を表現。アメリカの大学への出願エッセーの書きかた",
        pubDate: '2021年01月08日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_application.html',
        title: "アメリカの大学受験。「僕はこういう人間」と伝えるために",
        pubDate: '2021年01月07日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_brown_university.html',
        title: "まさか！？ ブラウン大学から合格通知が！",
        pubDate: '2021年01月06日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/kenta_liberal_arts_college.html',
        title: "留学先としてリベラルアーツ・カレッジを選んだ理由",
        pubDate: '2020年07月07日',
    },
    {
        guid: 'https://www.ryugaku.com/blog/study-abroad-kenta.html',
        title: "どうしていま、アメリカの大学に留学するのか？",
        pubDate: '2020年05月12日',
    },
]

export { webLinks, projects, email, githubUrl, linkedInUrl, displayName, bannerDescription, bannerDescription2, resumePdfTitle }