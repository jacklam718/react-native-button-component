import Icon from 'react-native-vector-icons/EvilIcons';

const Icons = {};
function loadIcons() {
  const iconSet = [
    Icon.getImageSource('chevron-left', 20, 'white'),
    Icon.getImageSource('chevron-right', 20, 'white'),
    Icon.getImageSource('like', 20, 'white'),
    Icon.getImageSource('like', 20, '#7F91A7'),
    Icon.getImageSource('exclamation', 20, 'white'),
    Icon.getImageSource('gear', 20, 'white'),
    Icon.getImageSource('redo', 20, 'white'),
    Icon.getImageSource('close', 20, 'white'),
    Icon.getImageSource('check', 20, 'white'),
  ];

  Promise.all(iconSet).then(sources => {
    Icons.back = sources[0];
    Icons.forward = sources[1];
    Icons.like = sources[2];
    Icons.likeBlack = sources[3];
    Icons.exclamation = sources[4];
    Icons.gear = sources[5];
    Icons.redo = sources[6];
    Icons.close = sources[7];
    Icons.check = sources[8];
  });
}

loadIcons();

export default Icons;
