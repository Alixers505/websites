const { asyncRoute } = require('@base-cms/utils');
const sgMail = require('@sendgrid/mail');
const { content: contentLoader } = require('@base-cms/web-common/page-loaders');
const { notificationBuilder, confirmationBuilder } = require('../template-builders');
const { SENDGRID_API_KEY } = require('../env');

sgMail.setApiKey(SENDGRID_API_KEY);

const send = ({ html, subject, addresses }) => sgMail.send({ html, subject, ...addresses });

module.exports = ({ queryFragment, notification, confirmation }) => asyncRoute(async (req, res) => {
  const { locals } = res.app;
  const { apollo } = req;
  const content = await contentLoader(apollo, { id: req.params.id, queryFragment });
  await send(notificationBuilder(notification, locals, content, req));
  if (req.body.email) await send(confirmationBuilder(confirmation, locals, content, req));
  res.json({ ok: true });
});
