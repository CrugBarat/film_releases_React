import billAndTed from '../assets/images/billAndTed.jpg';
import badBoys from '../assets/images/badBoys.jpg';
import extraction from '../assets/images/extraction.jpg';
import hunt from '../assets/images/hunt.jpg';
import invisibleMan from '../assets/images/invisibleMan.jpg';
import sonic from '../assets/images/sonic.jpg';

let imgs = {
    billAndTed,
    badBoys,
    extraction,
    hunt,
    invisibleMan,
    sonic
};

function getImage(key) {
    return imgs[key];
}

export default getImage;
