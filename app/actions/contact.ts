'use server';

import { supabase } from '@/app/lib/supabase';

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string | null;
  const honeypot = formData.get('website') as string | null;

  // Honeypot check - bots will fill this hidden field
  if (honeypot) {
    // Silently reject but return success to not tip off bots
    return { success: true };
  }

  // Basic validation
  if (!name?.trim() || !email?.trim()) {
    return { error: 'Name and email are required' };
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: 'Invalid email address' };
  }

  const { error } = await supabase
    .from('contact_submissions')
    .insert({ name: name.trim(), email: email.trim(), phone: phone?.trim() || null });

  if (error) {
    console.error('Contact submission error:', error);
    return { error: 'Failed to submit. Please try again.' };
  }

  return { success: true };
}
