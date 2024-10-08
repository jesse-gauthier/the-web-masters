import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wusgnyuyriirqtnqzcnw.supabase.co'
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1c2dueXV5cmlpcnF0bnF6Y253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NDgyNTAsImV4cCI6MjA0MTEyNDI1MH0.5E3oZaGvC9fN0f1JSa2RnyxCGGfSDsJWIZWlqUEQDTI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function logsCustomEvents(event, userId) {
	console.log(event)
	// Get the current page URL
	const pageUrl = window.location.href

	// Get the current timestamp in Eastern Time with 12-hour format and AM/PM
	const timestamp = new Date().toLocaleString('en-US', {
		timeZone: 'America/New_York', // Eastern Time Zone
		hour12: true, // 12-hour format
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	})

	const userAgent = navigator.userAgent
	const screenWidth = window.screen.width
	const screenHeight = window.screen.height
	const referrer = document.referrer

	console.log(pageUrl)
	console.log(timestamp)

	if (process.env.NODE_ENV === 'production') {
		// Log the event to Supabase in production mode
		const { data, error } = await supabase.from('analytics').insert([
			{
				user_id: userId,
				page_url: pageUrl,
				event: event,
				timestamp: timestamp, // Eastern Time with 12-hour format and AM/PM
				user_agent: userAgent,
				screen_width: screenWidth,
				screen_height: screenHeight,
				referrer: referrer,
			},
		])

		if (error) {
			console.error('Error logging event:', error)
		} else {
			console.log('Event', event, 'logged with additional info')
		}
	} else {
		// Skip logging in development mode
		console.log('Development mode: Supabase logging skipped')
	}
}
