import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ResumeCard } from '../types/resume-card';

@Component({
    selector: 'app-resume-card',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: './resume-card.component.html',
    styleUrl: './resume-card.component.scss',
})
export class ResumeCardComponent {
    @Input() resumeCard: ResumeCard = {
        img: null,
        title: 'comic',
        episode: 0,
        progress: 0,
    };
}
