import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wusgnyuyriirqtnqzcnw.supabase.co'
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1c2dueXV5cmlpcnF0bnF6Y253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NDgyNTAsImV4cCI6MjA0MTEyNDI1MH0.5E3oZaGvC9fN0f1JSa2RnyxCGGfSDsJWIZWlqUEQDTI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function logsCustomEvents(event, userId) {
	console.log(event)
	console.log(userId)

	// Get the current page URL
	const pageUrl = window.location.href

	if (process.env.NODE_ENV === 'production') {
		// Log the event to Supabase in production mode
		const { data, error } = await supabase
			.from('analytics')
			.insert([{ user_id: userId, page_url: pageUrl, event: event }])

		if (error) {
			console.error('Error logging page visit:', error)
		} else {
			console.log('Event', event, 'logged')
		}
	} else {
		// Skip logging in development mode
		console.log('Development mode: Supabase logging skipped')
	}
}
