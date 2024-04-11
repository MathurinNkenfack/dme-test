import { Component, Input } from '@angular/core';
import { ExtraCard } from '../types/extra-card';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-extra-card',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: './extra-card.component.html',
    styleUrl: './extra-card.component.scss',
})
export class ExtraCardComponent {
    @Input() extraCard: ExtraCard = {
        id: 'extra-0',
        img: null,
        title: null,
        yearlyPrice: 0,
        description: 'description',
        comingDate: {
            month: 'Janauary',
            day: 2,
        },
    };

    get month() {
        return this.extraCard.comingDate.month.slice(0, 3);
    }

    get day() {
        const day = this.extraCard.comingDate.day;
        return day > 9 ? day + '' : '0' + day;
    }
}
