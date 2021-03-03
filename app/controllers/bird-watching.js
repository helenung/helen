import Controller from '@ember/controller';

export default class BirdWatchingController extends Controller {
  birds = [
    { image: 'bird1.jpg', description: 'Red shouldered hawk', location: 'San Francisco' },
    { image: 'bird2.jpg', description: 'Anna\'s Hummingbird', location: 'San Francisco' },
    { image: 'bird3.jpg', description: '2 House finches', location: 'San Francisco' },
    { image: 'bird4.jpg', description: 'American crow', location: 'San Francisco' },
    { image: 'bird5.jpg', description: 'Mourning dove', location: 'San Francisco' },
    { image: 'bird6.jpg', description: 'Peregrine falcon', location: 'Campanile Tower, UC Berkeley' },
    { image: 'bird7.jpg', description: 'Anna\s Hummingbird', location: 'San Francisco' },
    { image: 'bird8.jpg', description: 'Snowy Plover', location: 'Fort Ord Dones State Park, Marina' },
  ];
}
