import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FooterLink } from './types';
import { CommonModule } from '@angular/common';
import { userInfo } from './data/user';
import { ComicCard } from './types/comic-card';
import {
    comicsToResume,
    extraComics,
    recommendedComics,
    zebraKidComics,
} from './data/comic';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { ResumeCardComponent } from './resume-card/resume-card.component';
import { ResumeCard } from './types/resume-card';
import { ExtraCardComponent } from './extra-card/extra-card.component';
import { ExtraCard } from './types/extra-card';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        MatIconModule,
        ComicCardComponent,
        ResumeCardComponent,
        ExtraCardComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    user = userInfo;
    recommendedComics: ComicCard[] = [];
    comicsToResume: ResumeCard[] = [];
    extraComics: ExtraCard[] = [];
    startHereComics: ComicCard[] = [];
    zebraKidsComics: ComicCard[] = [];
    romanceComics: ComicCard[] = [];
    afroFuturComics: ComicCard[] = [];
    title = 'Zebra Comics DME: Test';

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'brush',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/brush.svg')
        );
        iconRegistry.addSvgIcon(
            'gesture',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/gesture.svg')
        );
        iconRegistry.addSvgIcon(
            'home',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg')
        );
        iconRegistry.addSvgIcon(
            'library',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/library.svg')
        );
        iconRegistry.addSvgIcon(
            'star',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg')
        );
        iconRegistry.addSvgIcon(
            'verified',
            sanitizer.bypassSecurityTrustResourceUrl(
                'assets/icons/verified.svg'
            )
        );
    }

    ngOnInit(): void {
        this.recommendedComics = recommendedComics;
        this.comicsToResume = comicsToResume;
        this.extraComics = extraComics;
        this.startHereComics = recommendedComics;
        this.zebraKidsComics = zebraKidComics;
        this.romanceComics = recommendedComics;
        this.afroFuturComics = recommendedComics;
    }

    heroData = {
        categories: ['action', 'comedy'],
        new: true,
        titleImage: 'assets/images/hero/banner.png',
        description:
            'This is the comic synopsis which is clickable to open more details about it. Let’s add some new text here.',
        slices: [
            {
                id: 1,
                img: 'assets/images/hero/img-1.jpg',
                url: '#',
            },
            {
                id: 2,
                img: 'assets/images/hero/img-2.jpg',
                url: '#',
            },
            {
                id: 3,
                img: null,
                url: '#',
            },
            {
                id: 4,
                img: null,
                url: '#',
            },
            {
                id: 5,
                img: null,
                url: '#',
            },
        ],
    };

    footerLinks: FooterLink[] = [
        {
            name: 'for you',
            icon: 'home',
            url: '#',
        },
        {
            name: 'originals',
            icon: 'gesture',
            url: '#',
        },
        {
            name: 'creators',
            icon: 'brush',
            url: '#',
        },
        {
            name: 'library',
            icon: 'library',
            url: '#',
        },
        {
            name: 'Premium',
            icon: 'verified',
            url: '#',
        },
    ];
}
