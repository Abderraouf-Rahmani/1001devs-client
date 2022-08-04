import Embed from '@editorjs/embed';
import List from '@editorjs/list';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: Embed,
  list: List,
  code: Code,
  linkTool: LinkTool,
  header: Header,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
