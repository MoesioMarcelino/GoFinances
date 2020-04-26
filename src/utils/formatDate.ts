import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formatDate = (date: Date, formatString: string): string => {
  return format(parseISO(date.toString()), formatString, { locale: ptBR });
};

export default formatDate;
