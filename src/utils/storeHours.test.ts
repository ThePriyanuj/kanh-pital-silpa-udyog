import test from 'node:test';
import assert from 'node:assert/strict';
import { getStoreStatus, buildWhatsAppLink, WHATSAPP_NUMBER } from './storeHours';

test('store hours: weekday during open hours (Wednesday 2:00 PM IST)', () => {
  // 2026-10-21 is a Wednesday
  // 14:00 IST = 08:30 UTC
  const testDate = new Date('2026-10-21T08:30:00Z');
  const status = getStoreStatus(testDate);
  assert.equal(status.isOpen, true);
  assert.equal(status.currentDay, 'Wednesday');
  assert.match(status.statusTextEn, /Open Now/);
  assert.match(status.statusTextEn, /8:00 PM/);
});

test('store hours: weekday after closing (Wednesday 9:30 PM IST)', () => {
  // 21:30 IST = 16:00 UTC
  const testDate = new Date('2026-10-21T16:00:00Z');
  const status = getStoreStatus(testDate);
  assert.equal(status.isOpen, false);
  assert.match(status.statusTextEn, /Closed · Opens Thursday at 10:00 AM/);
});

test('store hours: Sunday during open hours (Sunday 1:00 PM IST)', () => {
  // 2026-10-25 is a Sunday
  // 13:00 IST = 07:30 UTC
  const testDate = new Date('2026-10-25T07:30:00Z');
  const status = getStoreStatus(testDate);
  assert.equal(status.isOpen, true);
  assert.equal(status.currentDay, 'Sunday');
  assert.match(status.statusTextEn, /Open Now · Closes at 3:00 PM/);
});

test('store hours: Sunday after closing (Sunday 4:00 PM IST)', () => {
  // 16:00 IST = 10:30 UTC
  const testDate = new Date('2026-10-25T10:30:00Z');
  const status = getStoreStatus(testDate);
  assert.equal(status.isOpen, false);
  assert.match(status.statusTextEn, /Closed · Opens Monday at 10:00 AM/);
});

test('buildWhatsAppLink generates valid WhatsApp query for products', () => {
  const link = buildWhatsAppLink({ productName: 'Traditional Assamese Xorai (শৰাই)' });
  assert.ok(link.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`));
  assert.ok(link.includes(encodeURIComponent('Traditional Assamese Xorai (শৰাই)')));
});

test('buildWhatsAppLink supports Assamese text query', () => {
  const link = buildWhatsAppLink({ productName: 'কাঁহী-বাতি ছেট', isAssamese: true });
  assert.ok(link.includes(encodeURIComponent('কাঁহী-বাতি ছেট')));
});
