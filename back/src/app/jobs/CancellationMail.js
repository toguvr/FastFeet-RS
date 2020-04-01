import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { finish } = data;

    await Mail.sendMail({
      to: `${finish.deliveryman.name} <${finish.deliveryman.email}>`,
      subject: 'Agendamento Cancelado',
      template: 'cancellation',
      context: {
        recipient: finish.recipient.name,
        deliveryman: finish.deliveryman.name,
        date: format(
          parseISO(finish.canceled_at),
          "'dia 'dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
