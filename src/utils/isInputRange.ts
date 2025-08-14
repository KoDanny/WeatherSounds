export function isInputRange(
	volumeController: unknown
): volumeController is HTMLInputElement {
	if (volumeController instanceof HTMLInputElement) {
		return volumeController.type === 'range';
	}
	return false;
}
