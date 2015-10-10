import {default as Moment} from 'bower_components/moment/min/moment.min';
import {birthday} from 'modules/birthday';

document.querySelector('#birthday').textContent = Moment(birthday).fromNow();

import {default as cssLoader} from 'modules/defer-css';
cssLoader();