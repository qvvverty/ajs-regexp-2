export default function formatPhoneNumber(phoneNumber) {
  let phoneNumberFormatted = phoneNumber.replace(/[^+\d]/g, '');
  phoneNumberFormatted = phoneNumberFormatted.replace(/^[78]/, '+7');
  return phoneNumberFormatted;
}
