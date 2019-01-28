import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import plicrowIcon from '@ckeditor/ckeditor5-core/theme/icons/pilcrow.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class InsertReactComponent extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'InsertReactComponent', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert React Component',
                icon: plicrowIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                const component = prompt( 'React component' );
                console.log('Inserting: ' + component)

                // need to make component part of the schema
                editor.model.schema.register( component, {
                    allowWhere: '$block',
                    allowContentOf: '$block',
                    allowAttributesOf: '$block',
                    inheritTypesFrom: '$block'
                } );

                // Insert component into model
                // editor.model.change( writer => {
                //     const componentElement = writer.createElement( component );

                //     // Insert the image in the current selection location.
                //     editor.model.insertContent( componentElement, editor.model.document.selection );
                // } );
            } );

            return view;
        } );
    }
}