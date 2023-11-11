import { readBinaryFile } from '@tauri-apps/api/fs';

async function showImage() {
    try {
        const img = await readBinaryFile('~/Downloads/3al21n0tfhlb1.jpg')

        const blob = new Blob([img], { type: 'image/*' });
        const imgUrl = URL.createObjectURL(blob);

        let testImage = document.getElementById('test') as HTMLImageElement;
        testImage.src = imgUrl;
    }
    catch(e) {
        console.error('Error:', e);
    }
}

showImage()

