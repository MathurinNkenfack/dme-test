import { Component, Input } from '@angular/core';
import { ComicCard } from '../types/comic-card';

@Component({
    selector: 'app-comic-card',
    standalone: true,
    imports: [],
    templateUrl: './comic-card.component.html',
    styleUrl: './comic-card.component.scss',
})
export class ComicCardComponent {
    @Input() comicCard: ComicCard = {
        img: null,
        title: 'comic',
        newStatus: null,
    };
    @Input() large: boolean = false;

    get status() {
        switch (this.comicCard.newStatus) {
            case 'today':
                return 'new today';
            case 'week':
                return 'new this week';
            case null:
                return null;
        }
    }
}
