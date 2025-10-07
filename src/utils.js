import { format } from "date-fns";

export const toThousandsString = (number) => {
    if(number > 1000) {
        return `${(number / 1000).toFixed(1)}k`;
    }
    return '' + number;
};

export const formatDate = (date) => {
    return format(date, 'dd-mm-yyyy');
}