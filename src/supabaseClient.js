import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wusgnyuyriirqtnqzcnw.supabase.co'
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1c2dueXV5cmlpcnF0bnF6Y253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NDgyNTAsImV4cCI6MjA0MTEyNDI1MH0.5E3oZaGvC9fN0f1JSa2RnyxCGGfSDsJWIZWlqUEQDTI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
