export default function scrollToBottom() {
	window.scroll({
		top: document.body.offsetHeight,
		left: 0,
		bottom: 5,
		behavior: "smooth",
	});
}
