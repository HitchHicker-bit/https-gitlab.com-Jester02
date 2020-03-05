const showEditorButton = ( config ) => {

	const { blockId, targetIds, handlerItemId, popupId, closeId  } = config;

	const block = document.getElementById( blockId );
	const handler = document.getElementById( handlerItemId );
	const popup = document.getElementById( popupId );
	const close = document.getElementById( closeId );

	if( block ){
		block.addEventListener('mouseenter', () => {
			targetIds.forEach( targetId => {
				const target = document.getElementById( targetId );
				target.classList.add('show');
			});
		});

		block.addEventListener('mouseleave', () => {
			targetIds.forEach( targetId => {
				const target = document.getElementById( targetId );
				target.classList.remove('show');
			});
		});	
	}	

	if( handler && popup ){
		handler.addEventListener('click', () => {
			popup.classList.add('show');
		});
	}
	
	if( close && popup ){
		close.addEventListener('click', () => {
			popup.classList.remove('show');
		});
	}
	
}


const baseHandlers = () => {

	showEditorButton({
		blockId: 'CoursesBlock',
		targetIds: ['Customization'],
		handlerItemId: 'Customization',
		popupId: 'CustomBlock',
		closeId: 'Save'
	});
		
	showEditorButton({
		blockId: 'NewsBlock',
		targetIds: ['NewsChanger'],
		handlerItemId: 'NewsChanger',
		popupId: 'NewsCustom',
		closeId: 'SaveNews'
	});

	showEditorButton({
		blockId: 'navigation-block',
		targetIds: ['customMenu', 'changeLogo'],
		handlerItemId: 'customMenu',
		popupId: 'MainCustomMenu',
		closeId: 'SaveMenu'
	});

}
export {baseHandlers};