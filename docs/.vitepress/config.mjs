import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '馬勒第八號交響曲讀本',
  description: '專為團員與愛樂者設計的深度導讀與思想背景探索',
  base: '/Mahler8/',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '開始閱讀', link: '/chapters/CORE_01_READER_DRAFT' }
    ],
    sidebar: [
      {
        text: '📖 導讀目錄',
        items: [
          { text: '【序章】交響曲如何裝下整個宇宙？', link: '/' }
        ]
      },
      {
        text: '第一部：城市的交錯與思想背景',
        collapsed: false,
        items: [
          { text: '【第一章】走進 Vienna：一座城市，幾種互不相讓的未來', link: '/chapters/CORE_01_READER_DRAFT' },
          { text: '【第二章】《浮士德》還沒寫完，為什麼先被唱出來？', link: '/chapters/CORE_02_READER_DRAFT' }
        ]
      },
      {
        text: '第二部：歌德《浮士德》的核心謎題',
        collapsed: false,
        items: [
          { text: '【第三章】讀懂《浮士德》：一個永遠不能停下來的人', link: '/chapters/CORE_03_READER_DRAFT' },
          { text: '【第四章】天使奪走靈魂時，究竟誰完成了救贖？', link: '/chapters/CORE_04_READER_DRAFT' },
          { text: '【第五章】「永恆女性」牽引的「我們」，到底包括誰？', link: '/chapters/CORE_05_READER_DRAFT' }
        ]
      },
      {
        text: '第三部：青年網絡與聖歌的降臨',
        collapsed: false,
        items: [
          { text: '【第六章】Berggasse 19 的鋼琴，能證明馬勒相信什麼？', link: '/chapters/CORE_06_READER_DRAFT' },
          { text: '【第七章】被聖靈寫完的交響曲，為何還要電報索取全文？', link: '/chapters/CORE_07_READER_DRAFT' }
        ]
      },
      {
        text: '第四部：音樂的跨部整合與歷史定位',
        collapsed: false,
        items: [
          { text: '【第八章】兩部《馬勒第八》如何變成同一部作品？', link: '/chapters/CORE_08_READER_DRAFT' },
          { text: '【第九章】全曲最巨大的「我們」，為什麼從一口氣開始？', link: '/chapters/CORE_09_READER_DRAFT' },
          { text: '【第十章】一部作品有六種名字，哪一個才算答對？', link: '/chapters/CORE_10_READER_DRAFT' }
        ]
      }
    ],
    docFooter: {
      prev: '← 上一章',
      next: '下一章 →'
    },
    outline: {
      label: '本章目錄',
      level: [2, 3]
    }
  }
})
