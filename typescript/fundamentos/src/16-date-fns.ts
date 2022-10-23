import { subDays, format } from 'date-fns';

const date = new Date(1998, 0, 28);

const rta = subDays(date, 45);

console.log(rta);
