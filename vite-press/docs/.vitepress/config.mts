import { defineConfig } from 'vitepress';
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({
  teekTheme: true,
  teekHome: true,
  vpHome: false,
  loading: 'kimo拼命加载中...',
  homeCardListPosition: "left",
  anchorScroll: true,
  viewTransition: true,
  themeSize: "small",
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: TkMessage => TkMessage.success("已抵达评论区"), // 滚动到评论区后的回调
  },
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 500, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: false, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  sidebarTrigger: true,
  windowTransition: true,
  author: {
    name: "kimo", // 作者名称
    link: "https://github.com/matrix-johnjohn", // 点击作者名称后跳转的链接
  },
  banner: {
    enabled: true, // 是否启用 Banner
    name: "Kimo Blogger🎉", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: [
      "https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/index/banner/banner02.jpg?raw=true",
      "https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/index/banner/banner01.jpg?raw=true",
      "https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/index/banner/banner03.jpg?raw=true"
    ], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 5000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [
      "因为失去,所以明白;",
      "每个人都必须找到自己的使命;",
      "我宁可一开始就不认识那个人,也好过相识以后却要生死离别;"
    ], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },
  wallpaper: {
    enabled: true, // 是否启用壁纸模式
    hideBanner: false, // 开启壁纸模式后，是否隐藏 Banner
    hideMask: false, // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
  },
  post: {
    postStyle: "card", // 文章列表风格
    excerptPosition: "bottom", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "full", // 文章封面图模式
    showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: true, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [
      "https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/index/banner/banner01.jpg?raw=true",
    ],
  },
  page: {
    disabled: false, // 是否禁用
    pageSize: 20, // 每页显示条目数
    pagerCount: 7, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
    layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
    size: "default", // 分页大小
    background: false, // 是否为分页按钮添加背景色
    hideOnSinglePage: false, // 只有一页时是否隐藏
  },
  homeCardSort: ["topArticle", "category", "tag", "friendLink", "docAnalysis"],
  blogger: {
    name: "kimo", // 博主昵称
    slogan: "人心中的成见是一座大山~", // 博主签名
    avatar: "https://avatars.githubusercontent.com/u/192420957?v=4",
    shape: "circle", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/index/blogger-card/bg.jpg?raw=true", // 背景图片
    circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 100, // 头像大小
    color: "#fafafaff", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "😪", // 状态图标
      size: 24, // 图标大小
      title: "困", // 鼠标悬停图标的提示语
    },
  },
  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    emptyLabel: "暂无精选文章", // 精选文章为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
  },
  category: {
    enabled: true, // 是否启用分类卡片
    path: "/categories", // 分类页访问地址
    moreLabel: "更多 ...", // 查看更多分类标签
    emptyLabel: "暂无文章分类", // 分类为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  tag: {
    enabled: true, // 是否启用标签卡片
    path: "/tags", // 标签页访问地址
    moreLabel: "更多 ...", //  查看更多分类标签
    emptyLabel: "暂无标签", // 标签为空时的标签
    limit: 21, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
    list: [
      {
        name: "alioth",
        desc: "deeper-alioth",
        avatar: "https://dipper-alioth.github.io/docs/avatar.png",
        link: "https://dipper-alioth.github.io/docs/",
      },
    ], // 友情链接数据列表
    emptyLabel: "暂无友情链接", // 友情链接为空时的标签
    limit: 5, // 一页显示的数量
    autoScroll: false, // 是否自动滚动
    scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  docAnalysis: {
    overrideInfo: [
      {
        key: "totalPosts",
        label: "文章数量"
      },
      {
        key: "lastActiveTime",
        show: true
      }
    ],
  },
  footerInfo: {
    // 主题版权配置
    theme: {
      show: false, // 是否显示主题版权，建议显示
      name: "", // 自定义名称
      link: "", // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: false, // 是否显示博客版权
      createYear: 2021, // 创建年份
      suffix: "天客 Blog", // 后缀
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "港ICPC备2029009994号",
      link: "http://beian.miit.gov.cn/",
    },
    // 网络安全备案信息配置
    securityRecord: {
      name: "COPGH",
      link: "Copyright©2023-2025 陕西哲风云网络科技工作室",
    },
  }
});

