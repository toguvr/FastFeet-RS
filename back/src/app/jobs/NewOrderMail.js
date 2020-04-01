import Mail from '../../lib/Mail';

class NewOrderMail {
  get key() {
    return 'NewOrderMail';
  }

  async handle({ data }) {
    console.log('oi', data);

    const { deliveryman, recipient, order } = data;
    console.log(deliveryman, recipient, order);

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova entrega disponível',
      template: 'neworder',
      context: {
        deliveryman: deliveryman.name,
        recipient,
        order,
      },
    });
  }
}

export default new NewOrderMail();
