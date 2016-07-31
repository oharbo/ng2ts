import { Injectable } from '@angular/core';
import { News } from '../../interfaces/news.interface'
import { NEWS } from './mock-news';

@Injectable()
export class NewsService {
    public news: any;

    constructor() {
        this.news = NEWS;
    }

    public getNewsSlowly(max:number) {
        return new Promise<News []>(resolve =>
            setTimeout(function () {
                if (NEWS.length > max) {
                    NEWS.slice(0, max);
                }
                window.localStorage.setItem('news', JSON.stringify(NEWS));
                resolve(NEWS)
            }, 3500) // 3 sec
        );
    };
}