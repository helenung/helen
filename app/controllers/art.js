import Controller from '@ember/controller';

export default class ArtController extends Controller {

  artEntries = [
    { image: 'art1.jpg', description: 'Frog party. Acrylic on paper' },
    { image: 'art2.jpg', description: 'Tristan with crossed palms. Acrylic on paper' },
    { image: 'art3.jpg', description: 'Tristan and Sebastion. Acrylic on paper' },
    { image: 'art4.jpg', description: 'Tristan on purple blanket. Acrylic on paper' },
  ];

  // @action 
  // openImageViewer(imgSrc, imgDesc) {
  //   this.isImageViewerOpen = true;
  //   this.imgSrc = imgSrc;
  //   this.imgDesc = imgDesc;
  // }
}
