import { openModal } from '@wix/dashboard-sdk';

console.log("script is running")

const btn = document.querySelector('#installation-button');
const slotConsentModalId = '346cce63-b26e-4846-b5df-00425e299caa';
const componentParams = {
  appDefinitionId: 'f1328fef-0e80-440d-8663-b17e7d4791a2',
  widgetId: '2b221737-b1cd-4bdc-83ec-399d1af66722',
  slotName: 'checkout:summary:after'
};

btn.addEventListener('click', async () => {
  const { modalClosed } = await openModal(slotConsentModalId, componentParams);
  console.log("DONE", modalClosed);
});