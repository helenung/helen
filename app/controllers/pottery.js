import Controller from '@ember/controller';

export default class PotteryController extends Controller {

  potteryEntries = [
    { image: 'pottery1.jpg', description: 'Planter: hand-built with airdry clay, painted with acrylics and varnished'},
    { image: 'pottery2.jpg', description: 'Wheel-thrown teacup' },
    { image: 'pottery3.jpg', description: 'Set of hand-built airdry clay pots, painted with acrylics and varnished' },
    { image: 'pottery4.jpg', description: 'Wheel-thrown bowl using sodium silicate to create cracks' },
    { image: 'pottery5.jpg', description: 'Hand-built bowl' },
  ];
}
