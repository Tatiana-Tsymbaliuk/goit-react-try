import { format } from 'date-fns';

export const formatEventStar = (start) => {
        return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};
