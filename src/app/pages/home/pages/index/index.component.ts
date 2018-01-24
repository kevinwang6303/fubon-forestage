import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  cate = [
    {
      images: 'assets/images/icon-2-1.png',
      content: '富邦瞭望台'
    },
    {
      images: 'assets/images/icon-2-2.png',
      content: '訊息資訊站'
    },
    {
      images: 'assets/images/icon-2-3.png',
      content: '行銷補給站'
    },
    {
      images: 'assets/images/icon-2-4.png',
      content: '增員練功訪'
    },
    {
      images: 'assets/images/icon-2-1.png',
      content: '經營心法哨'
    },
    {
      images: 'assets/images/icon-2-2.png',
      content: '年度最優秀'
    },
    {
      images: 'assets/images/icon-2-3.png',
      content: '富邦人物誌'
    }
  ];

  series = [
    {
      title: '投資一點靈',
      content: '提供最有效率的投資',
      images: 'assets/images/gallery-bank.jpg'
    },
    {
      title: '新人養成計畫',
      content: '培育專業人才，百萬理財人',
      images: 'assets/images/gallery-financial.jpg'
    },
    {
      title: '富邦好Young',
      content: '年輕投資，老年得利',
      images: 'assets/images/gallery-foundation.jpg'
    },
    {
      title: '愛你樂活',
      content: '與你愛的人一起樂活',
      images: 'assets/images/gallery-insurance.jpg'
    },
    {
      title: '長期照護系列',
      content: '提供照護完善資源規劃',
      images: 'assets/images/gallery-life.jpg'
    }
  ];

  file = [
    {
      image: 'assets/images/1516779230561.jpg'
    },
    {

      image: 'assets/images/1516779237276.jpg'
    },
    {

      image: 'assets/images/1516779242860.jpg'
    },
    {
      image: 'assets/images/1516779230561.jpg'
    },
    {

      image: 'assets/images/1516779237276.jpg'
    },
    {

      image: 'assets/images/1516779242860.jpg'
    },
    {
      image: 'assets/images/1516779230561.jpg'
    },
    {

      image: 'assets/images/1516779237276.jpg'
    },
    {

      image: 'assets/images/1516779242860.jpg'
    },
    {
      image: 'assets/images/1516779230561.jpg'
    },
    {

      image: 'assets/images/1516779237276.jpg'
    },
    {

      image: 'assets/images/1516779242860.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
