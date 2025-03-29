import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =  process.env.API_URL; // Found in Project Settings > API
const SUPABASE_ANON_KEY = proces.env.API_KEY; 
console.log(SUPABASE_URL);

export const SupabaseHelper = createClient(
	SUPABASE_URL,
	SUPABASE_ANON_KEY
);