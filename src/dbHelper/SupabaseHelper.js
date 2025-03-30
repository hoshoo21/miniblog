import { createClient } from '@supabase/supabase-js';
import { API_URL,API_KEY } from '@env';
const SUPABASE_URL =  API_URL; // Found in Project Settings > API
const SUPABASE_ANON_KEY = API_KEY; 
console.log(SUPABASE_URL);

export const SupabaseHelper = createClient(
	SUPABASE_URL,
	SUPABASE_ANON_KEY
);


