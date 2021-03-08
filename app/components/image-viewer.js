import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class ImageViewerComponent extends Component {
  @tracked
  isImageViewerOpen = false;

  @action 
  openImageViewer() {
    this.isImageViewerOpen = true;
  }

  @action 
  closeImageViewer() {
    this.isImageViewerOpen = false;
  }

  @action
  clickTakeover(event) {
    if (event.currentTarget.getElementsByClassName('image-viewer__image--full')[0] !== event.target) {
      this.closeImageViewer();
    }
  }
}
