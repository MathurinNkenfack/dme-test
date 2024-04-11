export type ExtraCard = {
    id: string;
    img: string | null;
    yearlyPrice: number;
    title: string | null;
    description: string;
    comingDate: {
        month: string;
        day: number;
    };
};
