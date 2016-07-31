import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NewsService } from '../services/news.service/news.service';
import { News } from "../interfaces/news.interface";

import {SpinnerComponent} from "../shared/spinner/spinner.component";

/**
 * This class represents the lazy loaded NewsComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-news',
    templateUrl: 'news.component.html',
    styleUrls: ['news.component.css'],
    encapsulation: ViewEncapsulation.Native,
    directives: [SpinnerComponent],
    //providers: [NewsService]  //injected in app.component since we don't want 2 instances
})

export class NewsComponent implements OnInit {
    private vm:any;
    public item: any;
    private newsCount: number;
    private id:number = 0;
    private showNext: boolean;
    private spinner: boolean;
    private maxNews: number;

    /**
     * Creates an instance of the NewsComponent with the injected
     * NewsService.
     *
     * @param {newsService} newsService - The injected NewsService.
     */
    constructor(private newsService: NewsService) {
        this.showNext = true;
        this.maxNews = 10;
    }

    public getNews(max: number) {
        this.spinner = true;
        this.newsService.getNewsSlowly(max)
            .then(result => this.init(result))
    }

    ngOnInit() {
        this.getNews(this.maxNews);
    }

    private init(result: News[]) {
        this.newsCount = result.length;
        this.vm = JSON.parse(window.localStorage.getItem('news'));
        this.spinner = false;
        this.item = this.vm[this.id];
    }

    public next(){
        if(this.id < this.newsCount - 1) {
            return this.item = this.vm[++this.id];
        }
        if(this.id === this.newsCount - 1) {
            this.item = this.vm = null;
            this.id = 0;
            this.getNews(this.maxNews);
        }
    }

    public prev() {
        this.showNext = !(this.id === this.newsCount);
        if(this.id) {
            return this.item = this.vm[--this.id];
        }
    }
}

