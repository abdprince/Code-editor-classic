// ربط المحرر
import {EditorView, basicSetup} from "https://cdn.jsdelivr.net/npm/@codemirror/basic-setup@6.0.2/dist/index.min.js";
import {html} from "https://cdn.jsdelivr.net/npm/@codemirror/lang-html@6.1.1/dist/index.min.js";

const editor = new EditorView({
  doc: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>مرحبا بك!</h1>\n  </body>\n</html>",
  extensions: [basicSetup, html()],
  parent: document.getElementById('code-editor')
});

// تحديث العرض مباشرة عند الكتابة
editor.dispatch({
  effects: EditorView.updateListener.of(update => {
    if (update.docChanged) {
      const code = editor.state.doc.toString();
      const resultFrame = document.getElementById('result');
      resultFrame.srcdoc = code;
    }
  })
});

// زر النسخ
document.getElementById('copy-btn').addEventListener('click', () => {
  const code = editor.state.doc.toString();
  navigator.clipboard.writeText(code).then(() => {
    alert('تم نسخ الكود!');
  });
});
