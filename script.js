// إنشاء محرر CodeMirror
const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
  mode: "htmlmixed",  // يدعم HTML + CSS + JS
  theme: "material",
  lineNumbers: true,  // عرض أرقام الأسطر
  tabSize: 2,
  indentWithTabs: true,
  lineWrapping: true
});

// الكود الافتراضي
editor.setValue(`<!DOCTYPE html>
<html>
  <body>
    <h1>مرحبا بك بمحرر الأكواد البسيط</h1>
  </body>
</html>`);

// ربط نافذة العرض لتحديث مباشر
const iframe = document.getElementById('result');

function updateResult() {
  const code = editor.getValue();
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(code);
  iframe.contentWindow.document.close();
}

// تحديث العرض عند الكتابة مباشرة
editor.on("change", updateResult);

// تشغيل التحديث أول مرة
updateResult();

// زر النسخ
document.getElementById('copy-btn').addEventListener('click', () => {
  const code = editor.getValue();
  navigator.clipboard.writeText(code).then(() => {
    alert('تم النسخ');
  }).catch(err => {
    alert('فشل النسخ، حاول مرة أخرى.');
    console.error(err);
  });
});
