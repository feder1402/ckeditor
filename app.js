import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ExportData from './plugins/exportModel' 
import InsertImage from './plugins/insertImage'
import InsertReactComponent from './plugins/insertReactComponent'

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic, Image, InsertImage, ExportData, InsertReactComponent ],
        toolbar: [ 'bold', 'italic', 'insertImage', 'exportData', 'InsertReactComponent' ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );