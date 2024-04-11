import { ComicCard } from '../types/comic-card';
import { ExtraCard } from '../types/extra-card';
import { ResumeCard } from '../types/resume-card';

const recommendedComics: ComicCard[] = [
    {
        img: null,
        newStatus: 'today',
        title: 'Chronicles of Totemism',
    },
    {
        img: null,
        newStatus: null,
        title: 'Picaso and the First Dragon',
    },
    {
        img: null,
        newStatus: 'week',
        title: 'Doors or Windows?',
    },
    {
        img: null,
        newStatus: 'week',
        title: 'Doors or Windows?',
    },
    {
        img: null,
        newStatus: null,
        title: 'Retrograde',
    },
    {
        img: null,
        newStatus: null,
        title: 'Alice and The Chapters of Winterfel',
    },
];

const comicsToResume: ResumeCard[] = [
    {
        img: null,
        title: 'The Sting',
        episode: 3,
        progress: 20,
    },
    {
        img: null,
        title: 'Njoku',
        episode: 3,
        progress: 20,
    },
    {
        img: null,
        title: 'Love at First Fight',
        episode: 3,
        progress: 20,
    },
    {
        img: null,
        title: 'My Breakup Ended the World',
        episode: 3,
        progress: 20,
    },
    {
        img: null,
        title: 'The Artist',
        episode: 3,
        progress: 20,
    },
    {
        img: null,
        title: 'Retrograde',
        episode: 3,
        progress: 20,
    },
];

const extraComics: ExtraCard[] = [
    {
        id: 'extra-1',
        img: 'assets/images/extra/img-1.jpg',
        title: 'assets/images/extra/img-1-title.png',
        yearlyPrice: 35.99,
        description:
            'This is the comic synopsis which is clickable to open more details about it. Let’s add some new text here.',
        comingDate: {
            month: 'Janauary',
            day: 1,
        },
    },
    {
        id: 'extra-2',
        img: 'assets/images/extra/img-2.jpg',
        title: 'assets/images/extra/img-2-title.png',
        yearlyPrice: 35.99,
        description:
            'This is the comic synopsis which is clickable to open more details about it. Let’s add some new text here.',
        comingDate: {
            month: 'Janauary',
            day: 2,
        },
    },
];
const zebraKidComics: ComicCard[] = [
    {
        img: 'assets/images/comics/beast-of-tazeti.jpg',
        title: 'beast of tazeti',
        newStatus: 'today',
    },
    {
        img: null,
        title: 'shorter heading',
        newStatus: null,
    },
    {
        img: null,
        title: 'notice background overlay',
        newStatus: 'today',
    },
];
export { recommendedComics, comicsToResume, extraComics, zebraKidComics };
