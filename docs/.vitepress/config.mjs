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
        text: '全書目錄',
        items: [
          { text: '序章：交響曲如何裝下整個宇宙？', link: '/' },
          { text: '第一章：最優雅的維也納，為什麼聽起來這麼吵？', link: '/chapters/CORE_01_READER_DRAFT' },
          { text: '第二章：《浮士德》還沒寫完，為什麼已經先被唱出來？', link: '/chapters/CORE_02_READER_DRAFT' },
          { text: '第三章：Faust 聽見自己的墳墓，為什麼以為那是未來？', link: '/chapters/CORE_03_READER_DRAFT' },
          { text: '第四章：天使偷走 Faust 的靈魂時，究竟誰完成了救贖？', link: '/chapters/CORE_04_READER_DRAFT' },
          { text: '第五章：「永恆女性」牽引的「我們」，到底包括誰？', link: '/chapters/CORE_05_READER_DRAFT' },
          { text: '第六章：Berggasse 19 的一架鋼琴，能證明 Mahler 相信什麼嗎？', link: '/chapters/CORE_06_READER_DRAFT' },
          { text: '第七章：一首「被聖靈寫完」的交響曲，為什麼還要急電索取全文？', link: '/chapters/CORE_07_READER_DRAFT' },
          { text: '第八章：最有名的救贖句，為什麼不是最強的音樂橋？', link: '/chapters/CORE_08_READER_DRAFT' },
          { text: '第九章：全曲最巨大的「我們」，為什麼從一口氣開始？', link: '/chapters/CORE_09_READER_DRAFT' },
          { text: '第十章：一部作品有六種名字，哪一個才算答對？', link: '/chapters/CORE_10_READER_DRAFT' }
        ]
      }
    ],
    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    outline: {
      label: '本頁大綱'
    }
  }
})
