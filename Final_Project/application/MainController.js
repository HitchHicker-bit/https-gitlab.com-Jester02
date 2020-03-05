import {baseHandlers} from './baseHandlers/baseHandlers.js';
import {BaseBlock} from './BaseBlock/BaseBlock.js';
import storageController from './storageController';
const mainControl = () => {
	baseHandlers();
	BaseBlock();
	storageController.reinitialization();
}
export {mainControl};
