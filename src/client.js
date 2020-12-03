import * as sapper from '@sapper/app';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

sapper.start({
	target: document.querySelector('#sapper')
});