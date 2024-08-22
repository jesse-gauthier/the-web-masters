<template>
	<!-- Skip Links for Accessibility -->
	<nav aria-label="Skip links" class="skip-links">
		<a href="#main-content" class="skip-link">Skip to main content</a>
		<a href="#footer" class="skip-link">Skip to footer</a>
	</nav>
</template>
<style scoped>
.skip-links {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
}

.skip-link {
	position: absolute;
	left: -999px;
	top: -999px;
	padding: 8px;
	background-color: #005a9c;
	color: white;
	text-decoration: none;
	border-radius: 4px;
}

.skip-link:focus {
	position: static;
	left: auto;
	top: auto;
	margin: 8px;
}
</style>
