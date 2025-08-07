import { randomBytes } from 'crypto';

export function generateReferralCode(length = 8): string {
  const base64 = randomBytes(length)
    .toString('base64')  
    .replace(/[^a-zA-Z0-9]/g, '') 
    .slice(0, length);
  return base64.toUpperCase();
}

export const generateCode = () => {
    return Math.floor(1000 + Math.random() * 9000);
}