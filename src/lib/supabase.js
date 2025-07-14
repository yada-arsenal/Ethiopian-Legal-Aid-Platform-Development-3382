import { createClient } from '@supabase/supabase-js';

// Project credentials
const SUPABASE_URL = 'https://project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

// Export a mock function for components to use before connection
export const isMockData = true;