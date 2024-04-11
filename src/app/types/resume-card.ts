import { ComicCard } from './comic-card';

export type ResumeCard = Omit<ComicCard, 'newStatus'> & {
    episode: number;
    progress: number;
};
