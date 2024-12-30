export function validateImageExtension(imageUrl: string) {
    if (!imageUrl) {
        console.log("No image URL provided");
        return false;
    }
    const extensionPart = imageUrl.split('?')[0];
    const extension = extensionPart.split('.').pop()?.toLowerCase();
    if (!extension) {
        return false;
    }
    const validExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    if (validExtensions.includes(extension)) {
        return true;
    } else {
        return false
    }
}

