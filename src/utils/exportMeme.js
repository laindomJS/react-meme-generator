import html2canvas from 'html2canvas';

export const exportMeme = () => {
  html2canvas(document.querySelector('#meme')).then((canvas) => {
    let img = canvas.toDataURL('image/png');
    let link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
  })
}