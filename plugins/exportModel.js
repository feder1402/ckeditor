import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import pencilIcon from '@ckeditor/ckeditor5-core/theme/icons/pencil.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class exportData extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'exportData', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Export data',
                icon: pencilIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                console.info(editor.getData())
            } );

            return view;
        } );
    }
}