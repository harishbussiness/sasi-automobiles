import { Bearing, CartItem } from '../types/bearing';

export const WHATSAPP_PHONE = '918331948888';
export const DISPLAY_PHONE = '+91 83319 48888';
export const SHOP_NAME = 'Sasi Automobiles';
export const BRAND_NAME = 'PowerDrive Bearings';
export const STORE_LOCATION_COLONY = 'Housing Board Colony';
export const STORE_LOCATION_CITY = 'Tanuku';
export const STORE_LOCATION_DISTRICT = 'West Godavari District';
export const STORE_LOCATION_PINCODE = '534211';
export const STORE_FULL_ADDRESS = 'Housing Board Colony, Tanuku, West Godavari District, Andhra Pradesh - 534211';

/**
 * Encodes text and creates WhatsApp link
 */
export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate inquiry message for a single bearing
 */
export function generateSingleProductWhatsAppMessage(bearing: Bearing, quantity: number = 1): string {
  if (bearing.priceOnEnquiry || bearing.price <= 0) {
    return `*PRICE INQUIRY - ${SHOP_NAME}*
Hello Sasi Automobiles team, I would like to inquire about the best price and availability for ${BRAND_NAME}:

*Product:* ${bearing.partNumber}
*Quantity Needed:* ${quantity} pcs

Please share your best quotation, dealer price, and dispatch lead time.`;
  }

  const isWholesale = quantity >= bearing.minWholesaleQty;
  const unitPrice = isWholesale ? bearing.wholesalePrice : bearing.price;
  const total = unitPrice * quantity;

  return `*ORDER / INQUIRY - ${SHOP_NAME}*
Hello Sasi Automobiles team, I would like to inquire/order ${BRAND_NAME}:

*Product:* ${bearing.partNumber}
*Quantity:* ${quantity} ${quantity >= bearing.minWholesaleQty ? '(Wholesale Tier)' : 'pcs'}
*Estimated Amount:* ₹${total.toLocaleString('en-IN')} (approx ₹${unitPrice}/pc)

Please confirm availability and dispatch details.`;
}

/**
 * Generate inquiry message for full cart / quotation
 */
export function generateCartWhatsAppMessage(
  items: CartItem[],
  customerInfo?: {
    name?: string;
    phone?: string;
    city?: string;
    pincode?: string;
    address?: string;
    workshopName?: string;
    notes?: string;
  }
): string {
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => {
    const isWholesale = item.quantity >= item.bearing.minWholesaleQty;
    const price = isWholesale ? item.bearing.wholesalePrice : item.bearing.price;
    return sum + (price * item.quantity);
  }, 0);

  let message = `*PURCHASE ORDER - ${SHOP_NAME}*\n`;
  message += `Authorized Distributor of ${BRAND_NAME}\n`;
  message += `====================================\n`;

  if (customerInfo?.name || customerInfo?.phone || customerInfo?.address || customerInfo?.city || customerInfo?.pincode) {
    message += `*DELIVERY DETAILS:*\n`;
    if (customerInfo?.name) message += `• Name: ${customerInfo.name}\n`;
    if (customerInfo?.phone) message += `• Mobile: ${customerInfo.phone}\n`;
    if (customerInfo?.city) message += `• Town: ${customerInfo.city}\n`;
    if (customerInfo?.pincode) message += `• PINCODE: ${customerInfo.pincode}\n`;
    if (customerInfo?.address) message += `• Address: ${customerInfo.address}\n`;
    if (customerInfo?.workshopName) message += `• Workshop: ${customerInfo.workshopName}\n`;
    message += `------------------------------------\n`;
  }

  message += `*ORDERED ITEMS LIST:*\n`;
  items.forEach((item, index) => {
    const isWholesale = item.quantity >= item.bearing.minWholesaleQty;
    const unitPrice = isWholesale ? item.bearing.wholesalePrice : item.bearing.price;
    const lineTotal = unitPrice * item.quantity;
    message += `${index + 1}. *${item.bearing.partNumber}* | Qty: ${item.quantity} pcs | ₹${lineTotal.toLocaleString('en-IN')}\n`;
  });

  message += `------------------------------------\n`;
  message += `*Total Units:* ${totalItemsCount} pcs\n`;
  message += `*Estimated Total:* ₹${totalAmount.toLocaleString('en-IN')}\n\n`;

  if (customerInfo?.notes) {
    message += `*Notes:* ${customerInfo.notes}\n\n`;
  }

  message += `Please confirm availability and dispatch details. Thank you!`;
  return message;
}

/**
 * Generate inquiry message for custom dimension search
 */
export function generateDimensionInquiryMessage(d?: number, D?: number, B?: number, note?: string): string {
  let message = `*CUSTOM BEARING SIZE INQUIRY - ${SHOP_NAME}*\n`;
  message += `Hello Sasi Automobiles, I am looking for a ${BRAND_NAME} with the following dimensions:\n`;
  if (d) message += `- Inner Bore (d): ${d} mm\n`;
  if (D) message += `- Outer Diameter (D): ${D} mm\n`;
  if (B) message += `- Width/Thickness (B): ${B} mm\n`;
  if (note) message += `- Application / Vehicle: ${note}\n`;
  message += `\nPlease check stock and suggest matching PowerDrive part numbers.`;
  return message;
}

/**
 * General contact inquiry message
 */
export function generateGeneralInquiryMessage(): string {
  return `Hello ${SHOP_NAME}! I want to inquire about ${BRAND_NAME} inventory, wholesale pricing, and availability.`;
}