export default defineConfig({
  base: '/kimo-blogger',
  extends: teekConfig,
  title: "Kimo Blogger",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    logo: "https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/code.png?raw=true",
    nav: [
      {
        text: 'Blogger',
        items: [
          { text: '首页', link: '/' },
          { text: '登录', link: '/login' },
          { text: '归档', link: '/archives' },
          { text: '全部分类', link: '/categories' },
          { text: '全部标签', link: '/tags' },
          { text: '需求文档', link: '/require' }
        ]
      },
      {
        text: '前端开发',
        items: [
          { text: 'node.js', link: '/articles/front/node/node.js换源' },
          {
            text: 'React.ts',
            link: '/articles/front/react/router'
          }
        ]
      },
      {
        text: '后端开发',
        items: [
          { text: 'java', link: '/articles/back/spring/java/quickstart' },
          { text: 'spring', link: '/articles/back/spring/00maven' },
          { text: 'mybatis', link: '/backend/mybatis/04mybatis-settings' }
        ]
      },
      {
        text: '服务端开发',
        items: [
          { text: 'c', link: '/articles/server/c/quick-start' },
          { text: 'cpp', link: '/articles/server/cpp/quick-start' },
          { text: 'docker', link: '/articles/server/docker/install' },
          { text: 'linux', link: '/articles/server/linux/command' }
        ]
      }
    ],

    sidebar: {
      '/articles/back/java': [
        {
          text: 'java',
          items: [

            { text: 'QuickStart', link: '/articles/back/spring/java/quickstart' },
            { text: 'WebSocket', link: '/articles/back/java/WebSocket' },
            { text: 'Interceptor', link: '/articles/back/java/Interceptor' },
            { text: 'ThreadLocal', link: '/articles/back/java/ThreadLocal' },
            { text: 'Jsoup', link: '/articles/back/java/Jsoup' },
            { text: 'JavaMail', link: '/articles/back/java/JavaMail' },
            { text: 'Jedis', link: '/articles/back/java/jedis' }
          ]
        }
      ],
      '/articles/food/': [
        {
          text: '甜的',
          items: [
            { text: '姜撞奶', link: '/articles/food/dessert/index.md' },
          ]
        },
        {
          text: '咸的',
          items: [
            { text: '豉油鸡', link: '/articles/food/salty/index.md' },
          ]
        }
      ],
      '/articles/server/linux': [
        {
          text: '指令',
          items: [
            { text: '禁止休眠', link: '/articles/server/linux/command' },
          ]
        },
      ],
      '/articles/back/Mybatis/': [
        {
          text: 'Mybatis',
          items: [
            { text: 'Mybatis配置', link: '/backend/mybatis/04mybatis-settings' },
          ]
        }
      ],
      '/articles/back/spring/': [
        {
          text: 'Spring',
          items: [
            { text: 'Maven换源', link: '/articles/back/spring/00maven' },
            { text: 'springboot搭建', link: '/articles/back/spring/05springbootBuild' },
            { text: 'springcloud', link: '/articles/back/spring/cloud/15' },
            { text: 'springcloud搭建', link: '/articles/back/spring/16springcloudBuild' },
            { text: 'Nacos注册中心搭建', link: '/articles/back/spring/17nacos' },
            { text: 'OpenFeign负载均衡', link: '/articles/back/spring/18openFeign/' },
            { text: 'GateWay网关搭建', link: '/articles/back/spring/19Gateway' },
            { text: 'Sentinel控制台搭建', link: '/articles/back/spring/20Sentinel' }
          ]
        }
      ],
      '/articles/front/node/': [
        {
          text: 'Node.js',
          items: [
            { text: 'node.js换源', link: '/articles/front/node/node.js换源' },
            { text: 'vscode配置', link: '/articles/front/node/vscod配置' }
          ]
        },
      ],
      '/articles/front/react': [
        {
          text: 'React.ts',
          items: [
            { text: 'router', link: '/articles/front/react/router' },
            { text: 'zustand', link: '/articles/front/react/zustand' },
          ]
        }
      ],
      '/articles/server/cpp/':[
        {
          text:'语言基础',
          items:[
            { text: '快速入门', link: '/articles/server/cpp/quick-start' },
            { text:'引用',link:'/articles/server/cpp/reference' },
          ]
        },
        {
          text:'面向对象编程',
          items:[
            { text:'类',link:'/articles/server/cpp/class' },
            {text:'继承',link:'/articles/server/cpp/extend'}
          ]
        }
      ],
      '/articles/server/c/': [
        {
          text: 'c',
          items: [
            { text: '环境搭建', link: '/articles/server/c/basic' },
            { text: '编程基础', link: '/articles/server/c/quick-start' },
            { text:'数据',link:'/articles/server/c/params' },
            { text:'流程控制语句',link:'/articles/server/c/control'},
            { text:'指针与内存',link:'/articles/server/c/pointer'},
            {text:'函数',link:'/articles/server/c/function'},
            {text:'字符串',link:'/articles/server/c/string'},
            {text:'结构体',link:'/articles/server/c/struct'},
            {text:'枚举',link:'/articles/server/c/enum'},
            {text:'头文件',link:'/articles/server/c/head'}
          ]
        },
        {
          text:'线性表',
          items:[
            {text:'线性表',link:'/articles/server/c/linearlist'},
            {text:'线性表-顺序表',link:'/articles/server/c/sequencelist'},
            {text:'线性表-链表',link:'/articles/server/c/linkedlist'},
            {text:'线性表-双向链表',link:'/articles/server/c/dullinkedlist'},
          ]
        },
        {
          text:'队列和栈',
          items:[
            {text:'栈',link:'/articles/server/c/ds/stack'},
            {text:'队列',link:'/articles/server/c/ds/queue'}
          ]
        },
        {
          text:'树和二叉树',
          items:[
            {text:'树',link:'/articles/server/c/ds/tree'},
            {text:'二叉树',link:'/articles/server/c/ds/binarytree'},
            {text:'线索二叉树',link:'/articles/server/c/ds/cluebinarytree'},
            {text:'树和森林',link:'/articles/server/c/ds/treeex'},
            {text:'哈夫曼树',link:'/articles/server/c/ds/huffmantree'}
          ]
        },
        {
          text:'图',
          items:[
            {text:'图',link:'/articles/server/c/ds/graph/base'}
          ]
        }
      ],
      '/articles/server/docker/': [
        {
          text: 'Docker',
          items: [
            { text: 'Linux安装Docker', link: '/articles/server/docker/install' },
            { text: 'Docker指令', link: '/articles/server/docker/01' },
            { text: 'Docker容器', link: '/articles/server/docker/20/container' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/matrix-johnjohn' }
    ]
  }
})
