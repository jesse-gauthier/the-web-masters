// Generate or retrieve a unique user ID and store it in localStorage
function getOrCreateUserId() {
	let userId = localStorage.getItem('userId')
	if (!userId) {
		userId = Math.random().toString(36).substr(2, 9)
		localStorage.setItem('userId', userId)
	}
	return userId
}

// Log an action to the backend server
function logAction(actionType, actionDetails = {}) {
	const userId = getOrCreateUserId()
	const data = {
		userId,
		actionType,
		actionDetails,
		url: window.location.href,
		referrer: document.referrer,
		userAgent: navigator.userAgent,
		screenWidth: window.screen.width,
		screenHeight: window.screen.height,
		timestamp: new Date().toISOString(),
	}

	fetch('http://localhost:5000/api/log', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			console.log(`Action ${actionType} logged:`, response)
		})
		.catch((error) => {
			console.error(`Error logging ${actionType}:`, error)
		})
}

// Example of logging different actions
function capturePageLoad() {
	logAction('Page Load')
}

function captureClickEvent(event) {
	logAction('Click', { target: event.target.tagName, id: event.target.id })
}

// Export the functions to be used in Vue components
export { capturePageLoad, captureClickEvent, logAction }
