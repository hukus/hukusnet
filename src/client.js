import * as sapper from '@sapper/app';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

sapper.start({
  target: document.querySelector('#sapper')
});
